import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import Image from "next/image";
import "../../../sass/home.scss";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = folder + slug + ".md";
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

const generateStaticParam = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => {
    slug: post.slug;
  });
};
const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="text-center">
        <div className="flex justify-center gap-5 text-lg font-medium	mb-5">
          <p className="text-secondarycolor border border-[#64748b] rounded-xl px-2 cursor-pointer hover:bg-[#64748b]">
            {post.data.category}
          </p>
          <div className="dot"></div>
          <p className="text-secondarycolor">{post.data.date}</p>
        </div>
        <p className="text-primarycolor text-[2rem] font-medium">
          {post.data.title}
        </p>
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-5">
            <Image
              src={post.data.avator}
              alt="Description of image"
              width={100}
              height={100}
              className="border-solid	border-2 border-slate-400 rounded-full w-10 h-10 cursor-pointer"
            />
            <div className="text-secondarycolor font-medium">
              <p className="text-primarycolor">{post.data.author}</p>
              <p>{post.data.career}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 mx-3">
        <Image
          src={post.data.image}
          alt="Description of image"
          width={830}
          height={500}
          className="rounded-md mb-11 text-center w-[48rem] m-auto max-h-[30rem] h-auto max-w-lg"
        />
        {/* w-16 md:w-32 lg:w-48 */}
      </div>
      <div className="flex justify-center">
        <div className="sm-ml-28 m-auto break-words">
          <article className="prose md:prose-lg lg:prose-xl dark:prose-invert text-white prose-a:text-[#ffffff99] prose-headings:text-white prose-strong:text-[#ffffff99] prose-blockquote:text-[#fff] prose-code:text-[#fff] prose-img:rounded-xl prose-img:w-[2rem] prose-img:h-[16rem]">
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
