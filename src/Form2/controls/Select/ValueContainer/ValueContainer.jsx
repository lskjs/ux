import React, { PureComponent } from 'react';
import { ValueContainer as DefaultValueContainer } from 'react-select/lib/components/containers';

function ValueContainer({ children, selectProps, ...props }) {
  const chl = [children[0][0] || children[0], children[1]];
  return (
    <DefaultValueContainer {...props}>{chl}</DefaultValueContainer>
  );
}

export default ValueContainer;
