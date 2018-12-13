import styled from 'react-emotion';
import createDynamicTag from '../../../utils/createDynamicTag';

const dynamicTag = createDynamicTag('a');

export const ImageContainer = styled('div')`
  position: relative;
  overflow: hidden;
  &:before {
    opacity: .5;
    content: '';
    position: absolute;
    width: 100%;
    height: 80%;
    left: 0;
    top: 0;
    background: linear-gradient(180deg, ${p => (p.theme.ui.colors.darkGrey)} 0%, rgba(33,37,41, 0) 100%);
  }
`;

export const Image = styled('img')`
  width: 100%;
  max-width: 100%;
  border-radius: 6px;
`;

export const CardInfo = styled('div')`
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 1;
  padding: 26px;
  color: ${p => (p.theme.ui.colors.white)};
  ${(p) => {
    switch (p.position) {
      case 'bottom':
        return`
          top: auto;
          bottom: 0;
        `;
      default:
        return`
          top: 0;
        `;
    }
  }}
`;

export const CardName = styled('h4')`
  margin: 0;
  color: ${p => (p.theme.ui.colors.white)};
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
`;

export const CardTag = styled('span')`
  opacity: .6;
  font-weight: 300;
  font-size: 14px;
`;

export const Card = styled(dynamicTag)`
  display: block;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  }
`;
