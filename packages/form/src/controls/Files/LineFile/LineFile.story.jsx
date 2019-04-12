import React from 'react';
import Story from '@lskjs/dev/Story';
import LineFile from './LineFile';

const files = [
  {
    amount: '3',
    size: '100 Kb',
  },

];

export default ({ storiesOf }) => (
  storiesOf('Form2/components/LineFile', module)
    .add('default', () => (
      <Story>
        <LineFile files={files} />
      </Story>
    ))
);

