const getRoutes = require('./routes');

module.exports = {
  webpack(config) {
    config.node = {
      fs: 'empty',
    };
    return config;
  },
  exportPathMap: getRoutes,
}