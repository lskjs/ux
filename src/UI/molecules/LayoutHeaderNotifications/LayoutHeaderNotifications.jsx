import React, { Component } from 'react';
import { Popover } from 'antd';
import overlayStyle from './LayoutHeaderNotifications.styles';

class LayoutHeaderNotifications extends Component {
  render() {
    const { children, content } = this.props;
    return (
      <Popover
        overlayClassName={overlayStyle}
        placement="bottomRight"
        content={content}
        trigger="click"
      >
        {children}
      </Popover>
    );
  }
}

export default LayoutHeaderNotifications;
