import React from 'react';
import PropTypes from 'prop-types';
import sizes from '@lskjs/utils/sizes';

/**
 * Палитра вариантов

const paletteVariants = {
  primary: (props) => css`
    background-color: ${props.theme.colors.primary};
    color: ${props.theme.colors.white};
  `,
  secondary: (props) => css`
    background-color: ${props.theme.colors.secondary};
    color: ${props.theme.colors.white};
  `,
  success: (props) => css`
    background-color: ${props.theme.colors.success};
    color: ${props.theme.colors.white};
  `,
  danger: (props) => css`
    background-color: ${props.theme.colors.danger};
    color: ${props.theme.colors.white};
  `,
  info: (props) => css`
    background-color: ${props.theme.colors.info};
    color: ${props.theme.colors.white};
  `,
  light: (props) => css`
    background-color: ${props.theme.colors.light};
    color: ${props.theme.colors.default};
  `,
  dark: (props) => css`
    background-color: ${props.theme.colors.dark};
    color: ${props.theme.colors.white};
  `,
  link: (props) => css`
    color: ${props.theme.colors.primary};
  `,
};

 */


const Button = ({ variant, as, active, block, disabled, href, size, type, children, ...props }) => {
  return (
    <button>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link']),
  as: PropTypes.elementType,
  active: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
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
  size: sizes.default,
  type: 'button',
  children: undefined,
};

export default Button;
