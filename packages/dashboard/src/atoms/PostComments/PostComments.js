import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  margin: 18px -24px -24px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  border-top: 1px solid ${p => getTheme(p.theme, 'colors.border')};
  background-color: ${p => getTheme(p.theme, 'colors.lightGray')};
`;
