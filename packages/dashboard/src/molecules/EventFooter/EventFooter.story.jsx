import React from 'react';
import EventFooter from './EventFooter';
import Story from '@lskjs/dev/Story';

export default ({ storiesOf }) => (
  storiesOf('dashboard/ui/EventFooter', module)
    .add('default', () => (
      <Story>
        <EventFooter
          event={{
            title: 'Название эвента',
            image: 'https://picsum.photos/200?random',
            _id: 1,
          }}
        >
          <div style={{ color: 'blue' }}>children element</div>
        </EventFooter>
      </Story>
    ))
);
