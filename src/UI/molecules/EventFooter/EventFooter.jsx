import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../Avatar';
import {
  EventFooterItem,
  AvatarContainer,
  ButtonContainer,
  Content,
  TextContainer,
  TextItem,
} from './EventFooter.styles';

class EventFooter extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    actions: PropTypes.any,
    user: PropTypes.object,
  };
  static defaultProps = {
    children: null,
    actions: null,
    user: null,
  };
  render() {
    const {
      actions,
      user,
      children,
    } = this.props;
    return (
      <EventFooterItem>
        <Content>
          <AvatarContainer>
            <Avatar
              title={user.title}
              src={user.avatar}
              id={user._id}
              size={140}
              shape="rounded"
            />
          </AvatarContainer>
          <TextContainer>
            <TextItem>{user.title}</TextItem>
            {children}
          </TextContainer>
          <ButtonContainer>
            {actions}
          </ButtonContainer>
        </Content>
      </EventFooterItem>
    );
  }
}
export default EventFooter;
