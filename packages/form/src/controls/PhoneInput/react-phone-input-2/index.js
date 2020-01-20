if (typeof window !== 'undefined') {
  try {
    module.exports = require('react-phone-input-2').default;
  } catch (err) {
    console.error(err);
    module.exports = () => null;
  }
} else {
  module.exports = () => null;
}
