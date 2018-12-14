import styled from 'react-emotion';
import { Avatar } from 'antd';

export const Box = styled('div')`
  position: relative;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 6px;
  background-color: ${p => (p.theme.ui.colors.white)};
`;

export const BoxBody = styled('div')`
  padding: 20px;
  border-radius: 0 0 6px 6px;
  &:after {
    display: block;
    clear: both;
    content: "";
  }
`;

export const Wrapper = styled('div')`
  text-align: center;
`;

export const AvatarItem = styled(Avatar)`
  max-width: 100px;
  margin-bottom: 16px;
  border-radius: 50%;
  max-width: 80px;
`;

export const Citation = styled('blockquote')`
  &:before {
    content: none;
  }
  &:after {
    content: none;
  }
  margin: 0 0 3px;
  font-size: 20px;
  opacity: .9;
  border-left: 0;
`;

export const Author = styled('p')`
  font-size: 16px;
  opacity: .54;
  margin-bottom: 0;
`;
