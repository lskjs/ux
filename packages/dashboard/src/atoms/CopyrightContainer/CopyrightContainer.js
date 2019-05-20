import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  position: relative;
  padding: 30px 0;
  font-size: 12px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
