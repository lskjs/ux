import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from '@lskjs/link';
import { Right, Item } from './NotifyItem.styles';


class NotifyItem extends PureComponent {
  static proPropTypesypes = {
    unread: PropTypes.bool,
    children: PropTypes.any.isRequired,
    href: PropTypes.string,
    type: PropTypes.string.isRequired,
  }
  static defaultProps = {
    unread: false,
  }
  render() {
    const {
      href, unread, children, type,
    } = this.props;
    const Tag = href ? Link : 'div';
    return (
      <Item
        componentClass={Tag}
        href={href}
        unread={unread}
        type={type}
      >
        <Right>
          {children}
        </Right>
      </Item>
    );
  }
}

export default NotifyItem;
