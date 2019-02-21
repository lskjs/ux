import React from 'react';
import BallScaleRandom from './BallScaleRandom';

export default ({ storiesOf }) => (
  storiesOf('ui/BallScaleRandom', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <BallScaleRandom color="#fff" />
      </div>
    ))
);
