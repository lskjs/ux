import React from 'react';
import LineScaleRandom from './LineScaleRandom';

export default ({ storiesOf }) => (
  storiesOf('ui/LineScaleRandom', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <LineScaleRandom color="#fff" />
      </div>
    ))
);
