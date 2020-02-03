/** @jsx jsx */
import React, { PureComponent } from 'react';
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import BoxHeader from './BoxHeader';
import BoxBody from './BoxBody';
import BoxFooter from './BoxFooter';
import BoxBadge from './BoxBadge';
import BoxDivider from './BoxDivider';

import BoxItem from './Box.styles';

class Box extends PureComponent {
  static Header = BoxHeader;
  static Body = BoxBody;
  static Footer = BoxFooter;
  static Badge = BoxBadge;
  static Divider = BoxDivider;
  static propTypes = {
    children: PropTypes.any,
    componentClass: PropTypes.any,
    padded: PropTypes.bool,
    paint: PropTypes.string,
    image: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    componentClass: 'div',
    padded: false,
    paint: null,
    image: null,
  }
  render() {
    const {
      children,
      padded,
      paint,
      componentClass,
      image,
      ...props
    } = this.props;
    const tag = componentClass || 'div';
    return (
      <BoxItem padded={padded} paint={paint} image={image} componentClass={tag} {...props}>
        {children}
      </BoxItem>
    );
  }
}

export default Box;
