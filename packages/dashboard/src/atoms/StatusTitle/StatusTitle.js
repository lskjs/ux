import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  font-size: 13px;
  line-height: 1.43;
  letter-spacing: -0.1px;
  text-align: right;
  color: ${p => getTheme(p.theme, 'colors.main')};
`;
