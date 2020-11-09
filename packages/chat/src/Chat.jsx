/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MessagesList from './components/MessagesList';

class Chat extends PureComponent {
  render() {
    const { items, userId, ...props } = this.props;
    return <MessagesList items={items} userId={userId} {...props} />;
  }
}

Chat.propTypes = {
  items: PropTypes.arrayOf(Array),
  userId: PropTypes.string,
};

Chat.defaultProps = {
  items: [],
  userId: '',
};

export default Chat;
