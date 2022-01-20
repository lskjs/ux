import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 1.25rem;
`;
