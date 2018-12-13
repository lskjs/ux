import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Dropdown } from 'antd';
import LayoutHeaderListItem from '../../atoms/LayoutHeaderListItem';
import { DropdownLink /* , AvatarText */ } from './LayoutHeaderUserMenu.styles';

class LayoutHeaderUserMenu extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired,
  }
  render() {
    const { user, children } = this.props;
    return (
      <LayoutHeaderListItem
        componentClass={Dropdown}
        overlay={children}
        trigger={['click']}
        placement="bottomRight"
      >
        <DropdownLink href="#!">
          <Avatar src={user.avatar} size="small" />
          {/* <AvatarText className="d-none d-md-inline">{user.title}</AvatarText> */}
        </DropdownLink>
      </LayoutHeaderListItem>
    );
  }
}

export default LayoutHeaderUserMenu;
