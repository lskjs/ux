import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export const Wrapper = styled('section')`
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 0 24px;
  
  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled('div')`
  flex: 0 0 62.5%;
  width: 62.5%;
  display: flex;
  justify-content: center;
  zoom: 1;
  @media screen and (max-width: 992px) {
    margin-top: 24px;
  }
`;


export const Title = styled('h1')`
  line-height: 1.3;
  color: ${p => getTheme(p.theme, 'colors.darkGray')};
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  font-size: 2.5rem;
  margin-bottom: 1.625rem;
`;


export const Subtitle = styled('p')`
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  letter-spacing: .3px;
  opacity: .9;
`;

export const Footer = styled('div')`
  margin-top: .5rem;
  font-size: .75rem;
  opacity: .7;
  font-style: italic;
`;

export const IconWrapper = styled('div')`
  font-size: 42px;
  padding-top: 28px;
  padding-bottom: 28px;
  color: ${p => getTheme(p.theme, 'colors.darkGray')};
`;

export const ContentWrapper = styled('div')`
  text-align: ${(p) => {
    switch (p.align) {
      case 'left': return 'left';
      case 'right': return 'right';
      case 'center': return 'center';
      default: return 'center';
    }
  }}
`;
