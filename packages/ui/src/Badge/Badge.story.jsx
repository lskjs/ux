import React from 'react';
import Story from '@lskjs/dev/Story';
import Badge from './Badge';

export default ({ storiesOf }) => {
    storiesOf('ui/Badge', module)
      .add('Default', () => (
        <Story>
          <Badge count="1" color="#fff" backgroundColor="#333" />
        </Story>
      ))
      .add('Standalone', () => (
        <Story>
          <Badge count="12" standalone={true}  color="#fff" backgroundColor="#333"  />
        </Story>
      ))
      .add('dontShowZero', () => (
        <Story>
          <Badge count="0" color="#fff" backgroundColor="#333" dontShowZero={true} />

        </Story>
      ))
      .add('Position: bottom, right', () => (
        <Story>
          <Badge count="5" color="#fff" backgroundColor="#333" position={['bottom', 'right']} />
        </Story>
      ))
      .add('Position: top, right', () => (
        <Story>
          <Badge count="5" color="#fff" backgroundColor="#333" position={['top', 'right']} />
        </Story>
      ))
      .add('Position: top, left', () => (
        <Story>
          <Badge count="5" color="#fff" backgroundColor="#333" position={['top', 'left']} />
        </Story>
      ))
      .add('Position: bottom, left', () => (
        <Story>
          <Badge count="5" color="#fff" backgroundColor="#333" position={['bottom', 'left']} />
        </Story>
      ));
  };