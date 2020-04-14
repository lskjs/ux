import React from 'react';
import PropTypes from 'prop-types';
import Link from '@lskjs/link';
import { Right, Item } from './NotifyItem.styles';

const NotifyItem = ({ href, unread, children, type }) => (
  <Item componentClass={href ? Link : 'div'} href={href} unread={unread} type={type}>
    <Right>{children}</Right>
  </Item>
);

NotifyItem.propTypes = {
  unread: PropTypes.bool,
  children: PropTypes.any.isRequired,
  href: PropTypes.string,
  type: PropTypes.string.isRequired,
};
NotifyItem.defaultProps = {
  unread: false,
  href: null,
};
export default NotifyItem;
