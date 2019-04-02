import React, { PureComponent } from 'react';
import If from 'react-if';
import PropTypes from 'prop-types';
import Avatar from '../../../Avatar';
import Link from '../../../Link';
import UserTitle from '../../atoms/UserTitle';
import UserPosition from '../../atoms/UserPosition';
import UserInfo from '../../atoms/UserInfo';
import UserFooter from '../../atoms/UserFooter';
import AvatarWrapper from '../../atoms/AvatarWrapper';
import Card from '../../atoms/Card';

class UserCard extends PureComponent {
  static propTypes = {
    id: PropTypes.number,
    componentClass: PropTypes.any,
    href: PropTypes.string,
    title: PropTypes.string,
    avatar: PropTypes.string,
    position: PropTypes.string,
    info: PropTypes.string,
    footer: PropTypes.any,
  };
  static defaultProps = {
    id: null,
    title: null,
    avatar: null,
    position: null,
    href: null,
    info: null,
    componentClass: 'a',
    footer: null,
  }
  render() {
    const {
      id,
      componentClass,
      href,
      title,
      avatar,
      position,
      footer,
      info,
    } = this.props;
    return (
      <Card componentClass={componentClass} href={href}>
        <Link href={href}>
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
        </Link>
        <If condition={position}>
          <UserPosition>{position}</UserPosition>
        </If>
        <If condition={info}>
          <UserInfo>{info}</UserInfo>
        </If>
        <If condition={footer}>
          <UserFooter>{footer}</UserFooter>
        </If>
      </Card>
    );
  }
}

export default UserCard;
