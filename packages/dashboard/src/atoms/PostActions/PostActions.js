import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  background: ${p => getTheme(p.theme, 'colors.white')};
  position: relative;
  opacity: 0;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
