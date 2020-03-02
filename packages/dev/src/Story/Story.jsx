import React from 'react';

export default ({ children, style }) => (
  <div
    style={{
      border: '30px #eee solid',
      ...style,
    }}
  >
    {children}
  </div>
);
