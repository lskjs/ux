import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  display: flex;
  background: ${p => getTheme(p.theme, 'colors.white')};
  border-radius: 3px;
  border: solid 1px rgba(0, 0, 0, 0.1);
`;
