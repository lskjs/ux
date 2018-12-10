import styled from 'react-emotion';
import Avatar from '../../../Avatar';

export const ProfileCardItem = styled('article')`
  border: 1px solid rgba(0,0,0,.1);
  padding: 1rem;
  border-radius: 6px;
  background-color: ${p => p.theme.ui.colors.white};
  text-align: center;
  h4 {
    margin: 0;
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.625rem;
  }
  h4 + span {
    display: block;
    opacity: .8;
    margin-bottom: .875rem;
  }
`;

export const ProfileCardAvatar = styled(Avatar)`
  box-shadow: 0 0 0 5px rgba(0,0,0,.1), 0 0 10px hsla(0,0%,100%,.2);
  border-radius: 80px;
`;
