import React from 'react';
import DEV from '@lskjs/dev/DEV';
import Story from '@lskjs/dev/Story';
// import ObserverDEV from './ObserverDEV';

export default ({ storiesOf, action }) => (
  storiesOf('ui/DEV', module)
    .add('children', () => (
      <Story>
        <DEV>
          Empty
        </DEV>
      </Story>
    ))
    .add('json', () => (
      <Story>
        <DEV json={{ test: 123 }} />
      </Story>
    ))
);

