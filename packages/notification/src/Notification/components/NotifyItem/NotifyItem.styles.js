import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export const Left = styled('div')`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-right: 10px;
`;

export const Right = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Item = styled('div')`
  padding: 16px 32px 16px 8px;
  transition: .3s ease;
  will-change: opacity;
  cursor: pointer;
  display: flex;
  /* width: 100%; */
  border-radius: 8px;
  line-height: 1.2;
  text-decoration: none;
  align-items: flex-start;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};

  * {
    color: ${p => getTheme(p.theme, 'colors.white')} !important;
  }

  &:hover {
    text-decoration: none;
  }
  &:focus {
    text-decoration: none
  }
  &:active {
    text-decoration: none;
  }
  ${(p) => {
    switch (p.type) {
      case 'error':
        return `
          background-color: ${getTheme(p.theme, 'colors.danger')} !important;
          color: ${getTheme(p.theme, 'colors.white')} !important;
          &:hover {
            background-color: ${getTheme(p.theme, 'colors.danger')} !important;
            box-shadow: none !important;
            cursor: pointer !important;
            text-decoration: none !important;
          }
        `;
      case 'warning':
        return `
          background-color: ${getTheme(p.theme, 'colors.warning')} !important;
          color: ${getTheme(p.theme, 'colors.white')} !important;
          &:hover {
            background-color: ${getTheme(p.theme, 'colors.warning')} !important;
            box-shadow: none !important;
            cursor: pointer !important;
            text-decoration: none !important;
          }
        `;
      case 'success':
        return `
          background-color: ${getTheme(p.theme, 'colors.success')} !important;
          color: ${getTheme(p.theme, 'colors.white')} !important;
          &:hover {
            background-color: ${getTheme(p.theme, 'colors.success')} !important;
            box-shadow: none !important;
            cursor: pointer !important;
            text-decoration: none !important;
          }
        `;
      case 'info':
        return `
          background-color: ${getTheme(p.theme, 'colors.primary')} !important;
          color: ${getTheme(p.theme, 'colors.white')} !important;
          &:hover {
            background-color: ${getTheme(p.theme, 'colors.primary')} !important;
            box-shadow: none !important;
            cursor: pointer !important;
            text-decoration: none !important;
          }
        `;
      default: return '';
    }
  }}
  ${p => (p.unread && `
    background-color: #ddebf9;
  `)}
`;
