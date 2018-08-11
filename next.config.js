const fs = require('fs');
const withSass = require('@zeit/next-sass')
const getRoutes = async () => {
  const posts = JSON.parse(fs.readFileSync('./static/posts.json', 'utf-8'));
  const map = {};
  posts.forEach(p => {
    map[`/posts/${p.href}`] = { page: '/_post_content', query: { id: p.href } }
  });
  return map;
};

const config = {
  webpack(config) {
    config.node = {
      fs: 'empty',
    };
    return config;
  },
  exportPathMap: getRoutes,
};

module.exports = withSass(config);