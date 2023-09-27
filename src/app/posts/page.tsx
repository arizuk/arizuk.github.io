import Divider from "@/components/divider";
import PostList from "@/components/postList";
import { Post, getAllPosts } from "@/lib/posts";

const getPostsByYear = () => {
  return getAllPosts().reduce((acc: { [year: string]: Post[] }, post: Post) => {
    const year = post.date.substring(0, 4);
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {});
};

export default function Page() {
  const postsByYear = getPostsByYear();
  return (
    <main className="max-w-[500px] mx-auto">
      <Divider />
      <PostList posts={getAllPosts()} />
    </main>
  );
}
