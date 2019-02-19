import React from 'react';
import BallClipRotate from './BallClipRotate';

export default ({ storiesOf }) => (
  storiesOf('ui/BallClipRotate', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <BallClipRotate color="#fff" />
      </div>
    ))
);
