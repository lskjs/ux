/* eslint import/no-extraneous-dependencies: 0 */
import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('h2', { shouldForwardProp: (prop) => !['align'].includes(prop) })`
  padding: 8px 16px 0;
  margin: 0;
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: -0.1px;
  color: ${(p) => getTheme(p.theme, 'colors.main')};
  text-align: ${(props) => props.align};
`;
