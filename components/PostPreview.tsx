import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="post-preview max-w-lg mx-auto h-[506px] max-h-[506px] w-[19rem] bg-white rounded-lg mt-0 flex flex-col">
      <div className="relative h-52">
        <Image
          src={props.image || <Skeleton />}
          alt="Description of image"
          layout="fill"
          objectFit="cover"
          className="rounded-[10px]"
        />
      </div>
      <div className="py-5 flex flex-col justify-between">
        <div>
          <div className="flex gap-4 text-center text-[12px]">
            <p className="post-category uppercase cursor-pointer text-secondarycolor">
              {props.category || <Skeleton />}
            </p>
            <div className="dot text-secondarycolor"></div>
            <p className="post-date text-secondarycolor text-base">
              {props.date || <Skeleton />}
            </p>
          </div>
          <Link href={`/posts/${props.slug || <Skeleton />}`}>
            <h1 className="post-title text-xl font-bold mb-2 cursor-pointer hover:underline">
              {props.title || <Skeleton />}
            </h1>
          </Link>
          <p className="post-subtitle text-secondarycolor text-lg mb-4">
            {props.subtitle.slice(0, 100)}
            {props.subtitle.length > 100 && " ..."}
          </p>
          <div className="flex gap-4 items-center flex-1">
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
