const articleReq = require.context('../node_modules/@lskjs/article', true, /.story.js$|.story.js$|.story.jsx$|.story.jsx$|.story.tsx$/);
const devReq = require.context('../node_modules/@lskjs/dev', true, /.story.js$|.story.js$|.story.jsx$|.story.jsx$|.story.tsx$/);
const gridReq = require.context('../node_modules/@lskjs/grid', true, /.story.js$|.story.js$|.story.jsx$|.story.jsx$|.story.tsx$/);
const gridtableReq = require.context('../node_modules/@lskjs/gridtable', true, /.story.js$|.story.js$|.story.jsx$|.story.jsx$|.story.tsx$/);
const pageReq = require.context('../node_modules/@lskjs/page', true, /.story.js$|.story.js$|.story.jsx$|.story.jsx$|.story.tsx$/);
const navbarReq = require.context('../node_modules/@lskjs/navbar', true, /.story.js$|.story.js$|.story.jsx$|.story.jsx$|.story.tsx$/);
const themeReq = require.context('../node_modules/@lskjs/theme', true, /.story.js$|.story.js$|.story.jsx$|.story.jsx$|.story.tsx$/);
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
  modules: getStories(
    buttonReq,
    formReq,
    listReq,
    modalReq,
    scrollReq,
    uiReq,
    articleReq,
    downloadsReq,
    devReq,
    gridReq,
    gridtableReq,
    pageReq,
    navbarReq,
    themeReq,
  ),
  options: {
    name: 'docs',
  },
  knobs: false,
};
