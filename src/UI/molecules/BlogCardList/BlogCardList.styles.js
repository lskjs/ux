import styled from 'react-emotion';
import createDynamicTag from '../../../utils/createDynamicTag';

const dynamicTag = createDynamicTag('a');

export const ImageContainer = styled(dynamicTag)`
  padding: 0;
  flex: 0 0 100%;
  max-width: 100%;
  height: 100%;
  @media screen and (min-width: 992px) {
    flex: 0 0 58.33%;
    max-width: 58.33%;
  }
`;

export const Body = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 26px;
  font-family: ${p => p.theme.fontFamily};
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  flex: 0 0 100%;
  max-width: 100%;
  @media screen and (min-width: 992px) {
    flex: 0 0 41.66%;
    max-width: 41.66%;
  }
`;

export const Image = styled('img')`
  width: 100%;
  max-width: 100%;
  @media screen and (min-width: 992px) {
    border-radius: ${p => p.theme.borderRadius} 0 0 ${p => p.theme.borderRadius};
  }
`;

export const TagItem = styled('div')`
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: ${p => p.theme.fontFamily};
  font-weight: 500;
  opacity: .8;
`;

export const TitleLink = styled(dynamicTag)`
  text-decoration: none;
  color: ${p => p.theme.colors.darkGray};
  font-family: ${p => p.theme.fontFamily};
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: ${p => p.theme.colors.darkGray};
  }
`;

export const Title = styled('h4')`
  font-size: 32px;
  font-weight: 300;
  font-family: ${p => p.theme.fontFamily};
  line-height: 1.3125;
  margin: 16px 0 10px;
`;

export const Content = styled('div')`
  padding: 0 0 13px;
  flex: 1
  font-family: ${p => p.theme.fontFamily};
`;

export const Author = styled('div')`
  padding-top: 24px;
  border-top: 1px solid rgba(0,0,0,.1);
  padding-top: 26px;
  font-size: 14px;
  font-family: ${p => p.theme.fontFamily};
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 500;
`;

export const Wrapper = styled('article')`
  border: 1px solid rgba(0,0,0,.1);
  background: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.borderRadius};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    height: 297px;
  }
`;
