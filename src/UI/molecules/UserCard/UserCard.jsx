import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../../Avatar';
import UserTitle from '../../atoms/UserTitle';
import UserPosition from '../../atoms/UserPosition';
import AvatarWrapper from '../../atoms/AvatarWrapper';
import Card from '../../atoms/Card';
import Button from '../../../Button';

class UserCard extends PureComponent {
  static propTypes = {
    id: PropTypes.number,
    componentClass: PropTypes.any,
    href: PropTypes.string,
    title: PropTypes.string,
    avatar: PropTypes.string,
    position: PropTypes.string,
    buttonTitle: PropTypes.string,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    id: null,
    title: null,
    avatar: null,
    position: null,
    href: null,
    componentClass: 'a',
    buttonTitle: null,
    onClick: null,
  }
  render() {
    const {
      id,
      componentClass,
      href,
      title,
      avatar,
      position,
      buttonTitle,
      onClick,
    } = this.props;
    return (
      <Card componentClass={componentClass} href={href}>
        <AvatarWrapper>
          <Avatar
            id={id}
            title={title}
            src={avatar}
            size={80}
            innerStyle={{ border: '6px solid #d68345' }}
          />
        </AvatarWrapper>
        <If condition={title}>
          <UserTitle>{title}</UserTitle>
        </If>
        <If condition={position}>
          <UserPosition>{position}</UserPosition>
        </If>
        <If condition={buttonTitle}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Button
              paint="primary"
              view="solid"
              onClick={onClick}
            >
              {buttonTitle}
            </Button>
          </div>
        </If>
      </Card>
    );
  }
}

export default UserCard;
