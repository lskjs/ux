import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  text-align: center;
  color: ${p => getTheme(p.theme, 'colors.darkGray')};
`;
