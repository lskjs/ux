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
    event: PropTypes.object,
  };
  static defaultProps = {
    children: null,
    actions: null,
    event: null,
  };
  render() {
    const {
      actions,
      event,
      children,
    } = this.props;
    return (
      <EventFooterItem>
        <Content>
          <AvatarContainer>
            <Avatar
              title={event.title}
              src={event.image}
              id={event._id}
              size={140}
              shape="rounded"
            />
          </AvatarContainer>
          <TextContainer>
            <TextItem>{event.title}</TextItem>
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
