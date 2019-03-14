const req = require.context(
  '../src',
  true,
  /^.*(?!UI\/).*.story.js|.story.js|.story.jsx|.story.jsx$/,
)

export default req.keys().map(req);

// export default {  
//   'src/A/A.story.jsx': require('../src/A/A.story.jsx').default,
//   'src/Avatar/Avatar.story.jsx': require('../src/Avatar/Avatar.story.jsx').default,
//   'src/AvatarGroup/AvatarGroup.story.jsx': require('../src/AvatarGroup/AvatarGroup.story.jsx').default,
//   'src/Button/Button.story.jsx': require('../src/Button/Button.story.jsx').default,
//   'src/Progress/Progress.story.jsx': require('../src/Progress/Progress.story.jsx').default,
// };