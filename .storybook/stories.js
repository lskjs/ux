const req = require.context(
  '../src',
  true,
  /^.*(?!UI\/).*.story.js|.story.js|.story.jsx|.story.jsx$/,
)

export default req.keys().map(req);

// export default {  
//   'src/A/A.story.jsx': require('../src/A/A.story.jsx'),
//   'src/Avatar/Avatar.story.jsx': require('../src/Avatar/Avatar.story.jsx'),
//   'src/AvatarGroup/AvatarGroup.story.jsx': require('../src/AvatarGroup/AvatarGroup.story.jsx'),
//   'src/Button/Button.story.jsx': require('../src/Button/Button.story.jsx'),
// };