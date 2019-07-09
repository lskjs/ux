import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Block from './Fab.styles';

class Fab extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
    componentClass: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    styleName: PropTypes.string,
    size: PropTypes.oneOf(['large', 'small']),
    view: PropTypes.oneOf([
      'solid',
      'text',
      'base',
      'shadow',
      'youtube',
      'empty',
      'transparent',
      'transparentDark',
    ]),
    position: PropTypes.oneOf([
      'top left',
      'top right',
      'right top',
      'left top',
      'bottom left',
      'bottom right',
      'right bottom',
      'left bottom',
    ]),
    paint: PropTypes.oneOf([
      'default',
      'primary',
      'danger',
      'info',
      'warning',
      'success',
      'black',
    ]),
  }
  static defaultProps = {
    componentClass: 'button',
    styleName: null,
    position: null,
    size: 'large',
    paint: 'default',
    view: 'solid',
  }
  render() {
    const {
      size,
      position,
      children,
      componentClass,
      paint,
      view,
      ...props
    } = this.props;
    const Tag = componentClass || 'button';
    const [first, second] = position ? position.split(' ') : [null, null];
    const body = typeof children === 'string' ? children.slice(0, 1) : children;
    let otherProps = { type: 'button', [first]: first, [second]: second, ...props };
    if (Tag !== 'button') otherProps = { ...props };
    return (
      <Block
        componentClass={componentClass}
        paint={paint}
        fixed={!!position}
        size={size}
        view={view}
        {...otherProps}
      >
        {body}
      </Block>
    );
  }
}

export default Fab;
