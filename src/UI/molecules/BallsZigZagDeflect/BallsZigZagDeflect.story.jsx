import React from 'react';
import BallsZigZagDeflect from './BallsZigZagDeflect';

export default ({ storiesOf }) => (
  storiesOf('ui/BallsZigZagDeflect', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <BallsZigZagDeflect color="#fff" />
      </div>
    ))
);
