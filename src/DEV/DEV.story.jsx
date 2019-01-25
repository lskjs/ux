import React from 'react';
import DEV from './DEV';
// import ObserverDEV from './ObserverDEV';

export default ({ storiesOf, action }) => (
  storiesOf('A', module)
    .add('children', () => (
      <DEV>
        Empty
      </DEV>
    ))
    .add('json', () => (
      <DEV json={{ test: 123 }} />
    ))
);

