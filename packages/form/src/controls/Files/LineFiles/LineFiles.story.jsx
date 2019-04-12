import React from 'react';
import Story from '@lskjs/dev/Story';
import LineFiles from './LineFiles';

const files = [
  {
    amount: '3',
    size: '100 Kb',
  },
  {
    amount: '4',
    size: '200 Kb',
  },
  {
    amount: '5',
    size: '300 Kb',
  },
];

export default ({ storiesOf }) => (
  storiesOf('Form2/components/LineFiles', module)
    .add('default', () => (
      <Story>
        <LineFiles files={files} />
      </Story>
    ))
);

