import React from 'react';
import random from 'lodash/random';
import Story from '@lskjs/dev/Story';
import ChipItem from './ChipItem';

const user = () => ({
  id: random(99),
  title: 'John Smith',
  src: `https://randomuser.me/api/portraits/men/${random(99)}.jpg`,
});

export default ({ storiesOf, action, knob }) => storiesOf('ui/ChipItem', module)
  .add('Default', () => (
    <Story>
      <ChipItem
        item={user()}
      />
    </Story>
  ));
