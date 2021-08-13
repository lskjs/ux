import React from 'react';
import Story from '@lskjs/dev/Story';
import Flag from './Flag';

export default ({ storiesOf }) =>
  storiesOf('flag/Flag', module)
    .add('code', () => (
      <Story>
        <Flag />
      </Story>
    ))
    .add('custom height', () => (
      <Story>
        <Flag height={55} />
      </Story>
    ))
    .add('another country', () => (
      <Story>
        <Flag country="fr" />
      </Story>
    ))
    .add('more', () => (
      <Story>
        <Flag country="FR" />
        <Flag country="uk" />
        <Flag country="BL" />
        <Flag country="ru" />
      </Story>
    ));
