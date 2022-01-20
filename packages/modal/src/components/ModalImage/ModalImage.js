/* eslint import/no-extraneous-dependencies: 0 */
import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div', { shouldForwardProp: (prop) => !['src', 'color'].includes(prop) })`
  position: relative;
  min-height: 200px;
  max-height: 300px;
  margin-top: 8px;
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.color || getTheme(props.theme, 'colors.primary')};
  ${(props) => props.src && `background-image: url(${props.src});`}
`;
