import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('input')`
  border: 0;
  border-bottom: 1px solid;
  outline: none;
  position: relative;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  margin: 30px 0 12px;
  width: 100%;
  background: none;
`;
