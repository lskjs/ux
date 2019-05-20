import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  background: ${p => getTheme(p.theme, 'colors.white')};
  position: relative;
  min-width: 100px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
