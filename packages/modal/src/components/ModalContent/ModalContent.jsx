/* eslint import/no-extraneous-dependencies: 0 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Content from './ModalContent.styles';

class ModalContent extends PureComponent {
  static propTypes = {
    children: PropTypes.any.isRequired,
    align: PropTypes.oneOf(['left', 'center', 'right', 'auto']),
    size: PropTypes.oneOf(['default', 'large']),
  }
  static defaultProps = {
    align: 'auto',
    size: 'default',
  }
  render() {
    const {
      children, align, size, className, ...props
    } = this.props;
    return (
      <Content
        align={align}
        size={size}
        className={cx({
          'id-modal-content': true,
          [className]: className,
        })}
        {...props}
      >
        {children}
      </Content>
    );
  }
}

export default ModalContent;
