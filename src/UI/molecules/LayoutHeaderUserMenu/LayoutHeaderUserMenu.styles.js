import styled from 'react-emotion';

export const DropdownLink = styled('a')`
  text-decoration: none !important;
  color: ${p => p.theme.ui.colors.darkGrey} !important;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none !important;
    color: ${p => p.theme.ui.colors.darkGrey} !important;
  }
`;

export const AvatarText = styled('span')`
  margin-left: .5rem;
`;
