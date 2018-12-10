import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import BoxHeader from '../../atoms/BoxHeader';
import BoxBody from '../../atoms/BoxBody';
import BoxFooter from '../../atoms/BoxFooter';
import BoxBadge from '../../atoms/BoxBadge';
import BoxDivider from '../../atoms/BoxDivider';

import BoxItem from './Box.styles';

class Box extends PureComponent {
  static Header = BoxHeader;
  static Body = BoxBody;
  static Footer = BoxFooter;
  static Badge = BoxBadge;
  static Divider = BoxDivider;
  static propTypes = {
    children: PropTypes.any,
    padded: PropTypes.bool,
    paint: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    padded: false,
    paint: null,
  }
  render() {
    const {
      children,
      padded,
      paint,
    } = this.props;
    return (
      <BoxItem padded={padded} paint={paint}>
        {children}
      </BoxItem>
    );
  }
}

export default Box;
