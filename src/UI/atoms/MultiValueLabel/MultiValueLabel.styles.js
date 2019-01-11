import styled from 'react-emotion';

export default styled('div')`
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fontFamily};
`;
