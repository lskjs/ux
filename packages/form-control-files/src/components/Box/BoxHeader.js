import { css } from '@emotion/core';
import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';
import removeProps from '@lskjs/utils/removeProps';

const filteredTag = removeProps('section', ['padded', 'paint']);

export default styled(filteredTag)`
  line-height: 2.15em;
  font-weight: 600;
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  ${(p) =>
    p.padded &&
    css`
      padding: 12px 20px;
      font-size: 16px;
      border-bottom: 1px solid transparent;
      font-weight: 500;
    `}
  ${(p) => {
    switch (p.paint) {
      case 'light':
        return css`
          background-color: ${getTheme(p.theme, 'colors.lightGray')};
          color: ${getTheme(p.theme, 'colors.main')};
        `;
      case 'dark':
        return css`
          background-color: ${getTheme(p.theme, 'colors.black')};
          color: ${getTheme(p.theme, 'colors.white')};
        `;
      case 'primary':
        return css`
          background-color: ${getTheme(p.theme, 'colors.primary')};
          color: ${getTheme(p.theme, 'colors.white')};
        `;
      case 'info':
        return css`
          background-color: ${getTheme(p.theme, 'colors.info')};
          color: ${getTheme(p.theme, 'colors.white')};
        `;
      case 'success':
        return css`
          background-color: ${getTheme(p.theme, 'colors.success')};
          color: ${getTheme(p.theme, 'colors.white')};
        `;
      case 'warning':
        return css`
          background-color: ${getTheme(p.theme, 'colors.warning')};
          color: ${getTheme(p.theme, 'colors.main')};
        `;
      case 'danger':
        return css`
          background-color: ${getTheme(p.theme, 'colors.danger')};
          color: ${getTheme(p.theme, 'colors.white')};
        `;
      default:
        return '';
    }
  }}
`;
