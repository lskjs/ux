import styled, { css } from 'react-emotion';
import createDynamicTag from '../../../utils/createDynamicTag';

const dynamicTag = createDynamicTag('a');

export const ItemCard = styled('div')`
  position: relative;
  transition: 0.2s linear;
  border-radius: 6px;
  &:hover {
    box-shadow: 0 0 15px rgba(0,0,0, .1);
  }
  margin-bottom: 1.5rem !important;
`;

export const CardImage = styled(dynamicTag)`
  display: block;
  text-decoration: none;
  padding: 30px 15px;
  height: 300px;
  width: 50%;
  border-radius: 6px 6px 0 0;
  background-color: rgba(#000, .035);
  text-align: center;
`;

export const 

export const CardBody = styled('div')`
  border-radius: 0 0 6px 6px;
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  padding: 40px 30px;
  color: $body-color;
  background-color: #fff;
`;

export const CardTitle = styled('div')`
  font-size: 1rem;
`;

export const CardPrice = styled('div')`
  position: absolute;
  top: 30px;
  right: 30px;
`;

export const StrikeThroughItem = styled('span')`
display: block;
color: ${p => (p.theme.ui.colors.grey600)};
${p => (p.isPierced && css`
  opacity: .5;
  text-decoration: line-through;
`)}
`;

export const Divider = styled('div')`
  border-width: 1px 0 0 0;
  border-style: solid;
  border-color: transparent;
  margin-top: 10px;
  margin-bottom: 10px;
  border-style: solid;
  border-color: $divider-color;
  margin-top: 24px
  margin-bottom: 24px;
`;

export const CardDesc = styled('p')`
  margin: 0 25% 3em 0;
  opacity: .7;
`;

export const Image = styled('img')`
  max-width: 100%;
  max-height: 100%;
`;

export const TitleLink = styled(dynamicTag)`
  color: $body-color;
  font-weight: $font-weight-500;
  text-decoration: none
`;

export const TitleSpan = styled('span')`
  display: block;
  font-size: $font-size-sm;
  opacity: .5;
`;

