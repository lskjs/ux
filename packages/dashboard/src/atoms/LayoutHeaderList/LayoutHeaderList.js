import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  padding-left: 0;
  list-style: none;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  display: flex;
  align-items: center;
  line-height: 60px;
  height: 60px;
`;
