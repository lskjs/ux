import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@lskjs/ui/Avatar';
import {
  UserFooterItem,
  AvatarContainer,
  ButtonContainer,
  Content,
  TextContainer,
  TextItem,
} from './UserBoxFooter.styles';

class UserBoxFooter extends PureComponent {
  static propTypes = {
    subtitle: PropTypes.any,
    actions: PropTypes.any,
    user: PropTypes.object,
    backgroundColor: PropTypes.string,
  };
  static defaultProps = {
    subtitle: null,
    actions: null,
    user: null,
    backgroundColor: null,
  };
  render() {
    const {
      subtitle,
      actions,
      user,
      backgroundColor,
    } = this.props;
    return (
      <UserFooterItem>
        <AvatarContainer>
          <Avatar
            title={user.title}
            src={user.avatar}
            id={user._id}
            size={140}
            backgroundColor={backgroundColor}
          />
        </AvatarContainer>
        <Content>
          <TextContainer>
            <TextItem>{user.title}</TextItem>
            <TextItem>{subtitle}</TextItem>
          </TextContainer>
          <ButtonContainer>
            {actions}
          </ButtonContainer>
        </Content>
      </UserFooterItem>
    );
  }
}
export default UserBoxFooter;
