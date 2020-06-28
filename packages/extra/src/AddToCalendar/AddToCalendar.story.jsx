import React from 'react';
import Story from '@lskjs/dev/Story';

import AddToCalendar from './AddToCalendar';

const addEvent = {
  title: 'Sample Event',
  description: 'This is the sample event provided as an example only',
  location: 'Portland, OR',
  startTime: '2016-09-16T20:15:00-04:00',
  endTime: '2016-09-16T21:45:00-04:00',
};

export default ({ storiesOf }) =>
  storiesOf('extra/AddToCalendar', module).add('Default', () => (
    <Story>
      <AddToCalendar event={addEvent} buttonLabel="Add to My Calendar" />
    </Story>
  ));
