import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import PropTypes from 'prop-types';
import * as Styled from './Message.styles';

const Message = ({ authorName, time, text, isRightDir = false, showTitle, showAvatar, avatar }) => (
  // <Styled.Message isRightDir={isRightDir}>
  <Styled.Wrapper isRightDir={isRightDir}>
    {showAvatar && (
      <Styled.AvatarWrapper showTitle={showTitle}>
        <Styled.Avatar src={avatar} alt={authorName} />
      </Styled.AvatarWrapper>
    )}
    <Styled.Message>
      {showTitle && <Styled.Title>{authorName}</Styled.Title>}
      <Styled.ContentWrapper>
        <Styled.Text>{text}</Styled.Text>
        <Styled.Time>
          <Moment format="HH:mm">{time}</Moment>
        </Styled.Time>
      </Styled.ContentWrapper>
    </Styled.Message>
  </Styled.Wrapper>

  // </Styled.Message>
);

Message.propTypes = {
  authorName: PropTypes.string,
  // TODO: надо подумать
  time: PropTypes.string,
  text: PropTypes.string,
  isRightDir: PropTypes.bool,
  showTitle: PropTypes.bool,
  showAvatar: PropTypes.bool,
  avatar: PropTypes.string,
};
Message.defaultProps = {
  authorName: '',
  time: null,
  text: '',
  isRightDir: false,
  showTitle: false,
  showAvatar: true,
  avatar: '',
};
export default Message;
