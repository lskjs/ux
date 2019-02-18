import React from 'react';
import BallClipRotateMultiple from './BallClipRotateMultiple';

export default ({ storiesOf }) => (
  storiesOf('ui/BallClipRotateMultiple', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <BallClipRotateMultiple color="#fff" />
      </div>
    ))
);
