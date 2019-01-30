import React from 'react';
import Tags from '../UI/molecules/Tags';

export default ({ options = [], values = [], ...props }) => (
  <Tags
    items={options.filter(option => values.includes(option.value))}
    {...props}
  />
);
