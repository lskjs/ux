import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  display: flex;
  align-items: center;
  border: 1px solid ${p => getTheme(p.theme, 'colors.border')};
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  margin-top: 10px;
  background-color: white;
  padding: 15px;
`;
