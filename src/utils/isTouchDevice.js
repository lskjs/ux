export default function isTouchDevice() {
  const el = document.createElement('div');
  el.setAttribute('ongesturestart', 'return;');
  return typeof el.ongesturestart === 'function';
}
