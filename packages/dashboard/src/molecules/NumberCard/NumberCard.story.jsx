import React from 'react';
import NumberCard from './NumberCard';
import Story from '@lskjs/dev/Story';

export default ({ storiesOf }) => (
  storiesOf('dashboard/ui/NumberCard', module)
    .add('Default', () => (
      <Story>
        <NumberCard
          number={16}
          text="grown"
        />
      </Story>
    ))
);
