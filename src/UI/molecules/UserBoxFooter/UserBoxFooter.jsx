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
  static propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    image: PropTypes.string,
  };
  static defaultProps = {
    name: null,
    position: null,
    image: null,
  };
  render() {
    const {
      image,
      name,
      position,
    } = this.props;
    return (
      <UserFooterItem>
        <AvatarContainer><Avatar src={image} id="123" size={140} /></AvatarContainer>
        <Content>
          <TextContainer>
            <TextItem>{name}</TextItem>
            <TextItem>{position}</TextItem>
          </TextContainer>
          <ButtonContainer><Button>Edit</Button></ButtonContainer>
        </Content>
      </UserFooterItem>
    );
  }
}
export default UserBoxFooter;
