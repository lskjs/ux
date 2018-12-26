import React from 'react';
import DEV from './DEV';

module.exports = ({ storiesOf, action }) => (
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

