import styled from 'react-emotion';
import Avatar from '../../../Avatar';
import createDynamicTag from '../../../utils/createDynamicTag';

const dynamicTag = createDynamicTag('a');

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

export const SocialIcon = styled(dynamicTag)`
  color: #fff;
  background-color: #868e96;
  border: 0;
  transition: all .2s;
  line-height: 30px;
  font-size: .875rem;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  padding: 0;
  display: inline-block;
  text-align: center;
  margin-left: .25rem;
  &:hover {
    color: ${p => (p.theme.ui.colors.white)};
    text-decoration: none;
    background-color: #717a82;
  };
  &:focus {
    color: ${p => (p.theme.ui.colors.white)};
    text-decoration: none;
    background-color: #717a82;
  };
  &:active {
    color: ${p => (p.theme.ui.colors.white)};
    text-decoration: none;
    background-color: #717a82;
  }
`;
