if (typeof window !== 'undefined') {
  module.exports = require('react-phone-input-2').default;
} else {
  module.exports = () => null;
}
