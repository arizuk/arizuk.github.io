import fs from "fs";
import path from "path";

export type Post = {
  href: string;
  title: string;
  date: string;
};

export const getAllPosts = () => {
  const filePath = path.join(process.cwd(), "public/posts.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const posts = JSON.parse(fileContent) as Post[];
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const readPostContent = (slug: string) => {
  const filePath = path.join(process.cwd(), "public/posts", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
};
