import React from 'react';
import BallClipRotatePulse from './BallClipRotatePulse';

export default ({ storiesOf }) => (
  storiesOf('ui/BallClipRotatePulse', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <BallClipRotatePulse color="#fff" />
      </div>
    ))
);
