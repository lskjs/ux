import styled from 'react-emotion';

export const Value = styled('span')`
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fontFamily};
  font-weight: 500;
`;

export const ValueBlock = styled('div')`
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.darkGray};
  font-family: ${p => p.theme.fontFamily};
`;
