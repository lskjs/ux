const buttonReq = require.context('../node_modules/@lskjs/button', true, /.story.js$|.story.js$|.story.jsx$|.story.jsx$|.story.tsx$/);
const downloadsReq = require.context('../node_modules/@lskjs/downloads', true, /.story.js$|.story.js$|.story.jsx$|.story.jsx$|.story.tsx$/);
const formReq = require.context('../node_modules/@lskjs/form', true, /.story.js$|.story.js$|.story.jsx$|.story.jsx$|.story.tsx$/);
const listReq = require.context('../node_modules/@lskjs/list', true, /.story.js$|.story.js$|.story.jsx$|.story.jsx$|.story.tsx$/);
const modalReq = require.context('../node_modules/@lskjs/modal', true, /.story.js$|.story.js$|.story.jsx$|.story.jsx$|.story.tsx$/);
const scrollReq = require.context('../node_modules/@lskjs/scroll', true, /.story.js$|.story.js$|.story.jsx$|.story.jsx$|.story.tsx$/);
const uiReq = require.context('../node_modules/@lskjs/ui', true, /.story.js$|.story.js$|.story.jsx$|.story.jsx$|.story.tsx$/);

const getStories = (...requests) => {
  const arrayOfStories = requests.map((req) => req.keys().map(req));
  console.log(arrayOfStories);
  return [].concat.apply([], arrayOfStories);
};

export default {
  modules: getStories(buttonReq, downloadsReq, formReq, listReq, modalReq, scrollReq, uiReq),
  options: {
    name: 'docs',
  },
  knobs: false,
};
