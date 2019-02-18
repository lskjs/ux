import React from 'react';
import BallPulseRise from './BallPulseRise';

export default ({ storiesOf }) => (
  storiesOf('ui/BallPulseRise', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <BallPulseRise color="#fff" />
      </div>
    ))
);
