/** @jsx jsx */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { css, jsx } from '@emotion/core';

@inject('overflow')
@observer
class TableCol extends Component {
  render() {
    const {
      componentClass = 'div',
      index,
      style,
      align,
      overflow = 'hidden',
      children,
      className,
      ...props
    } = this.props;

    const otherStyle = {};
    otherStyle.overflow = overflow;
    if (index !== null) otherStyle.gridColumn = index + 1;
    // otherStyle.flex = 1;
    otherStyle.display = 'flex';
    if (align) {
      otherStyle.justifyContent = (
        align === 'right' ? 'flex-end' : // eslint-disable-line
          align === 'center' ? 'center'
            : 'flex-start'
      );
    }
    if (props.stopPropagation && !props.onClick) {
      props.onClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
      };
    }

    return jsx(
      componentClass,
      {
        // className,
        css: [
          css(className),
          css(otherStyle),
          css(style),
        ],
        style,
        ...props,
      },
      children,
    );

    // return React.createElement(
    //   componentClass,
    //   filterProps({
    //     ...props,
    //     className: cx([
    //       props.className,
    //       css({
    //         overflow,
    //         ...otherStyle,
    //         ...style,
    //       }),
    //     ]),
    //   }, componentClass),
    //   children,
    // );
  }
}

export default TableCol;
