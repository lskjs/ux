import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export const Base = styled('header')`
  background: ${props => getTheme(props.theme, 'colors.white')};
  height: 64px;
  box-shadow: 0 2px 8px ${props => getTheme(props.theme, 'colors.gray')}33;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
`;

export const Brand = styled('a')`
  width: 64px;
  height: 64px;
  background: ${props => getTheme(props.theme, 'colors.primary')};
  color: ${props => getTheme(props.theme, 'colors.white')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  cursor: pointer;
  margin-right: 24px;

  transition: background .2s ease;
  will-change: background;

  &:hover {
    background: ${props => getTheme(props.theme, 'colors.darkPrimary')};
  }
`;

export const Profile = styled('div')`
  margin: 0 24px 0 -24px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

export const ProfileAvatarWrapper = styled('div')`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
`;

export const ProfileContent = styled('div')`
  padding-left: 12px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const ProfileCategory = styled('div')`
  font-size: 12px;
  font-family: ${props => getTheme(props.theme, 'fontFamily')};
  color: ${props => getTheme(props.theme, 'colors.gray')};
  margin-bottom: 4px;
`;

export const ProfileName = styled('div')`
  font-size: 16px;
  font-weight: bold;
  font-family: ${props => getTheme(props.theme, 'fontFamily')};
  color: ${props => getTheme(props.theme, 'colors.main')};
`;
