import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import importcss from 'importcss';
import cx from 'classnames';
import omit from 'lodash/omit';
import Link from '../Link';
import styles from './A.css';

@importcss(styles)
export default class A extends PureComponent {
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
        {...omit(this.props, ['bsStyle'])}
        className={styleName(
          styles,
          cx({
            A: true,
            [`A_style_${bsStyle}`]: bsStyle,
          }),
          className,
        )}
        href={href || to}
      />
    );
  }
}
