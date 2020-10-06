import React from 'react';
import PropTypes from 'prop-types';
import { components } from 'react-select';

const CollapsedValueContainer = ({ children, ...props }) => {
  const chl = [
    (children && children.length && children[0] && children[0].length && children[0][0]) ||
      (children && children.length && children[0]),
    children && children.length && children[1],
  ];
  return <components.ValueContainer {...props}>{chl}</components.ValueContainer>;
};

CollapsedValueContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};
CollapsedValueContainer.defaultProps = {
  children: null,
};

export default CollapsedValueContainer;
