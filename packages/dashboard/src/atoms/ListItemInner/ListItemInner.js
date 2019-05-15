import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  display: flex;
  align-items: flex-start;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
