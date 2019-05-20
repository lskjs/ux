import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  margin: 15px 0;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
