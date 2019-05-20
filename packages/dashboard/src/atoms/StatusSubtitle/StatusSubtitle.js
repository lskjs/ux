import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  font-size: 11px;
  letter-spacing: -0.1px;
  text-align: right;
  color: #4a4a4a;
  color: #${p => getTheme(p.theme, 'colors.main')};
`;
