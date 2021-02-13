/* eslint-disable no-nested-ternary */
const setDev = (value) => {
  const bool = !!value;
  if (typeof window !== 'undefined') {
    window.__DEV__ = bool;
  } else {
    global.__DEV__ = bool;
  }
};

export default setDev;
