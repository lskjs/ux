const babelrc = require('../.babelrc.js');
const webpack = require('webpack');
module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
  });
  config.resolve.extensions.push('.ts', '.tsx');
  const transformRuntimeIndex = babelrc.plugins.indexOf('@babel/plugin-transform-runtime');
  if (transformRuntimeIndex >= 0) {
    babelrc.plugins.splice(transformRuntimeIndex, 1);
  }
  config.module.rules[0].use[0].options.plugins = babelrc.plugins;
  config.plugins.push(new webpack.NormalModuleReplacementPlugin(
    /\.\/countriesCodes\.json/,
    require.resolve('./countriesCodes.json', {paths: [ __dirname ]}),
  ));
  config.plugins.push(new webpack.NormalModuleReplacementPlugin(
    /@lskjs\/dev\/Story/,
    (resource) => {
      if (resource.context.endsWith('@lskjs/dev')) {
        resource.request = require.resolve('@lskjs/dev');
      }
    },
  ));
  config.plugins.push(new webpack.NormalModuleReplacementPlugin(
    /createFormWithI18/,
    (resource) => {
      resource.request = require.resolve('../src/noop.jsx');
    },
  ));
  config.plugins.push(new webpack.DefinePlugin({
    __DEV__: 1,
  }));
  // console.log(JSON.stringify(config, null, 2));
  // config.module.rules[0].use[0].options.plugins.push('emotion');
  return config;
};
