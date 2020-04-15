/* eslint-disable no-nested-ternary */
export default () =>
  !!(typeof __DEV__ !== 'undefined' ? __DEV__ : typeof window !== 'undefined' ? window._DEV__ : global.__DEV__);
