import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import sizes from '@lskjs/utils/sizes';

import SafeAnchor from './SafeAnchor';
import { ButtonContext } from './ButtonContext';
import * as Styles from './Button.styles';

const Button = ({ variant, as, active, block, disabled, href, size, type, children, ...props }) => {
  const ctx = useContext(ButtonContext);
  if (!ctx._contextProvided) {
    console.error('[ux/Button] Context is not provided!');
    return null;
  }
  const btnProps = {
    variant,
    active,
    block,
    disabled,
    size,
    type,
  };

  if (href) {
    return (
      <SafeAnchor
        as={Styles.Button}
        htmlAs="a"
        href={href}
        {...btnProps}
        {...props}
      >
        {children}
      </SafeAnchor>
    );
  }

  return (
    <Styles.Button {...btnProps} {...props}>
      {children}
    </Styles.Button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link']),
  as: PropTypes.elementType,
  active: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(['extraSmall', 'small', 'default', 'medium', 'large', 'extraLarge', 'xs', 'sm', 'md', 'lg', 'xl']),
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
  children: PropTypes.node,
};

Button.defaultProps = {
  variant: 'primary',
  as: undefined,
  active: false,
  block: false,
  disabled: false,
  href: undefined,
  size: 'default',
  type: 'button',
  children: undefined,
};

export default Button;
