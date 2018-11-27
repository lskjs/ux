const req = require.context(
  '../src',
  true,
  /.story.js|.story.js|.story.jsx|.story.jsx$/,
);



export default {
  modules: req.keys().map(req),
  options: {
    name: 'LskGeneral',
  },
  info: true,
};

