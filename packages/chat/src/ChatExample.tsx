/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';

import Message from './Message';

const MessageGroup: React.FC = ({ children }) => <div>{children}</div>;

export type ChatItemType = {
  createdAt: Date;
  content: {
    text?: string;
    image?: string;
  };
  user: {
    _id: string | number;
    name?: string;
    avatar?: string;
  };
};

const getTimeString = (date: Date): string => date.toISOString().substr(11, 5);

const groupItems = (items: ChatItemType[], { userId }: { userId?: string | number } = {}) => {
  const groups = items.map((item) => ({ user: item.user, items: [item] }));
  return groups.map((group) => {
    const showTitle = group.user && group.user._id !== userId;
    const showAvatar = group.user && group.user._id !== userId;
    const isRightDir = group.user && group.user._id === userId;
    return {
      ...group,
      showTitle,
      showAvatar,
      isRightDir,
    };
  });
};

export interface ChatExampleProps {
  items: Array<ChatItemType>;
  userId?: string | number;
}

class ChatExample extends Component<ChatExampleProps> {
  state = {
    messages: [],
  };

  constructor(props: ChatExampleProps) {
    super(props);
    const { items } = props;
    items.forEach((item) => {
      const timeout = Number(item.createdAt) - Date.now();
      setTimeout(() => {
        const { messages } = this.state;
        this.setState({
          messages: [...messages, item],
        });
      }, timeout);
    });
  }

  render() {
    const { userId } = this.props;
    const { messages } = this.state;
    const groups = groupItems(messages, { userId });

    return (
      <div>
        {groups.map(({ items, ...group }) => (
          <MessageGroup {...group}>
            {items.map((item) => (
              <Message
                // {...item.content}
                time={getTimeString(item.createdAt)}
                text={item.content.text}
                image={item.content.image}
                authorName={item.user.name}
                avatar={item.user.avatar}
                showTitle={item.user._id !== userId}
                showAvatar={item.user._id !== userId}
                isRightDir={item.user._id === userId}
              />
            ))}
          </MessageGroup>
        ))}
      </div>
    );
  }
}
//
// ChatExample.defaultProps = {
//   items: [],
//   userId: '',
// };

export default ChatExample;
