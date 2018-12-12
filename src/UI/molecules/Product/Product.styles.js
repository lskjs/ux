import styled, { css } from 'react-emotion';

import createDynamicTag from '../../../utils/createDynamicTag';

const dynamicTag = createDynamicTag('a');

export const CardImage = styled(dynamicTag)`
  display: block;
  text-decoration: none;
  padding: 30px 15px;
  height: 300px;
  border-radius: 6px 6px 0 0;
  background-color: rgba(#000, .035);
  text-align: center;
`;

export const ItemCard = styled('div')`
  position: relative;
  transition: 0.2s linear;
  border-radius: 6px;
  &:hover {
    box-shadow: 0 0 15px rgba(0,0,0, .1);
  }
`;

export const Image = styled('img')`
  max-width: 100%;
  max-height: 100%;
`;

export const CardBody = styled('div')`
  position: relative;
  padding: 30px 15px;
  border-radius: 0 0 6px 6px;
  color: ${p => (p.theme.ui.colors.darkGrey)};
  background-color: ${p => (p.theme.ui.colors.white)};
`;

export const CardTitle = styled('title')`
  font-size: 16px;
  display: block;
`;

export const TitleLink = styled(dynamicTag)`
  color: ${p => (p.theme.ui.colors.darkGrey)};
  font-weight: 500;
  text-decoration: none;
`;

export const TitleSp = styled('span')`
  display: block;
  font-size: 12px;
  opacity: .5;
`;

export const CardPrice = styled('div')`
  position: absolute;
  top: 30px;
  right: 15px;
`;

export const StrikeTroughItem = styled('div')`
  display: block;
  color: ${p => (p.theme.ui.colors.grey600)};
  ${p => (p.isPierced && css`
    opacity: .5;
    text-decoration: line-through;
  `)}
`;
