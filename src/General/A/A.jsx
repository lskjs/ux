import React, { Component, PropTypes } from 'react';
import importcss from 'importcss';
import cx from 'classnames';
import _ from 'lodash';
import Link from '../Link';

@importcss(require('./A.css'))
export default class A extends Component {
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
    const { bsStyle, className, href, to } = this.props;
    return (
      <Link
        {..._.omit(this.props, ['bsStyle'])}
        styleName={cx({
          [className]: className,
          A: true,
          [`A_style_${bsStyle}`]: bsStyle,
        })}
        href={href || to}
      />
    );
  }
}
