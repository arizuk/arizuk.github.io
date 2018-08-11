const getRoutes = async () => {
  return {};
};

module.exports = {
  webpack(config) {
    config.node = {
      fs: 'empty',
    };
    return config;
  },
  exportPathMap: getRoutes,
}