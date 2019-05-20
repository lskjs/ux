import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export const Value = styled('span')`
  color: ${p => getTheme(p.theme, 'colors.primary')};
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  font-weight: 500;
`;

export const MultiValue = styled('div')`
  background-color: ${p => getTheme(p.theme, 'colors.white')};
  color: ${p => getTheme(p.theme, 'colors.darkGray')};
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
