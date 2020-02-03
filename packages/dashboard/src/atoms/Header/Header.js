import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('section')`
  margin-bottom: 4rem;
  font-size: 2rem;
  text-align: center;
  font-weight: 400;
  color: #000;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
