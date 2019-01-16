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
    src: PropTypes.string,
    position: PropTypes.string,
    content: PropTypes.string,
    footer: PropTypes.string,
  };
  static defaultProps = {
    id: null,
    title: null,
    src: '//cdn.mgbeta.ru/lsk/no-avatar.png',
    position: null,
    content: null,
    footer: null,
  }
  render() {
    const {
      id,
      title,
      src,
      position,
      content,
      footer,
    } = this.props;
    return (
      <Card>
        <Wrapper>
          <Avatar
            id={id}
            title={title}
            src={src}
            size={100}
            innerStyle={{ border: '6px solid #d68345' }}
          />
        </Wrapper>
        <Title>{title}</Title>
        <Position>{position}</Position>
        <Content>{content}</Content>
        <Footer>{footer}</Footer>
      </Card>
    );
  }
}

export default UserCard;
