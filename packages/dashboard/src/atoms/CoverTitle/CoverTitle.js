import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('h1')`
  font-weight: 200;
  font-size: 2.75rem;
  margin-bottom: 1.625rem;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  line-height: 1.3;
`;
