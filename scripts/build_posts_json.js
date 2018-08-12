const fs = require('fs');
const fm = require('front-matter');

const postsDir = './static/posts';
const postsJson = './static/posts.json';

const posts = fs.readdirSync(postsDir).map(file => {
  const mdMeta = fm(fs.readFileSync(postsDir + "/" + file, 'utf-8'));
  const date = file.split("-")[0];
  return {
    href: file.replace(/.md$/, ''),
    title: mdMeta.attributes.title,
    date: date,
  }
});
fs.writeFileSync(postsJson, JSON.stringify(posts.reverse()), 'utf-8');
