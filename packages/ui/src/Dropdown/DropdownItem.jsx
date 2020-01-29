import React from 'react';
import If from 'react-if';
import PropTypes from 'prop-types';
import Performance from '@lskjs/dev/Performance';
import { Block, IconWrapper } from './Dropdown.styles';

const DropdownItem = ({ children, active, componentClass = 'div', gap, icon, ...props }) => (
  <Performance name="DropdownItem" disabled={!__DEV__}>
    <Block
      active={active}
      componentClass={componentClass}
      gap={gap}
      {...props}
    >
      <If condition={!!icon}>
        <IconWrapper>
          {icon}
        </IconWrapper>
      </If>
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
  icon: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

DropdownItem.defaultProps = {
  children: null,
  componentClass: 'div',
  active: false,
  gap: null,
  icon: null,
};

export default DropdownItem;
