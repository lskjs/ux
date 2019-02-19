import React from 'react';
import BallRotate from './BallRotate';

export default ({ storiesOf }) => (
  storiesOf('ui/BallRotate', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <BallRotate color="#fff" />
      </div>
    ))
);
