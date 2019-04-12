import React from 'react';
import Story from '@lskjs/dev/Story';
import GridFile from './GridFile';

const url = [
  'https://pp.userapi.com/c636819/v636819936/346c3/6xIvJ0BI8rs.jpg',
];

export default ({ storiesOf }) => (
  storiesOf('Form2/components/GridFile', module)
    .add('default', () => (
      <Story>
        <GridFile url={url} />
      </Story>
    ))
);
