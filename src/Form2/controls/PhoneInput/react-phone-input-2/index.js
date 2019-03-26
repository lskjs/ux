if (typeof window !== 'undefined') {
  module.exports = { default: require('react-phone-input-2').default };
} else {
  module.exports = { default: () => null };
}
