import styled from 'react-emotion';

export const Title = styled('h1')`
  line-height: 1.3;
  color: ${p => (p.theme.colors.darkGray)};
  font-weight: 200;
  -webkit-font-smoothing: antialiased;
  font-family: ${p => p.theme.fontFamily};
  font-size: 2.5rem;
  margin-bottom: 1.625rem;
`;

export const Lead = styled('p')`
  font-size: 1.25rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  letter-spacing: .3px;
  opacity: .9;
  font-family: ${p => p.theme.fontFamily};
`;

export const Muted = styled('div')`
  margin-top: .5rem;
  font-size: .75rem;
  font-family: ${p => p.theme.fontFamily};
  opacity: .7;
  font-style: italic;
`;

export const Wrapper = styled('section')`
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

export const Image = styled('div')`
  background-image: url("https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg");
  height: 360px;
  width: 100%;
  max-width: 430px;
  float: right;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
`;

