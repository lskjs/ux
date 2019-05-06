import styled from 'react-emotion';

export default styled('div')`
  background: ${p => p.theme.colors.white};
  position: relative;
  opacity: 0;
  font-family: ${p => p.theme.fontFamily};
`;
