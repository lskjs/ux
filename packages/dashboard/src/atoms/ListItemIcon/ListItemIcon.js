import styled from '@emotion/styled';
import removeProps from '@lskjs/utils/removeProps';
import getTheme from '@lskjs/theme/getTheme';

const filteredTag = removeProps('div', ['color', 'background']);

export default styled(filteredTag)`
  font-size: 1rem;
  padding: 0;
  height: 35px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  width: 35px;
  line-height: 35px;
  display: inline-block;
  text-align: center;
  border-radius: ${p => getTheme(p.theme, 'borderCircle')};
  color: ${p => (p.color || getTheme(p.theme, 'colors.darkGray'))};
  background-color: ${p => (p.background || getTheme(p.theme, 'colors.white'))};
  i {
    line-height: 35px;
  }
`;
