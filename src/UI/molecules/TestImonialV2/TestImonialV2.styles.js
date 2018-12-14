import styled, { css } from 'react-emotion';
import { Avatar } from 'antd';

export const Wrapper = styled('div')`
  position: relative;
  padding: 48px 16px 54px;
  text-align: center;
  border-radius: 6px;
  margin-bottom: 34px;
  ${(p) => {
    switch (p.paint) {
      case 'light':
        return css` 
          background-color: ${p.theme.ui.colors.secondary}; 
          color: ${p.theme.ui.colors.default};`;
      case 'dark':
        return css` 
          background-color: ${p.theme.ui.colors.black}; 
          color: ${p.theme.ui.colors.white};`;
      case 'primary':
        return css` 
          background-color: ${p.theme.ui.colors.blue}; 
          color: ${p.theme.ui.colors.white};`;
      case 'info':
        return css` 
          background-color: ${p.theme.ui.colors.aqua}; 
          color: ${p.theme.ui.colors.white};`;
      case 'success':
        return css` 
          background-color: ${p.theme.ui.colors.green}; 
          color: ${p.theme.ui.colors.white};`;
      case 'warning':
        return css` 
          background-color: ${p.theme.ui.colors.yellow}; 
          color: ${p.theme.ui.colors.default};`;
      case 'danger':
        return css` 
          background-color: ${p.theme.ui.colors.red}; 
          color: ${p.theme.ui.colors.white};`;
      default:
        return css` 
          background-color: ${p.theme.ui.colors.white}; 
          color: ${p.theme.ui.colors.default}; `;
    }
  }}
`;

export const Content = styled('div')`
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 12px;
  &:before {
    content: '';
    display: block;
    font-size: 54px;
    line-height: .2;
  }
`;

export const Citate = styled('cite')`
  opacity: .7;
`;

export const AuthorImg = styled('div')`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0);
  width: 68px;
  height: 68px;
  margin-bottom: -34px;
  padding: 4px;
  background-color: #f5f5f5;
  border-radius: 50%;
`;

export const AvatarItem = styled(Avatar)`
  max-width: 100%;
  border-radius: 50%;
  width: 30px;
  height: auto;
  border-radius: 50%;
`;
