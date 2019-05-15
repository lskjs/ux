import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('section')`
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  padding: 0 0 0 19px;
  line-height: 60px;
  flex: 0 0 auto;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  background-color: ${p => getTheme(p.theme, 'colors.white')};
  a {
    color: ${p => getTheme(p.theme, 'colors.darkGray')};
    &:hover {
      color: ${p => getTheme(p.theme, 'colors.darkGray')};
    }
  }
`;
