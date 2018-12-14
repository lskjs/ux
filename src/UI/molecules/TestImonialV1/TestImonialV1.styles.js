import styled from 'react-emotion';
import { Avatar } from 'antd';

export const Content = styled('div')`
  position: relative;
  padding: 30px;
  margin: 0 0 30px;
  font-size: 14px;
  line-height: 1.8;
  border-radius: 6px;
  background-color: ${p => (p.theme.ui.colors.white)};
  &:after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: 20px;
    border-right: 30px solid transparent;
    border-top: 30px solid;
    border-top-color: ${p => (p.theme.ui.colors.white)};
    border-bottom-color: transparent !important;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
  }
`;

export const Meta = styled('div')`
  margin: 0 0 0 30px;
`;

export const InfoHolder = styled('div')`
  display: flex;
  align-items: center;
`;

export const AuthorImg = styled('div')`
  margin-right: 15px;
`;

export const AvatarItem = styled(Avatar)`
  max-width: 60px;
  border-radius: 50%;
  width: 30px;
  height: auto;
  border-radius: 50%;
`;

export const AuthorDesc = styled('div')`
  margin-top: 3px;
  font-size: 12px;
  opacity: .7;
`;
