import styled from 'react-emotion';

export default styled('div')`
  background: ${p => p.theme.colors.white};
  position: relative;
  min-width: 100px;
  font-family: ${p => p.theme.fontFamily};
`;
