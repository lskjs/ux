import styled from 'react-emotion';

export const UserFooterItem = styled('div')`
  height: 120px;
  display: flex;
  margin-top: auto;
  position: relative;
  background-color: rgba(255,255,255,0.85);
  margin-bottom: -1px;
  font-family: ${p => p.theme.fontFamily};
`;

export const AvatarContainer = styled('div')`
  position: relative;
  margin-top: -70px;
  padding: 12px;
  font-family: ${p => p.theme.fontFamily};
`;

export const ButtonContainer = styled('div')`
  padding: 10px 36px;
  margin-left: auto;
  font-family: ${p => p.theme.fontFamily};
`;

export const Content = styled('div')`
  display: flex;
  width: 100%;
  font-family: ${p => p.theme.fontFamily};
`;

export const TextContainer = styled('div')`
  padding: 10px 36px;
  font-family: ${p => p.theme.fontFamily};
`;

export const TextItem = styled('div')`
  margin-top: 5px;
  &:first-child {
    font-size: 16px;
    font-weight: 600;
  }
  font-family: ${p => p.theme.fontFamily};
`;
