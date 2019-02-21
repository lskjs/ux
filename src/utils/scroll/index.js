import animateScrollTo from './animated-scroll-to';

const defaultOptions = {
  // duration of the scroll per 1000px, default 500
  speed: 500,

  // minimum duration of the scroll
  minDuration: 250,

  // maximum duration of the scroll
  maxDuration: 1500,

  // DOM element to scroll, default window
  // Pass a reference to a DOM object
  // Example: document.querySelector('#element-to-scroll'),
  // element: window,

  // Additional offset value that gets added to the desiredOffset.  This is
  // useful when passing a DOM object as the desiredOffset and wanting to adjust
  // for an fixed nav or to add some padding.
  offset: -300,

  // should animated scroll be canceled on user scroll/keypress
  // if set to "false" user input will be disabled until animated scroll is complete
  // (when set to false, "passive" will be also set to "false" to prevent Chrome errors)
  cancelOnUserAction: true,

  // Set passive event Listeners to be true by default. Stops Chrome from complaining.
  passive: true,

  // Scroll horizontally rather than vertically (which is the default)
  horizontal: true,
};

export default {
  scrollTo(id, options = defaultOptions) {
    if (__DEV__) console.log('smooth-scroll.scrollTo', id);
    // return false;
    try {
      const anchor = document.querySelector(id);
      if (!anchor) return false;
      // animateScrollTo(anchor, options);
      animateScrollTo(anchor, {
        offset: -200,
      });
      return true;
    } catch (err) {
      return false;
    }
  },
};
