import fs from 'fs';
import matter from 'gray-matter';

const postsDir = './public/posts';
const postsJson = './public/posts.json';

const posts = fs.readdirSync(postsDir).map(file => {
  const mdMeta = matter(fs.readFileSync(postsDir + "/" + file, 'utf-8'));
  const date = file.split("-")[0];
  return {
    href: file.replace(/.md$/, ''),
    title: mdMeta.data.title,
    date: date,
  }
});
fs.writeFileSync(postsJson, JSON.stringify(posts.reverse()), 'utf-8');
