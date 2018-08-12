const fs = require('fs');
const withSass = require('@zeit/next-sass')

const getRoutes = async () => {
  const pathMap = {
    '/':  { page: '/index' },
    '/posts':  { page: '/posts' },
  };

  const posts = JSON.parse(fs.readFileSync('./static/posts.json', 'utf-8'));
  return posts.reduce((map, post) => {
    map[`/posts/${post.href}`] = { page: '/_post_content', query: { id: post.href } }
    return map;
  }, pathMap);
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