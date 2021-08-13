const __DEV__ =
  typeof window !== 'undefined' &&
  window.location.hostname === 'localhost' &&
  window.location.search &&
  window.location.search.startsWith &&
  (window.location.search.startsWith('?path=/story/form') || window.location.search.indexOf('viewMode=story') !== -1);

export default __DEV__;
