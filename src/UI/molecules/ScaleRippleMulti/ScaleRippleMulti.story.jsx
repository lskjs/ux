import React from 'react';
import ScaleRippleMulti from './ScaleRippleMulti';

export default ({ storiesOf }) => (
  storiesOf('ui/ScaleRippleMulti', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <ScaleRippleMulti color="#fff" />
      </div>
    ))
);
