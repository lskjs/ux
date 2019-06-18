import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Block } from './Dropdown.styles';

class DropdownItem extends PureComponent {
  static propTypes = {
    children: PropTypes.any, // eslint-disable-line react/forbid-prop-types
    componentClass: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  }
  static defaultProps = {
    children: null,
    componentClass: 'div',
  }
  render() {
    const { children, componentClass = 'div', ...props } = this.props;
    return (
      <Block
        componentClass={componentClass}
        {...props}
      >
        {children}
      </Block>
    );
  }
}

export default DropdownItem;
