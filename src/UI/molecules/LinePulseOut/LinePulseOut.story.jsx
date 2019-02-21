import React from 'react';
import LinePulseOut from './LinePulseOut';

export default ({ storiesOf }) => (
  storiesOf('ui/LinePulseOut', module)
    .add('Default', () => (
      <div>
        <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
          <LinePulseOut color="#fff" type="default" />
        </div>
        <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
          <LinePulseOut color="#fff" type="rapid" />
        </div>
      </div>
    ))
);
