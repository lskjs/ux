import React from 'react';
import LineScale from './LineScale';

export default ({ storiesOf }) => (
  storiesOf('ui/LineScale', module)
    .add('Default', () => (
      <div style={{ padding: 60, backgroundColor: '#1890ff' }}>
        <LineScale color="#fff" />
      </div>
    ))
);
