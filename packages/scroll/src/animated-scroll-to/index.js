if (typeof window !== 'undefined') {
  // module.exports = { default: require('./animated-scroll-to.client').default };
  module.exports = require('./animated-scroll-to.client').default;
} else {
  // module.exports = { default: require('./animated-scroll-to.server').default };
  module.exports = require('./animated-scroll-to.server').default;
}
