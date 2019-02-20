import React from 'react';
import ScaleRipple from './ScaleRipple';

export default ({ storiesOf }) => (
  storiesOf('ui/ScaleRipple', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <ScaleRipple color="#fff" type="rapid" />
      </div>
    ))
);
