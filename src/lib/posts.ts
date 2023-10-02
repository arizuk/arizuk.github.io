import fs from "fs";
import matter from "gray-matter";
import path from "path";

export type Post = {
  slug: string;
  title: string;
  date: string;
};

const postsDir = "./public/posts";

export const getAllPosts = (): Post[] => {
  const posts = fs.readdirSync(postsDir).map((file) => {
    const mdMeta = matter(fs.readFileSync(postsDir + "/" + file, "utf-8"));
    const date = file.split("-")[0];
    return {
      slug: file.replace(/.md$/, ""),
      title: mdMeta.data.title,
      date: date,
    };
  });
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const readPostContent = (slug: string) => {
  const filePath = path.join(process.cwd(), "public/posts", `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent;
};
