import styled from 'react-emotion';

export const UserFooterItem = styled('div')`
  height: 120px;
  display: flex;
  position: relative;
  background-color: rgba(255,255,255,0.85);
  margin-bottom: -1px;
`;

export const AvatarContainer = styled('div')`
  position: relative;
  margin-top: -70px;
  padding: 12px;
`;

export const ButtonContainer = styled('div')`
  display: flex;
  margin-left: auto;
  margin-right: 20px;
  height: 40px;
  margin-top: 60px;
`;

export const Content = styled('div')`
  display: flex;
  width: 100%;
`;

export const TextContainer = styled('div')`
  padding: 10px 36px;
`;

export const TextItem = styled('div')`
  &:last-child {
    margin-top: 5px;
  }
`;
