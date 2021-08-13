/* eslint-disable no-nested-ternary */
export const isDev = () =>
  !!(typeof __DEV__ !== 'undefined' ? __DEV__ : typeof window !== 'undefined' ? window.__DEV__ : global.__DEV__);

export default isDev;
