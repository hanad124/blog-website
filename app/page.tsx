import Link from "next/link";
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";
import { FiSearch } from "react-icons/fi";

const HomePage = () => {
  const postMetadata = getPostMetadata();

  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div className="">
      <div className="flex justify-center mb-5">
        <div className="flex items-center gap-3">
          <div className="bg-slate-700 font-bold text-xl w-7 h-7 rounded-md flex justify-center items-center text-white">
            F
          </div>
          <h1 className="font-bold text-white text-2xl">
            <Link href="/">Faruq Blog</Link>
          </h1>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="text-slate-300 mx-2 text-center lg:text-2xl sm:text-lg sm:leading-3  md:leading-8 md-text-lg w-[43rem] md:w-[35rem] leading-7 font-regular tracking-1 lg:leading-10">
          Welcome to my personal blog about programming! Here, I share my
          passion for coding and all things tech-related.
        </div>
      </div>
      <div className="flex justify-center mb-14">
        <div className="header-search mt-6 flex items-center text-white items-center gap-2  rounded-full  px-2 py-1">
          <FiSearch />
          <input
            type="text"
            className="bg-transparent px-3 lg:w-[24rem] md:w-[18rem]"
            placeholder="search..."
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-x-0 justify-center">
        {postPreviews}
      </div>
    </div>
  );
};

export default HomePage;

// {/*  From tutorials and how-to guides
//     to in-depth analysis of the latest programming trends, you'll find
//     plenty of informative content to help you level up your skills. */}
