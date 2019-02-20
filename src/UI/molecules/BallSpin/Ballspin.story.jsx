import React from 'react';
import BallSpin from './BallSpin';

export default ({ storiesOf }) => (
  storiesOf('ui/BallSpin', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <BallSpin color="#fff" />
      </div>
    ))
);
