import React, { useContext, ElementType, ComponentPropsWithoutRef, FC } from 'react';
import PropTypes from 'prop-types';
// import sizes from '@lskjs/utils/sizes';

import SafeAnchor from './SafeAnchor';
import { ButtonContext } from './ButtonContext';
import { theme } from './theme';
import * as Styles from './Button.styles';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  /** Цвет (один из стандартных цветов: `primary` `secondary` `success` `warning` `danger` `info` `light` `dark` `link`) */
  variant: string;
  /** Вариация кнопки (Например: `button` `a`) */
  as?: ElementType;
  /** Активное состояние */
  active?: boolean;
  /** В виде блока (100% ширины) */
  block?: boolean;
  /** Ссылка */
  href?: string;
  /** Размер кнопки */
  size?: 'small' | 'default' | 'medium' | 'large' | 'sm' | 'md' | 'lg';
}

export const Button: FC<ButtonProps> = ({ variant, as, active, block, disabled, href, size, type, children, ...props }) => {
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
    <Styles.Button as={as} {...btnProps} {...props}>
      {children}
    </Styles.Button>
  );
};

Button.propTypes = {
  variant: (props, propName, componentName): Error | null => {
    const allowedVariants = Object.keys(theme.variants);
    if (!allowedVariants.includes(props[propName])) {
      return new Error(
        'Prop `' + propName + '` in component' +
        ' `' + componentName + '` is not on the list of allowed ' + JSON.stringify(allowedVariants),
      );
    }
    return null;
  },
  active: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'medium', 'large', 'sm', 'md', 'lg']),
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
