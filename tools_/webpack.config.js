require('babel-core/register');
require('babel-polyfill');
const ctx = require('./config').default;
const getWebpackConfig = require('./getWebpackConfig').default;
module.exports = getWebpackConfig(ctx);
