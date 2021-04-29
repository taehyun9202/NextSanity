import { useRouter } from "next/router";

function Toolbar() {
  const router = useRouter();

  return (
    <div>
      <div onClick={() => router.push("/")}>Home</div>
      <div
        onClick={() =>
          (window.location.href = "https://github.com/taehyun9202")
        }
      >
        Gitbug
      </div>
      <div
        onClick={() =>
          (window.location.href = "https://www.instagram.com/the.bisang/")
        }
      >
        Instagram
      </div>
    </div>
  );
}

export default Toolbar;
