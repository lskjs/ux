import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';
import removeProps from '@lskjs/utils/removeProps';

const filteredTag = removeProps('div');

export default styled(filteredTag)`
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  height: 1px;
  background-color: rgba(0,0,0,.1);
  margin: 0 1.25rem;
`;
