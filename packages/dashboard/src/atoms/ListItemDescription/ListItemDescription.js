import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  margin-top: .4rem;
  opacity: .8;
  font-size: .75rem;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
