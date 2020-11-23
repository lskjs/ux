import React from 'react';
import Image from '@lskjs/image';
import { IMessageProps } from './types';
import * as Styled from './Message.styles';

// TODO: JSDoc like this
// https://github.com/logux/server/blob/master/server/index.d.ts


// TODO: Moment

const Message: React.FC<IMessageProps> = ({
  image,
  authorName,
  time,
  text,
  isRightDir = false,
  showTitle,
  showAvatar,
  avatar,
}) => (
  <Styled.Wrapper isRightDir={isRightDir}>
    {showAvatar && (
      <Styled.AvatarWrapper showTitle={showTitle}>
        <Styled.Avatar src={avatar} alt={authorName} />
      </Styled.AvatarWrapper>
    )}
    <Styled.Message>
      {showTitle && <Styled.Title>{authorName}</Styled.Title>}
      <Styled.ContentWrapper>
        <Styled.Text>
          {image && <Image widht={200} src={image} />}
          {text}
        </Styled.Text>
        <Styled.Time>
          {time}
          {/* <Moment format="HH:mm">{time}</Moment> */}
        </Styled.Time>
      </Styled.ContentWrapper>
    </Styled.Message>
  </Styled.Wrapper>
);

Message.defaultProps = {
  authorName: '',
  time: undefined,
  text: '',
  isRightDir: false,
  showTitle: false,
  showAvatar: true,
  avatar: '',
};

export default Message;
