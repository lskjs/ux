import React from 'react';
import Story from '@lskjs/dev/Story';
import Paper from './Paper';

export default ({ storiesOf }) => {
  storiesOf('ui/Paper', module)
    .add('Default', () => (
      <Story>
        <Paper>Content</Paper>
      </Story>
    ))
    .add('Bordered', () => (
      <Story>
        <Paper bordered>Content</Paper>
      </Story>
    ))
    .add('Shadow', () => (
      <Story>
        <Paper shadow>Content</Paper>
      </Story>
    ))
    .add('No radius', () => (
      <Story>
        <Paper radius={false}>Content</Paper>
      </Story>
    ))
    .add('Overflow', () => (
      <Story>
        <Paper overflow>Content</Paper>
      </Story>
    ))
    .add('Translucent', () => (
      <Story>
        <Paper view="translucent">Content</Paper>
      </Story>
    ));
};
