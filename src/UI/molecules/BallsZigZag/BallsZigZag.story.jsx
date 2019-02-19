import React from 'react';
import BallsZigZag from './BallsZigZag';

export default ({ storiesOf }) => (
  storiesOf('ui/BallsZigZag', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <BallsZigZag color="#fff" />
      </div>
    ))
);
