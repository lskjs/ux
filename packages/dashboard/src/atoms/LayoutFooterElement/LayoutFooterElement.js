import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('span')`
  font-size: 80%;
  font-weight: 400;
  opacity: .87;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
