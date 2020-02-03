import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('p')`
  font-size: 14px;
  line-height: 1.71428571;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
