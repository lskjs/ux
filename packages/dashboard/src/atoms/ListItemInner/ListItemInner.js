import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  display: flex;
  align-items: flex-start;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
