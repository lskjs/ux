import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  text-align: center;
  color: ${p => getTheme(p.theme, 'colors.black')};
  font-size: 30px;
  padding-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
