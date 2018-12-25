import styled, { css } from 'react-emotion';
import removeProps from '../../../utils/removeProps';

const filteredTag = removeProps('div', ['padded', 'paint']);

const paintColors = (p) => {
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
    case 'nobackground':
      return css`
        background-color: transparent;
        color: ${p.theme.ui.colors.default}; `;
    case 'transparent':
      return css`
      background-color: transparent;
      color: ${p.theme.ui.colors.default};
      border: 1px solid transparent; `;
    default:
      return css` 
        background-color: ${p.theme.ui.colors.white}; 
        color: ${p.theme.ui.colors.default}; `;
  }
};

export default styled(filteredTag)`
  position: relative;
  border-radius: ${p => p.theme.ui.borderRadius};
  border: 1px solid ${p => p.theme.ui.colors.border}; 
  ${p => (p.padded && css`
    padding: 1.625rem;
    line-height: 1.85em;
    background-color: ${p.theme.ui.colors.white};
  `)}
  ${paintColors}
  >section:first-child {
    border-radius: 6px 6px 0 0;
  }

  >section:last-child {
    border-radius: 0 0 6px 6px;
  }
  ${p => (p.image && css`
    background-image: ${`url(${p.image})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0px;
  `)}
`;
