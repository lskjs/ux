import AnimatedScrollTo from 'animated-scroll-to';

function isElement(el) {
  return el && el.nodeName;
}
function getElementOffset(el) {
  let top = 0;
  let left = 0;
  let element = el;

  // Loop through the DOM tree
  // and add it's parent's offset to get page offset
  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top,
    left,
  };
}

export default (el, { ignoreHorizontalScroll, ...options } = {}) => {
  if (ignoreHorizontalScroll && isElement(el)) {
    const { top } = getElementOffset(el);
    // eslint-disable-next-line no-param-reassign
    el = top;
  }
  return AnimatedScrollTo(el, options);
};
