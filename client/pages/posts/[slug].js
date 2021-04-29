import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { useEffect, useState } from "react";
import Toolbar from "../../components/Toolbar";

function Post({ title, body, image }) {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    const imgBuilder = ImageUrlBuilder({
      projectId: "qc7kts2y",
      dataset: "production",
    });

    setImageURL(imgBuilder.image(image));
  }, [image]);

  return (
    <div>
      <Toolbar />
      <div className="flex flex-col m-10 sm:m-auto sm:w-[500px] md:w-[700px] pt-20">
        <h1 className="font-semibold text-[36px] tracking-widest">{title}</h1>
        {imageURL && <img className="w-full" src={imageURL} alt="imageURL" />}
        <div className="mt-10">
          <BlockContent blocks={body} />
        </div>
      </div>
    </div>
  );
}

export default Post;

export async function getServerSideProps(Context) {
  const pageSlug = Context.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${pageSlug}" ]`
  );
  const url = `https://qc7kts2y.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        body: post.body,
        title: post.title,
        image: post.mainImage,
      },
    };
  }
}
