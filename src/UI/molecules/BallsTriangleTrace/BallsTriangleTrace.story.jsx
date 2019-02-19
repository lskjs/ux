import React from 'react';
import BallsTriangleTrace from './BallsTriangleTrace';

export default ({ storiesOf }) => (
  storiesOf('ui/BallsTriangleTrace', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <BallsTriangleTrace color="#fff" />
      </div>
    ))
);
