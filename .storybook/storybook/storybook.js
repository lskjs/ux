import { configure, storiesOf, action } from '@kadira/storybook';
import React from 'react';
import StyleWrapper from './StyleWrapper';
import StoryWrapper from './StoryWrapper';

// console.log = (a) => {
//   require('fs').writeFileSync('./stotylog.txt', a)
// }
// console.log('asdasdas')
// throw new Error('asdasdas')

const storybook = {
  action,
  storiesOf: (...args) => {
    return storiesOf(...args)
      .addDecorator((story) => (
        <StyleWrapper>
          <StoryWrapper>
            {story()}
          </StoryWrapper>
        </StyleWrapper>
      ))
  },
}

function wrapModule(module) {
  if (typeof module === 'function') {
    module(storybook)
  } else {
    console.log('DO SOMETHING ELSE');
  }
}

function wrapModules(stories, module) {
  return configure(() => {
    for (let key in stories) { // eslint-disable-line
      wrapModule(stories[key]);
    }
  }, module);
}

export { StyleWrapper, StoryWrapper, configure, storybook, wrapModule, wrapModules }
