import React from 'react';
import Story from '@lskjs/dev/Story';
import Badge from './Badge';

export default ({ storiesOf }) => {
  storiesOf('ui/Badge', module)
    .add('Default', () => (
      <Story>
        <Badge count={1} color="#fff">
          <button>Hello world</button>
        </Badge>
      </Story>
    ))
    .add('Standalone', () => (
      <Story>
        <Badge count={12} standalone  color="#fff" backgroundColor="#333" />
      </Story>
    ))
    .add('dontShowZero', () => (
      <Story>
        <Badge count={0} color="#fff" backgroundColor="#333" dontShowZero>
          <button>Hello world</button>
        </Badge>
      </Story>
    ))
    .add('Position: bottom, right', () => (
      <Story>
        <Badge count={5} color="#fff" backgroundColor="#333" position={ ['bottom', 'right'] }>
          <button>Hello world</button>
        </Badge>
      </Story>
    ))
    .add('Position: top, right', () => (
      <Story>
        <Badge count={5} color="#fff" backgroundColor="#333" position={ ['top', 'right'] }>
          <button>Hello world</button>
        </Badge>
      </Story>
    ))
    .add('Position: top, left', () => (
      <Story>
        <Badge count={5} color="#fff" backgroundColor="#333" position={ ['top', 'left'] }>
          <button>Hello world</button>
        </Badge>
      </Story>
    ))
    .add('Position: bottom, left', () => (
      <Story>
        <Badge count={5} color="#fff" backgroundColor="#333" position={ ['bottom', 'left'] }>
          <button>Hello world</button>
        </Badge>
      </Story>
    ));
};