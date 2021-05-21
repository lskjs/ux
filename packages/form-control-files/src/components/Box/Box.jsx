import PropTypes, { objectOf } from 'prop-types';
import React, { PureComponent } from 'react';

import BoxItem from './Box.styles';
import BoxBadge from './BoxBadge';
import BoxBody from './BoxBody';
import BoxDivider from './BoxDivider';
import BoxFooter from './BoxFooter';
import BoxHeader from './BoxHeader';

export class Box extends PureComponent {
  static Header = BoxHeader;
  static Body = BoxBody;
  static Footer = BoxFooter;
  static Badge = BoxBadge;
  static Divider = BoxDivider;
  static propTypes = {
    children: objectOf(PropTypes.any),
    componentClass: objectOf(PropTypes.any),
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
  };
  render() {
    const { children, padded, paint, componentClass, image, ...props } = this.props;
    const tag = componentClass || 'div';
    return (
      <BoxItem padded={padded} paint={paint} image={image} componentClass={tag} {...props}>
        {children}
      </BoxItem>
    );
  }
}

export default Box;
