import React from 'react';
import BallScaleMulti from './BallScaleMulti';

export default ({ storiesOf }) => (
  storiesOf('ui/BallScaleMulti', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <BallScaleMulti color="#fff" />
      </div>
    ))
);
