/* eslint-disable no-nested-ternary */
export default (value) => {
  const bool = !!value;
  if (typeof window !== 'undefined') {
    window.__DEV__ = bool;
  } else {
    global.__DEV__ = bool;
  }
};
