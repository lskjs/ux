import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export const DropdownLink = styled('a')`
  display: flex !important;
  align-items: center !important;
  text-decoration: none !important;
  height: 100%;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  color: ${p => getTheme(p.theme, 'colors.darkGray')} !important;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none !important;
    color: ${p => getTheme(p.theme, 'colors.darkGray')} !important;
  }
`;

export const AvatarText = styled('span')`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  margin-left: .5rem;
`;
