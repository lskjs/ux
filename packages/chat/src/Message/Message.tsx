import React, { InferProps } from 'react';
import Image from '@lskjs/image';
import * as Styled from './Message.styles';
import { MessageProps } from './Message.d';

// TODO: Moment

const Message: React.FC<MessageProps> = ({
  image,
  authorName,
  time,
  text,
  isRightDir = false,
  showTitle,
  showAvatar,
  avatar
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
