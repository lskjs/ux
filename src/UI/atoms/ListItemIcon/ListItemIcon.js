import styled from 'react-emotion';
import removeProps from '../../../utils/removeProps';

const filteredTag = removeProps('div', ['color', 'background']);

export default styled(filteredTag)`
  font-size: 1rem;
  padding: 0;
  height: 35px;
  width: 35px;
  line-height: 35px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  color: ${p => (p.color || p.theme.ui.colors.darkGrey)};
  background-color: ${p => (p.background || p.theme.ui.colors.white)};
  i {
    line-height: 35px;
  }
`;
