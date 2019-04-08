import React from 'react';
import { ValueContainer as DefaultValueContainer } from 'react-select/lib/components/containers';

const CollapsedValueContainer = ({ children, selectProps, ...props }) => {
  const chl = [
    (children && children.length && children[0] && children[0][0])
    || (children && children.length && children[0]), children && children.length && children[1]];
  return (
    <DefaultValueContainer {...props}>{chl}</DefaultValueContainer>
  );
};

export default CollapsedValueContainer;
