import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  padding-right: 5px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
