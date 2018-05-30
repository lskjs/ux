import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tag from './A.styles';

class A extends PureComponent {
  static defaultProps = {
    bsStyle: 'primary',
    className: null,
    href: null,
    to: null,
  }
  static propTypes = {
    bsStyle: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
    to: PropTypes.string,
  }
  render() {
    const {
      bsStyle,
      className,
      href,
      to,
      ...props
    } = this.props;
    return (
      <Tag
        className={className}
        bsStyle={bsStyle}
        href={href || to}
        {...props}
      />
    );
  }
}

export default A;
