import React from 'react';


export default ({
  children,
  color = '#fcfcfc77',
  border = 2,
  colors = ['#fcfcfc77', '#eeeeee77'],
  padding,
  background,
}) => (
  <div
    style={{
      background: `repeating-linear-gradient(45deg,${colors[0]},${colors[0]} 10px,${colors[1]} 0,${colors[1]} 20px)`,
      outline: border && color ? `${color} dashed ${border}px` : null,
      padding,
    }}
  >
    <div
      style={{
        background,
      }}
    >
      {children}
    </div>
  </div>
);
