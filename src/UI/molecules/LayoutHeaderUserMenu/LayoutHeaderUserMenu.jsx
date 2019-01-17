import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'antd/lib/dropdown';
import If from 'react-if';
import Avatar from '../../../Avatar';
import LayoutHeaderListItem from '../../atoms/LayoutHeaderListItem';
// import { DropdownLink /* , AvatarText */ } from './LayoutHeaderUserMenu.styles';
import { DropdownLink, AvatarText } from './LayoutHeaderUserMenu.styles';

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
          <Avatar
            size={32}
            id={user.id || user._id}
            src={user.avatar}
            title={user.title || user.name}
          />
          <If condition={user.title || user.name}>
            <AvatarText className="d-none d-md-inline">{user.title || user.name}</AvatarText>
          </If>
        </DropdownLink>
      </LayoutHeaderListItem>
    );
  }
}

export default LayoutHeaderUserMenu;
