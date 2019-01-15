import React, { Component } from 'react';
import filterProps from '../utils/filterProps';

class TableCol extends Component {
  render() {
    const {
      componentClass = 'div',
      index,
      style,
      align,
      children,
      ...props
    } = this.props;

    const otherStyle = {};
    if (index !== null) otherStyle.gridColumn = index + 1;
    if (align) {
      otherStyle.flex = 1;
      otherStyle.justifyContent = (
        align === 'right' ? 'flex-end' : // eslint-disable-line
          align === 'center' ? 'center'
            : 'flex-start'
      );
    }

    return React.createElement(
      componentClass,
      filterProps({
        ...props,
        style: {
          overflow: 'hidden',
          ...otherStyle,
          ...style,
        },
      }, componentClass),
      children,
    );
  }
}

export default TableCol;
