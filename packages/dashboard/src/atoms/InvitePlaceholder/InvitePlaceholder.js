import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  display: flex;
  justify-content: center;
  color: ${p => getTheme(p.theme, 'colors.secondary')};
`;
