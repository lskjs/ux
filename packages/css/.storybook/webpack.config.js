const babelrc = require('../.babelrc.js');
module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.module.rules[0].use[0].options.plugins = babelrc.plugins;
  // config.module.rules[0].use[0].options.plugins.push('emotion');
  return config;
};