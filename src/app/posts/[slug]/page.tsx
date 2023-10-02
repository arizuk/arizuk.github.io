/* eslint-disable react/no-children-prop */
import Divider from "@/components/divider";
import { getAllPosts, readPostContent } from "@/lib/posts";
import dayjs from "dayjs";
import matter from "gray-matter";
import { Metadata, ResolvingMetadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data } = matter(readPostContent(params.slug));

  return {
    title: data.title,
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const { data, content } = matter(readPostContent(params.slug));
  const date = params.slug.split("-")[0];

  return (
    <main className="mx-auto max-w-[800px]">
      <h2 className="text-center text-2xl mt-8">{data.title}</h2>
      <p className="text-center my-6">
        <span className="text-lg font-bold text-gray-700 font-serif">
          {dayjs(date).format("MMMM DD, YYYY")}
        </span>
      </p>
      <Divider />
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        children={content}
        className="prose max-w-[800px]"
      />
    </main>
  );
  return;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}
