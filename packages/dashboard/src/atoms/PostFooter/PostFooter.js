import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  padding: 18px 0 0;
  margin-top: 18px;
  border-top: 1px solid ${p => getTheme(p.theme, 'colors.border')};
`;
