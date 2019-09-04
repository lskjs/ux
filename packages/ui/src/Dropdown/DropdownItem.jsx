import React from 'react';
import PropTypes from 'prop-types';
import Performance from '@lskjs/dev/Performance';
import { Block } from './Dropdown.styles';

const DropdownItem = ({ children, active, componentClass = 'div', ...props }) => (
  <Performance name="DropdownItem" disabled={!__DEV__}>
    <Block
      active={active}
      componentClass={componentClass}
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
};

DropdownItem.defaultProps = {
  children: null,
  componentClass: 'div',
  active: false,
};

export default DropdownItem;
