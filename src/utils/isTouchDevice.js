export default function isTouchDevice() {
  if (!__CLIENT__) return false;
  const el = document.createElement('div');
  el.setAttribute('ongesturestart', 'return;');
  return typeof el.ongesturestart === 'function';
}
