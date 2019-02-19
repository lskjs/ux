import React from 'react';
import BallScale from './BallScale';

export default ({ storiesOf }) => (
  storiesOf('ui/BallScale', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <BallScale color="#fff" />
      </div>
    ))
);
