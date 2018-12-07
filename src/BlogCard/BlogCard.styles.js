// import styled, { css } from 'react-emotion';

import styled, { css, keyframes } from 'react-emotion';
import createDynamicTag from '../utils/createDynamicTag';
import removeProps from '../utils/removeProps';
import theme from '../utils/theme';


const dynamicTag = createDynamicTag('article');
const filteredTag = removeProps(dynamicTag, [
  'new',
  'iconDirection',
  'paint',
  'view',
  'size',
  'block',
  'onlyIcon',
  'twoIcons',
]);


// const defaultStyle = ({ theme }) => css`
//   color: ${theme.colors && theme.colors.default};
//   &:hover {
//     color: ${theme.colors && theme.colors.darkGray};
//   }
// `;

// const primaryStyle = ({ theme }) => css`
//   color: ${theme.colors && theme.colors.primary};
//   &:hover {
//     color: ${theme.colors && theme.colors.primaryHover};
//   }
// `;

// const secondaryStyle = ({ theme }) => css`
//   color: ${theme.colors && theme.colors.secondary};
//   &:hover {
//     color: ${theme.colors && theme.colors.secondaryHover};
//   }
// `;

// export default styled(Link)`
//   text-decoration: underline;
//   cursor: pointer;
//   ${(props) => {
//     switch (props.bsStyle) {
//       case 'primary': return primaryStyle;
//       case 'secondary': return secondaryStyle;
//       default: return defaultStyle;
//     }
//   }}
// `;


// const viewTextDisabled = css`
//   color: rgba(74, 74, 74, 0.5) !important;
//   background-color: transparent !important;
//   &:hover,
//   &:active {
//     color: rgba(74, 74, 74, 0.5) !important;
//     background-color: transparent !important;
//   }
//   &:focus {
//     color: rgba(74, 74, 74, 0.5) !important;
//     background-color: rgba(155, 155, 155, 0.12) !important;
//   }
// `;

export const Wrapper = styled(filteredTag)`
  border: 1px solid rgba(0,0,0,.1);
  /* background: $white;
  border-radius: $border-radius; */
  overflow: hidden;
`;

export const Img = styled('img')`
  width: 100%;
  max-width: 100%;
`;

export const Body = styled('div')`
  /* border-radius: 0 0 $border-radius $border-radius; */
  padding: 1.625rem;
`;

export const Date = styled('span')`
  opacity: .7;
`;

export const Title = styled('h4')`
    line-height: 1.625rem;
    font-size: 1em;
    margin: 5px 0;
    /* font-weight: $font-weight-500;
    color: $body-color; */
`;
export const FlexContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
  align-items: stretch;
`;

export const FlexItem = styled('div')`
  flex: 0 1 calc(33% - 2em);
  margin-left: 1.5em;
  margin-right: 1.5em;
`;

