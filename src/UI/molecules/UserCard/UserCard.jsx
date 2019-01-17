import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../Avatar';

import {
  Card,
  Title,
  Wrapper,
  Position,
  Content,
  Footer,
} from './UserCard.styles';

class UserCard extends PureComponent {
  static propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    avatar: PropTypes.string,
    position: PropTypes.string,
    content: PropTypes.string,
    footer: PropTypes.string,
  };
  static defaultProps = {
    id: null,
    title: null,
    avatar: null,
    position: null,
    content: null,
    footer: null,
  }
  render() {
    const {
      id,
      title,
      avatar,
      position,
      content,
      footer,
    } = this.props;
    // TODO: Можаев: вынести в атомы
    return (
      <Card>
        <Wrapper>
          <Avatar
            id={id}
            title={title}
            src={avatar}
            size={100}
            innerStyle={{ border: '6px solid #d68345' }}
          />
        </Wrapper>
        <If condition={title}>
          <Title>{title}</Title>
        </If>
        <If condition={position}>
          <Position>{position}</Position>
        </If>
        <Content>{content}</Content>
        <If condition={footer}>
          <Footer>{footer}</Footer>
        </If>
      </Card>
    );
  }
}

export default UserCard;
