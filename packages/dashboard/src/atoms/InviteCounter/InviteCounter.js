import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  background-color: ${p => getTheme(p.theme, 'colors.primary')};
  padding: 8px;
  border-radius: 22px;
  color: ${p => getTheme(p.theme, 'colors.white')};
`;
