import styled, { css } from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';
import creacteDynamicTag from '@lskjs/utils/createDynamicTag';
import removeProps from '@lskjs/utils/removeProps';

const dynamicTag = creacteDynamicTag('div');
const filteredTag = removeProps(dynamicTag, ['padded', 'paint']);

const paintColors = (p) => {
  switch (p.paint) {
    case 'light':
      return css`
        background-color: ${getTheme(p.theme, 'colors.lightGray')};
        color: ${getTheme(p.theme, 'colors.main')};`;
    case 'dark':
      return css`
        background-color: ${getTheme(p.theme, 'colors.black')};
        color: ${getTheme(p.theme, 'colors.white')};`;
    case 'primary':
      return css`
        background-color: ${getTheme(p.theme, 'colors.primary')};
        color: ${getTheme(p.theme, 'colors.white')};`;
    case 'info':
      return css`
        background-color: ${getTheme(p.theme, 'colors.info')};
        color: ${getTheme(p.theme, 'colors.white')};`;
    case 'success':
      return css`
        background-color: ${getTheme(p.theme, 'colors.success')};
        color: ${getTheme(p.theme, 'colors.white')};`;
    case 'warning':
      return css`
        background-color: ${getTheme(p.theme, 'colors.warning')};
        color: ${getTheme(p.theme, 'colors.main')};`;
    case 'danger':
      return css`
        background-color: ${getTheme(p.theme, 'colors.danger')};
        color: ${getTheme(p.theme, 'colors.white')};`;
    case 'nobackground':
      return css`
        background-color: transparent;
        color: ${getTheme(p.theme, 'colors.main')}; `;
    case 'transparent':
      return css`
      background-color: transparent;
      color: ${getTheme(p.theme, 'colors.main')};
      border: 1px solid transparent; `;
    default:
      return css`
        background-color: ${getTheme(p.theme, 'colors.white')};
        color: ${getTheme(p.theme, 'colors.main')}; `;
  }
};

export default styled(filteredTag)`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  border-radius: ${p => getTheme(p.theme, 'borderRadius')};
  border: 1px solid ${p => getTheme(p.theme, 'colors.border')};
  ${p => (p.padded && css`
    padding: 1.625rem;
    line-height: 1.85em;
    background-color: ${getTheme(p.theme, 'colors.white')};
  `)}
  ${paintColors}
  > section:first-child {
    border-radius: ${p => getTheme(p.theme, 'borderRadius')} ${p => getTheme(p.theme, 'borderRadius')} 0 0;
  }

  > section:last-child {
    border-radius: 0 0 ${p => getTheme(p.theme, 'borderRadius')} ${p => getTheme(p.theme, 'borderRadius')};
  }
  ${p => (p.image && css`
    background-image: ${`url(${p.image})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: ${getTheme(p.theme, 'borderRadius')}
  `)}
`;

