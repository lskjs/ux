import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  background-color: ${props => getTheme(props.theme, 'colors.lighterPrimary')};
  height: 24px;
  z-index: 0;
  width: 24px;
  color: white;
  /* position: absolute; */
  border-radius: 2px;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  outline: 5px solid ${props => getTheme(props.theme, 'colors.lighterPrimary')};
`;

