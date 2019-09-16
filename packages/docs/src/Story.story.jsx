import React from 'react';
import Story from '@buzzguru/ui/Story';

export default ({ storiesOf }) => (
  storiesOf('Story', module)
    .add('default', () => (
      <Story>
        <div>
          test
        </div>
      </Story>
    ))
);
