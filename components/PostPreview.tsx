import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="post-preview max-w-lg mx-auto  h-[426px] max-h-[426px] w-[19rem] rounded-lg mt-0 flex flex-col border border-slate-700  items-end ">
      <div className="relative h-52 w-full">
        <Image
          src={props.image || <Skeleton />}
          alt="Description of image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-[10px] border-b-2 border-slate-700"
        />
      </div>
      <div className=" flex flex-col">
        <div>
          <div className="flex gap-4 text-center text-[12px mt-3  ml-2">
            <p className="post-category uppercase cursor-pointer text-secondarycolor text-xs">
              {props.category || <Skeleton />}
            </p>
            <div className="dot text-secondarycolor"></div>
            <p className="post-date text-secondarycolor text-sm">
              {props.date || <Skeleton />}
            </p>
          </div>
          <Link href={`/posts/${props.slug || <Skeleton />}`}>
            <h1 className="post-title text-xl font-bold mb-2 cursor-pointer hover:underline  ml-2">
              {/* {props.subtitle.slice(0, 68)}
            {props.subtitle.length > 68 && " ..."} */}
              {props.title.slice(0, 28)}
              {props.title.length > 28 && " ..."}
            </h1>
          </Link>
          <p className="post-subtitle text-secondarycolor text-md mb-4  ml-2">
            {props.subtitle.slice(0, 68)}
            {props.subtitle.length > 68 && " ..."}
          </p>
          <div className="flex gap-4 items-end mb-4 ml-2">
            <Image
              src={props.avator || <Skeleton />}
              alt="Description of image"
              width={100}
              height={100}
              className="border-solid	border-2 border-slate-400 rounded-full w-10 h-10 cursor-pointer"
            />
            <div className="">
              <p className="text-primarycolor">
                {props.author || <Skeleton />}
              </p>
              <p className="text-secondarycolor">
                {props.career || <Skeleton />}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
