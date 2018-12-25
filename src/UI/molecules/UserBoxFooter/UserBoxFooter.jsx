import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../Button';
import Avatar from '../../../Avatar';
import {
  UserFooterItem,
  AvatarContainer,
  ButtonContainer,
  Content,
  TextContainer,
  TextItem,
} from './UserBoxFooter.styles';

class UserBoxFooter extends PureComponent {
  render() {
    return (
      <UserFooterItem>
        <AvatarContainer><Avatar src="https://picsum.photos/200" id="123" size={140} /></AvatarContainer>
        <Content>
          <TextContainer>
            <TextItem>123</TextItem>
            <TextItem>123</TextItem>
          </TextContainer>
          <ButtonContainer><Button>Edit</Button></ButtonContainer>
        </Content>
      </UserFooterItem>
    );
  }
}
export default UserBoxFooter;
