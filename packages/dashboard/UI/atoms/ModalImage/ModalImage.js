import styled from 'react-emotion';
import removeProps from '@lskjs/utils/removeProps';

export default styled(removeProps('div', ['src', 'color']))`
  position: relative;
  min-height: 200px;
  max-height: 300px;
  margin-top: 8px;
  background-size: cover;
  background-position: center;
  background-color: ${props => (props.color || props.theme.colors.primary)};
  ${props => (props.src && `background-image: url(${props.src});`)}
`;
