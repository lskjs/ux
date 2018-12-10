import styled, { css } from 'react-emotion';

import removeProps from '../../../utils/removeProps';

const filteredTag = removeProps('section', ['padded', 'paint']);

export default styled(filteredTag)`
  line-height: 2.15em;
  font-weight: 600;
  ${p => (p.padded && css`
    padding: 12px 20px;
    font-size: 16px;
    border-bottom: 1px solid transparent;
    font-weight: 500;
  `)}
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
        return '';
    }
  }}
`;
