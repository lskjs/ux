import React from 'react';
import Story from '@lskjs/dev/Story';
import Root from './Root';

export default ({ storiesOf }) => (
  storiesOf('ui/Root', module)
    .add('empty', () => (
      <Story>
        <Root uapp={{}}>
          asfdg
        </Root>
      </Story>
    ))

);

