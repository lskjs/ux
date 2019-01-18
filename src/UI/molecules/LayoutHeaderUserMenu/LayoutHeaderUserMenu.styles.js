import styled from 'react-emotion';

export const DropdownLink = styled('a')`
  display: flex;
  align-items: center;
  text-decoration: none !important;
  font-family: ${p => p.theme.fontFamily};
  color: ${p => p.theme.colors.darkGray} !important;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none !important;
    color: ${p => p.theme.colors.darkGray} !important;
  }
`;

export const AvatarText = styled('span')`
  font-family: ${p => p.theme.fontFamily};
  margin-left: .5rem;
`;
