import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  text-align: center;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  @media screen and (min-width: 768px) {
    text-align: left;
    display: flex;
    justify-content: space-between;
  }
`;
