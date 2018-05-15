require('@babel/register');
require('@babel/polyfill');
const ctx = require('./config').default;
const getWebpackConfig = require('@lskjs/build').getWebpackConfig;
module.exports = getWebpackConfig(ctx);
