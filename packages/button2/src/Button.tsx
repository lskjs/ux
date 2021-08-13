import sizes from '@lskjs/utils/sizes';
import map from 'lodash/map';
import omit from 'lodash/omit';
import PropTypes from 'prop-types';
import React, { ComponentPropsWithoutRef, FC, useContext } from 'react';

import * as Styles from './Button.styles';
import { ButtonContext } from './ButtonContext';
import SafeAnchor from './SafeAnchor';
import { theme } from './theme';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  /** Цвет (один из стандартных цветов: `primary` `secondary` `success` `warning` `danger` `info` `light` `dark` `link`) */
  variant: string;
  /** Активное состояние */
  active?: boolean;
  /** В виде блока (100% ширины) */
  block?: boolean;
  /** Ссылка */
  href?: string;
  /** Размер кнопки (один из стандартных размеров: `small` `medium` `large` и их алиасов `default` `sm` `lg` `md`) */
  size?: string;
  [type: string]: any;
}

const getSize = (size: string): string => {
  const defaultSize = 'medium';
  let pretendSize = defaultSize;
  if (sizes.is(size, 'extraSmall')) pretendSize = 'extraSmall';
  if (sizes.is(size, 'small')) pretendSize = 'small';
  if (sizes.is(size, defaultSize)) pretendSize = defaultSize;
  if (sizes.is(size, 'large')) pretendSize = 'large';
  if (sizes.is(size, 'extraLarge')) pretendSize = 'extraLarge';
  if (Object.keys(theme.sizes).includes(pretendSize)) {
    return pretendSize;
  }
  return defaultSize;
};

export const Button: FC<ButtonProps> = ({
  variant,
  as,
  active,
  block,
  disabled,
  href,
  size = 'medium',
  type,
  children,
  ...props
}) => {
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
    size: getSize(size),
    type,
  };

  if (href) {
    return (
      <SafeAnchor as={Styles.Button} htmlAs="a" href={href} {...btnProps} {...props}>
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
        `Prop \`${propName}\` in component` +
          ` \`${componentName}\` is not on the list of allowed ${JSON.stringify(allowedVariants)}`,
      );
    }
    return null;
  },
  size: (props, propName, componentName): Error | null => {
    const allowedSizes = map(omit(sizes, 'is'), (val, key) => {
      if (Object.keys(theme.sizes).includes(val)) return key;
      return null;
    }).filter((a) => !!a);

    if (!allowedSizes.includes(props[propName])) {
      return new Error(
        `Prop \`${propName}\` in component` +
          ` \`${componentName}\` is not on the list of allowed ${JSON.stringify(allowedSizes)}`,
      );
    }
    return null;
  },
  as: PropTypes.elementType,
  active: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
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
