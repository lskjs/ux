import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  text-align: center;
  color: ${p => getTheme(p.theme, 'colors.darkGray')};
`;
