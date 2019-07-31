import React from 'react';
import DateTime from './DateTime';
import Story from '@lskjs/dev/Story';



export default ({ storiesOf }) => (
  storiesOf('dashboard/ui/DateTime', module)
    .add('default', () => (
      <Story>
        <DateTime
          dateTime={Date.now()}
        />
      </Story>
    ))
);
