import React from 'react';
import PropTypes from 'prop-types';
import Performance from '@lskjs/dev/Performance';
import { Block } from './Dropdown.styles';

const DropdownItem = ({ children, active, componentClass = 'div', gap, ...props }) => (
  <Performance name="DropdownItem" disabled={!__DEV__}>
    <Block
      active={active}
      componentClass={componentClass}
      gap={gap}
      {...props}
    >
      {children}
    </Block>
  </Performance>
);

DropdownItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  componentClass: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  gap: PropTypes.string,
};

DropdownItem.defaultProps = {
  children: null,
  componentClass: 'div',
  active: false,
  gap: null,
};

export default DropdownItem;
