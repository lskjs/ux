import React from 'react';
import EventFooter from './EventFooter';
import ThemeInjector from '../../../ThemeInjector';

module.exports = ({ storiesOf }) => (
  storiesOf('ui/EventFooter', module)
    .add('default', () => (
      <ThemeInjector>
        <div style={{ padding: 60, backgroundColor: 'grey' }}>
          <EventFooter
            event={{
              title: 'Название эвента',
              image: 'https://picsum.photos/200?random',
              _id: 1,
            }}
          >
            <div style={{ color: 'blue' }}>children element</div>
          </EventFooter>
        </div>
      </ThemeInjector>
    ))
);
