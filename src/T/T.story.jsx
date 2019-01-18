import React from 'react';
import Story from '../Story';
import T from './T';

module.exports = ({ storiesOf }) => (
  storiesOf('T', module)
    .add('empty', () => (
      <Story>
        <T name="test.key" />
      </Story>
    ))

);

