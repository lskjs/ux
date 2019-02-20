import React from 'react';
import BallPulseSync from './BallPulseSync';

export default ({ storiesOf }) => (
  storiesOf('ui/BallPulseSync', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <BallPulseSync color="#fff" />
      </div>
    ))
);
