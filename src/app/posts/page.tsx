import Divider from "@/components/divider";
import PostList from "@/components/postList";
import { getAllPosts } from "@/lib/posts";

export default function Page() {
  return (
    <main className="max-w-[500px] mx-auto">
      <Divider />
      <PostList posts={getAllPosts()} />
    </main>
  );
}
