import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.1;
  text-align: left;
  color: ${p => getTheme(p.theme, 'colors.main')};
`;
