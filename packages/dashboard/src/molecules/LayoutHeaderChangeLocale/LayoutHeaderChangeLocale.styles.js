import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('a')`
  display: flex !important;
  align-items: center !important;
  text-decoration: none !important;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  color: ${p => getTheme(p.theme, 'colors.darkGray')} !important;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none !important;
    color: ${p => getTheme(p.theme, 'colors.darkGray')} !important;
  }
`;
