import PropTypes from 'prop-types';
import React from 'react';

import Collapse from './Collapse';
import NavbarContext from './NavbarContext';
import { useBootstrapPrefix } from './ThemeProvider';

const propTypes = {
  /** @default 'navbar-collapse' */
  bsPrefix: PropTypes.string,
};

const NavbarCollapse = React.forwardRef(({ children, bsPrefix, ...props }, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, 'navbar-collapse');
  return (
    <NavbarContext.Consumer>
      {(context) => (
        <Collapse in={!!(context && context.expanded)} {...props}>
          <div ref={ref} className={bsPrefix}>
            {children}
          </div>
        </Collapse>
      )}
    </NavbarContext.Consumer>
  );
});

NavbarCollapse.displayName = 'NavbarCollapse';
NavbarCollapse.propTypes = propTypes;

export default NavbarCollapse;
