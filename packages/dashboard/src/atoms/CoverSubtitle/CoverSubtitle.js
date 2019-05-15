import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('p')`
  font-size: 1.25rem;
  line-height: 1.7;
  font-weight: 300;
  opacity: .9;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  margin-bottom: 1.625rem;
`;
