import React from 'react';

import ArrowDown from './icons/Down';
import Sort from './icons/Sort';
import ArrowUp from './icons/Up';

const SortDirection = ({ value, size = 14 }) =>
  value === 1 ? ( // eslint-disable-line no-nested-ternary
    <ArrowUp size={size} />
  ) : value === -1 ? (
    <ArrowDown size={size} />
  ) : (
    <Sort size={size} />
  );

const ListSortHeader = ({ children, value, size, align = 'left', ...props }) => (
  <div style={{ cursor: 'pointer' }} {...props}>
    {align === 'right' && <SortDirection value={value} size={size} />}
    {children}
    {align !== 'right' && <SortDirection value={value} size={size} />}
  </div>
);

export default ListSortHeader;
