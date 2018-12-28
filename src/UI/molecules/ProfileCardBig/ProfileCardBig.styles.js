import styled from 'react-emotion';
import Avatar from '../../../Avatar';
import createDynamicTag from '../../../utils/createDynamicTag';

const dynamicTag = createDynamicTag('article');

export const ProfileCardItem = styled(dynamicTag)`
  border: 1px solid rgba(0,0,0,.1);
  display: block;
  padding: 1rem;
  border-radius: ${p => p.theme.borderRadius};
  background-color: ${p => p.theme.colors.white};
  text-align: center;
  font-family: ${p => p.theme.fontFamily};
  h4 {
    margin: 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
  }
  h4 + span {
    display: block;
    opacity: .8;
    margin-bottom: 14px;
  }
`;

export const ProfileCardAvatar = styled(Avatar)`
  box-shadow: 0 0 0 5px rgba(0,0,0,.1), 0 0 10px hsla(0,0%,100%,.2);
  border-radius: 80px;
`;

export const SocialIcon = styled('a')`
  color: #fff;
  background-color: #868e96;
  border: 0;
  transition: all .2s;
  line-height: 30px;
  font-size: 14px;
  height: 30px;
  width: 30px;
  border-radius: ${p => p.theme.borderCircle};
  padding: 0;
  display: inline-block;
  text-align: center;
  margin-left: 4зч;
  &:hover {
    color: ${p => (p.theme.colors.white)};
    text-decoration: none;
    background-color: #717a82;
  };
  &:focus {
    color: ${p => (p.theme.colors.white)};
    text-decoration: none;
    background-color: #717a82;
  };
  &:active {
    color: ${p => (p.theme.colors.white)};
    text-decoration: none;
    background-color: #717a82;
  }
`;
