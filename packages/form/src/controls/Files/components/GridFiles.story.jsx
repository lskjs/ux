import React from 'react';
import Story from '@lskjs/dev/Story';
import GridFile from './GridFile';
import GridFiles from './GridFiles';
import LineFile from './LineFile';
import LineFiles from './LineFiles';
import items from './files.mock';

export default ({ storiesOf }) => (
  storiesOf('components/AnyFiles', module)
    .add('GridFile', () => (
      <Story>
        <GridFile
          {...items[0]}
        />
        <GridFile
          {...items[1]}
        />
      </Story>
    ))
    .add('GridFiles', () => (
      <Story>
        <GridFiles
          items={items}
        />
      </Story>
    ))
    .add('LineFile', () => (
      <Story>
        <LineFile
          {...items[0]}
        />
        <LineFile
          {...items[1]}
        />
      </Story>
    ))
    .add('LineFiles', () => (
      <Story>
        <LineFiles
          items={items}
        />
      </Story>
    ))
    .add('GridFiles errors[]', () => (
      <Story>
        <GridFiles
          items={[]}
        />
        <GridFiles
          items={null}
        />
        <GridFiles
          items={[]}
        />
        <GridFiles
          items={null}
        />
      </Story>
    ))
);
