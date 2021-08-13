import PropTypes from 'prop-types';
import React from 'react';

import { Badge, Base, Content, Side } from './FilterButton.styles';

const FilterButton = ({ children, icon, badge, active, view, disabled, ...props }) => (
  <Base active={active} view={view} disabled={disabled} {...props}>
    {Boolean(badge) && <Badge>{badge}</Badge>}
    {Boolean(icon) && <Side>{icon}</Side>}
    <Content>{children}</Content>
  </Base>
);

FilterButton.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  badge: PropTypes.string,
  active: PropTypes.bool,
  view: PropTypes.oneOf(['primary', 'shadow']),
  disabled: PropTypes.bool,
};

FilterButton.defaultProps = {
  children: null,
  icon: null,
  badge: null,
  active: false,
  view: 'primary',
  disabled: false,
};

export default FilterButton;
