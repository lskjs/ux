import styled from 'react-emotion';

export default styled('div')`
  background-color: ${p => p.theme.colors.primary};
  padding: 8;
  border-radius: 22;
  color: ${p => p.theme.colors.white};
`;
