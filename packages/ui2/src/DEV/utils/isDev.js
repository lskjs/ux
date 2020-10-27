/* eslint-disable no-nested-ternary */
export default () =>
  !!(typeof __DEV__ !== 'undefined' ? __DEV__ : typeof window !== 'undefined' ? window.__DEV__ : global.__DEV__);
