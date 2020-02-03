import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  margin: -12px 0 24px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
