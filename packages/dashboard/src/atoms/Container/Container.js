import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  max-width: 1110;
  margin: 0 auto;
  padding: 54px 2em 5em;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
