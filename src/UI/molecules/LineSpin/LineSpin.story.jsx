import React from 'react';
import LineSpin from './LineSpin';

export default ({ storiesOf }) => (
  storiesOf('ui/LineSpin', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <LineSpin color="#fff" />
      </div>
    ))
);
