import { useRouter } from "next/router";

function Toolbar() {
  const router = useRouter();

  return (
    <div className="fixed w-full bg-black h-10 flex px-auto justify-around items-center">
      <div
        className="cursor-pointer text-white hover:text-blue-400"
        onClick={() => router.push("/")}
      >
        Home
      </div>
      <div
        className="cursor-pointer text-white hover:text-blue-400"
        onClick={() =>
          (window.location.href = "https://github.com/taehyun9202")
        }
      >
        Github
      </div>
      <div
        className="cursor-pointer text-white hover:text-blue-400"
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
