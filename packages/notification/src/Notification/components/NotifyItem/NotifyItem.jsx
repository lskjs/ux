import React from 'react';
import PropTypes from 'prop-types';
import Link from '@lskjs/link';
import { Right, Item } from './NotifyItem.styles';

const NotifyItem = ({ href, unread, children, type, clickable }) => (
  <Item componentClass={href ? Link : 'div'} href={href} unread={unread} type={type} clickable={clickable}>
    <Right>{children}</Right>
  </Item>
);

NotifyItem.propTypes = {
  unread: PropTypes.bool,
  children: PropTypes.any.isRequired,
  href: PropTypes.string,
  type: PropTypes.string.isRequired,
  clickable: PropTypes.bool,
};
NotifyItem.defaultProps = {
  unread: false,
  href: null,
  clickable: true,
};
export default NotifyItem;
