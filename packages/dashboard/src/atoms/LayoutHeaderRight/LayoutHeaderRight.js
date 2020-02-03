import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  padding-right: 5px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
