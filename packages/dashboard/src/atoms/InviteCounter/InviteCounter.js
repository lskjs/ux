import styled from 'react-emotion';

export default styled('div')`
  background-color: ${p => p.theme.colors.primary};
  padding: 8px;
  border-radius: 22px;
  color: ${p => p.theme.colors.white};
`;
