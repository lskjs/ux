import styled from '@emotion/styled';
import Avatar from '@lskjs/ui/Avatar';
import getTheme from '@lskjs/theme/getTheme';

export const Box = styled('div')`
  position: relative;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: ${p => getTheme(p.theme, 'borderRadius')};
  background-color: ${p => getTheme(p.theme, 'colors.white')};
  font-family: ${p => (getTheme(p.theme, 'fontFamily'))};
`;

export const BoxBody = styled('div')`
  padding: 20px;
  border-radius: 0 0 ${p => getTheme(p.theme, 'borderRadius')} ${p => getTheme(p.theme, 'borderRadius')};
  &:after {
    display: block;
    clear: both;
    content: "";
  }
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;

export const Wrapper = styled('div')`
  text-align: center;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;

export const AvatarItem = styled(Avatar)`
  max-width: 100px;
  margin: 0 auto 16px;
  border-radius: ${p => getTheme(p.theme, 'borderCircle')};
  max-width: 80px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;

export const Citation = styled('blockquote')`
  &:before {
    content: none;
  }
  &:after {
    content: none;
  }
  margin: 0 0 3px;
  font-size: 20px;
  opacity: .9;
  border-left: 0;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;

export const Author = styled('p')`
  font-size: 16px;
  opacity: .54;
  margin-bottom: 0;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
