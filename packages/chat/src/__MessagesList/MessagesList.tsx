/* eslint-disable no-underscore-dangle */
import React from 'react';
import random from 'lodash/random';
// import MainContainer from '../../../layouts/MainContainer';
import Message from '../Message';
// import MessagesDate from '../MessagesDate';
// import SystemMessage from '../SystemMessage';
// import TypingIndicator from '../TypingIndicator';
// import MessageInput from '../MessageInput';
// import GroupMessage from '../GroupMessage';
// import MessageMedia from '../MessageMedia';
const rndNum = random(99);

const avatarImg = `https://randomuser.me/api/portraits/men/${rndNum}.jpg`;

const MessageGroup = ({ children }) => <div>{children}</div>;

const groupItems = (items, { userId } = {}) => {
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

export default ({ items: initItems = [], userId } = {}) => {
  const groups = groupItems(initItems, { userId });
  return (
    <div>
      {groups.map(({ items, ...group }) => (
        <MessageGroup {...group}>
          {items.map((item) => (
            <Message
              // time="21:45"
              {...item.content}
              time={item.createdAt}
              // text={item.content && item.content.text}
              //
              authorName={item.user && item.user.name}
              avatar={item.user && item.user.avatar}
              showTitle={item.user && item.user._id !== userId}
              showAvatar={item.user && item.user._id !== userId}
              isRightDir={item.user && item.user._id === userId}
            />
          ))}
        </MessageGroup>
      ))}

      {/* {JSON.stringify(items)} */}
      {/* <TypingIndicator /> */}
      {/* <SystemMessage /> */}
      {/* <MessagesDate /> */}

      {/* <SystemMessage /> */}
      {/* <GroupMessage
          avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
          onlyFirstWithMeta
        > */}
      <hr />
      <Message authorName="Andy Warhole" time="21:40" text="Nice chat." isRightDir avatar={avatarImg} />
      <Message
        authorName="Dim Dymich"
        time="21:45"
        text="How are you, guys? I've never been such happy like today!"
        showTitle
        showAvatar
        avatar={avatarImg}
      />
      <Message authorName="Andy Warhole" time="21:40" text="Feeling great!" isRightDir avatar={avatarImg} />
      <Message
        authorName="Phil Winters"
        time="21:42"
        text="Dear mobility officers in this letter I explain my intention and passion to be chosen for the student mobility program. I have chosen this certain university because the mix of subjects presented within the program really suits me hereby the interaction between financial accounting, business planning and financial markets course enables me to achieve the perception of business nature and its place in the world economy. Also this coherence partially provides me the ability to be employed in one of the top-notch investment funds what is one of my objectives in life. I can state that I match requirements related to being a student of the 3rd best business school in the Czech Republic (FBE) due to the fact of my diligence and zeal as well as confident level of English (B2). Moreover I have skills of analysis and visualizing data in Excel what is necessary to be a competent financier. Besides during my study I learned how to work provided short deadlines and quickly analyze the data. I am looking forward to be a participant of program in purpose to ameliorate my proficiency in finance and become closer to my target – create an investment fund until my 35. I chose this goal pursuant my preferences in life and the possibility to improve level of people’s life – make them richer. To gain the ability to be chosen I was preparing to the commission for 2 weeks and will do my best during the program."
        showTitle
        showAvatar
        avatar={avatarImg}
      />
      <Message
        authorName="Dim Dymich"
        time="21:45"
        text="Let's go drunk 2morrrow! Catalina sucks!!!"
        showTitle
        showAvatar
        avatar={avatarImg}
      />
      {/* </GroupMessage> */}
      {/* <MessageInput /> */}
    </div>
  );
};
