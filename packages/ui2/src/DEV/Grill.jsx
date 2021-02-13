import React from 'react';

export const Grill = ({ children, cols = 6 }) => {
  let items;
  if (Array.isArray(children)) {
    items = children.map((item) => <div>{item}</div>);
  } else {
    items = [children];
  }
  // console.log({ children, items });
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: Array(cols)
          .fill()
          .map(() => '1fr')
          .join(' '),
        gridGap: 8,
        alignItems: 'center',
      }}
    >
      {items}
    </div>
  );
};

export default Grill;
