import React from 'react';
import StatusBlock from './StatusBlock';
import Story from '@lskjs/dev/Story';



export default ({ storiesOf }) => (
  storiesOf('dashboard/ui/StatusBlock', module)
    .add('default', () => (
      <Story>
        <StatusBlock
          title="Ожидание"
          paint="red"
          dateTime={Date.now()}
        />
      </Story>
    ))
);
