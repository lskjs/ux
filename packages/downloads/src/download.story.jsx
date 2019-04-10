import React from 'react';
import download from './download';
import Story from '@lskjs/dev/Story';
import DEV from '@lskjs/dev/DEV';

const data = [
  ['title1', 'title2', 'title 3'],
  ['cell1', 'cell2', 'cell3'],
  ['cell4', 'cell5', 'cell6'],
];

export default ({ storiesOf }) => (
  storiesOf('utils', module)
    .add('download', () => (
      <Story>
        <DEV json={data} />
        <button onClick={() => download({ name: 'file', data })}>
          Download spreadsheet
        </button>
      </Story>
    ))
);
