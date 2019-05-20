import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  flex: 1;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
