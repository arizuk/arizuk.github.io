import { Post } from "@/lib/posts";
import dayjs from "dayjs";
import Link from "next/link";

const getPostsByYear = (posts: Post[]) => {
  return posts.reduce((acc: { [year: string]: Post[] }, post: Post) => {
    const year = post.date.substring(0, 4);
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});
};

type Props = {
  posts: Post[];
};
const PostList: React.FC<Props> = ({ posts }) => {
  const postsByYear = getPostsByYear(posts);
  return (
    <div className="flex flex-col gap-12 mt-8 px-2 md:px-8">
      {Object.entries(postsByYear)
        .sort()
        .reverse()
        .map(([year, posts]) => (
          <div key={year}>
            <h2 className="text-xl font-bold text-gray-700 font-serif">
              {year}
            </h2>
            <ul className="list-disc list-inside">
              {posts.map((post) => (
                <li key={post.href} className="mt-4 flex justify-between">
                  <Link
                    className="hover:underline"
                    href={`/posts/${post.href}`}
                  >
                    {post.title}
                  </Link>{" "}
                  <span className="text-right w-16 font-bold text-gray-700 font-serif">
                    {dayjs(post.date).format("MMM D")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};
export default PostList;
