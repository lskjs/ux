// import { config } from 'storybox';
// import params from './params';
// config(params);
import React from 'react';

import { configure, storiesOf } from '@storybook/react';
// , action

//
// storiesOf('InnerHtml', module)
//   .add('--example', () => (
//     <InnerHtml
//       type={knob.text('type=text/md', 'md')}
//       children={knob.text('children', '# Demo Title\n Demo text')}
//     />
//   ))
//   .add('text', () => (
//     <InnerHtml>
//       Demo text Demo text Demo text Demo text Demo text Demo text
//     </InnerHtml>
//   ))
//
function action() {
  return () => {}
}
function loadStories() {
//   const qwe = require('../src/General/Avatar/Avatar.story.jsx').default;
//   console.log({qwe});
//   require('../src/General/Avatar/Avatar.story').default({
//     storiesOf, action
//   });
//   // You can require as many stories as you need.
//
  console.log('12312312');
  console.log({ action });
  storiesOf('Button', module)
    .add('with text', () => (
      <button onClick={action('clicked')}>Hello button</button>
    ))
    .add('with some emoji', () => (
      <button onClick={action('clicked')}><span role="img" aria-label="so cool">😀 😎 👍 💯</span></button>
    ));
}
//
configure(loadStories, module);
//
// storybox
