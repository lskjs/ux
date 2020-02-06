import React from 'react';
import Story from '@lskjs/dev/Story';
import Sider from './Sider';

export default ({ storiesOf }) => storiesOf('ui/Sider', module)
  .add('Default', () => (
    <Story>
      <Sider
        left={<div style={{ border: '1px solid red' }}>left</div>}
        right={<div style={{ border: '1px solid #000' }}>right</div>}
      />
    </Story>
  ))
  .add('With gap', () => (
    <Story>
      <Sider
        gap={20}
        left={<div style={{ border: '1px solid red' }}>left</div>}
        right={<div style={{ border: '1px solid #000' }}>right</div>}
      />
    </Story>
  ))
  .add('Center', () => (
    <Story>
      <Sider
        verticalAlign="center"
        gap={20}
        left={<div style={{ border: '1px solid red' }}>left</div>}
        right={<div style={{ border: '1px solid #000' }}>right</div>}
      />
    </Story>
  ))
  .add('Start', () => (
    <Story>
      <Sider
        verticalAlign="flex-start"
        gap={20}
        left={<div style={{ border: '1px solid red' }}>left</div>}
        right={<div style={{ border: '1px solid #000' }}>right</div>}
      />
    </Story>
  ))
  .add('End', () => (
    <Story>
      <Sider
        verticalAlign="flex-end"
        gap={20}
        left={<div style={{ border: '1px solid red' }}>left</div>}
        right={<div style={{ border: '1px solid #000' }}>right</div>}
      />
    </Story>
  ));
