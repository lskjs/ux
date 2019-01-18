import styled from 'react-emotion';

export default styled('div')`
  padding-left: 0;
  list-style: none;
  font-family: ${p => p.theme.fontFamily};
  display: flex;
  align-items: baseline;
  line-height: 60px;
  height: 60px;
`;
