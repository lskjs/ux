import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  margin: -12px 0 24px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
