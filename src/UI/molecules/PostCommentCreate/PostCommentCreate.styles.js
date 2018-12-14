import styled from 'react-emotion';
import Textarea from 'react-textarea-autosize';
import { Avatar as AntAvatar } from 'antd';

export const Wrapper = styled('div')`
  display: flex;
  align-items: flex-start;
  padding: 12px 24px;
`;

export const Avatar = styled(AntAvatar)`
  margin-right: 12px;
  flex-shrink: 0;
  margin-top: 4px;
`;

export const Input = styled(Textarea)`
  background: none;
  border: none;
  outline: none;
  resize: none;
  padding: 0;
  margin: 6px 0 0;
  flex: 1;
`;
