import React from 'react';
import BallBeat from './BallBeat';

export default ({ storiesOf }) => (
  storiesOf('ui/BallBeat', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <BallBeat color="#fff" />
      </div>
    ))
);
