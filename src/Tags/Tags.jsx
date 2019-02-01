import React from 'react';
import Tags from '../UI/molecules/Tags';

export default ({
  options = [], nullValue, values = [], ...props
}) => (
  values.length === 0 && nullValue ? nullValue : (
    <Tags
      items={options.filter(option => values.includes(option.value))}
      {...props}
    />
  )
);
