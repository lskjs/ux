import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  background: ${p => getTheme(p.theme, 'colors.white')};
  position: absolute;
  top: 0;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  height: 100%;
  right: 0;
  display: flex;
  align-items: center;
  font-size: 80%;
`;
