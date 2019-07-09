import React, { PureComponent } from 'react';
import If from 'react-if';
import PropTypes from 'prop-types';
import { Wrapper, Title, Subtitle, Avatar, Category, Icon } from './PostUser.styles';

class PostUser extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    subtitle: PropTypes.string,
    category: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }
  static defaultProps = {
    subtitle: null,
    category: {},
  }
  render() {
    const { user, subtitle, category } = this.props;
    const { title = null, color = null, ...categoryOther } = category;
    return (
      <Wrapper>
        <Avatar
          icon="user"
          src={user.avatar}
          alt={user.title}
        />
        <Title>{user.title}</Title>
        <If condition={!!subtitle}>
          <Subtitle>{subtitle}</Subtitle>
        </If>
        <If condition={!!title}>
          <Icon color={color} type="caret-right" />
          <Category color={color} {...categoryOther}>{title}</Category>
        </If>
      </Wrapper>
    );
  }
}

export default PostUser;
