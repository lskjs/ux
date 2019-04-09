const req = require.context(
  '../src',
  true,
  /^.*(?!UI\/).*.story.js|.story.js|.story.jsx|.story.jsx$/,
)

export default req.keys().map(req);

// export default {  
//   'src/A/A.story.jsx': require('../src/A/A.story.jsx').default,
//   'src/Carousel/Carousel.story.jsx': require('../src/Carousel/Carousel.story.jsx').default,
//   'src/Form2/controls/Files/Files.story.jsx': require('../src/Form2/controls/Files/Files.story.jsx').default,
//   'src/Form2/controls/PhoneInput/PhoneInput.story.jsx': require('../src/Form2/controls/PhoneInput/PhoneInput.story.jsx').default,
//   'src/AvatarGroup/AvatarGroup.story.jsx': require('../src/AvatarGroup/AvatarGroup.story.jsx').default,
//   'src/Button/Button.story.jsx': require('../src/Button/Button.story.jsx').default,
// };