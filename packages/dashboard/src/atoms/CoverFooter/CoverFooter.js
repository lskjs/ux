import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('p')`
  font-size: 14px;
  line-height: 1.71428571;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
