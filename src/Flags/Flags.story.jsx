import React from 'react';
import Story from '../Story';
import Flags from './Flags';

export default ({ storiesOf }) => (
  storiesOf('Flags', module)
    .add('code', () => (
      <Story>
        <Flags />
      </Story>
    ))
    .add('custom height', () => (
      <Story>
        <Flags height="55" />
      </Story>
    ))
    .add('another country', () => (
      <Story>
        <Flags country="FR" />
      </Story>
    ))
    .add('more', () => (
      <Story>
        <Flags country="FR" />
        <Flags country="UK" />
        <Flags country="BL" />
        <Flags country="AF" />
      </Story>
    ))
);

