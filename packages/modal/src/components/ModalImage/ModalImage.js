/* eslint import/no-extraneous-dependencies: 0 */
import styled from 'react-emotion';
import getTheme from '@lskjs/dev/getTheme';
import removeProps from '@lskjs/dev/removeProps';

export default styled(removeProps('div', ['src', 'color']))`
  position: relative;
  min-height: 200px;
  max-height: 300px;
  margin-top: 8px;
  background-size: cover;
  background-position: center;
  background-color: ${props => (props.color || getTheme(props.theme, 'colors.primary'))};
  ${props => (props.src && `background-image: url(${props.src});`)}
`;
