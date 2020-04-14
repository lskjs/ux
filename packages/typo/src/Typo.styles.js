import styled from '@emotion/styled';
// import getTheme from '@lskjs/theme/getTheme';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import removeProps from '@lskjs/utils/removeProps';
import createTypoCss from './createTypoCss';

const dynamicTag = createDynamicTag('div');

// h1, .h1 { font-size: $h1-font-size; }
// h2, .h2 { font-size: $h2-font-size; }
// h3, .h3 { font-size: $h3-font-size; }
// h4, .h4 { font-size: $h4-font-size; }
// h5, .h5 { font-size: $h5-font-size; }
// h6, .h6 { font-size: $h6-font-size; }

// .lead {
//   font-size: $lead-font-size;
//   font-weight: $lead-font-weight;
// }

// // Type display classes
// .display-1 {
//   font-size: $display1-size;
//   font-weight: $display1-weight;
//   line-height: $display-line-height;
// }
// .display-2 {
//   font-size: $display2-size;
//   font-weight: $display2-weight;
//   line-height: $display-line-height;
// }
// .display-3 {
//   font-size: $display3-size;
//   font-weight: $display3-weight;
//   line-height: $display-line-height;
// }
// .display-4 {
//   font-size: $display4-size;
//   font-weight: $display4-weight;
//   line-height: $display-line-height;
// }


// const small1 = css`
//   font-size: 11px;
//   font-weight: normal;
//   font-style: normal;
//   font-stretch: normal;
//   line-height: 1.8;
//   letter-spacing: -0.1px;
// `;

const Aligns = {
  INHERIT: 'inherit',
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
  JUSTIFY: 'justify',
};

export const alignEnum = Object.values(Aligns);

// const views = {
//   default: small1,
//   'small-1': small1,
// };

// export const viewEnum = Object.keys(views);
export const preEnum = ['line', 'wrap'];

export default styled(removeProps(dynamicTag, [
  'lineHeight',
  'paragraph',
  'textOverflow',
  'color',
  'view',
  'align',
  'width',
]))`${props => createTypoCss(props)}`;

// export default styled(removeProps(dynamicTag, [
//   'lineHeight',
//   'paragraph',
//   'textOverflow',
//   'color',
//   'view',
//   'align',
//   'width',
// ]))`
//   word-break: break-word;
//   ${props => props.width && `width: ${props.width}px`};
//   ${props => props.textOverflow && `
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   `}
//   font-family: ${props => getTheme(props.theme, 'font.family.base')};
//   color: ${props => (props.color || getTheme(props.theme, 'colors.main'))};
//   text-align: ${(props) => {
//     if (Object.values(Aligns).includes(props.align)) {
//       return props.align;
//     }
//     return Aligns.INHERIT;
//   }};
//   ${(props) => {
//     if (!props.pre) return '';
//     const prefix = 'white-space:';
//     switch (props.pre) {
//       case 'line': return `${prefix} pre-line;`;
//       case 'wrap': return `${prefix} pre-wrap;`;
//       default: return `${prefix} pre;`;
//     }
//   }}
//   ${(props) => {
//     if (typeof props.paragraph === 'number') {
//       return `margin-bottom: ${props.paragraph}px;`;
//     }
//     if (props.paragraph) {
//       return 'margin-bottom: 24px;';
//     }
//     return '';
//   }}
//   ${(props) => {
//     const view = {
//       ...(getTheme(props.theme, 'typo.base') || {}),
//       ...(getTheme(props.theme, `typo.${props.view}`) || {}),
//     };
//     return css`
//       font-size: ${view.size};
//       font-weight: ${view.weight};
//       font-style: ${view.style};
//       font-stretch: ${view.stretch};
//       line-height: ${view.height};
//       letter-spacing: ${view.spacing};
//       margin: ${view.margin};
// `;
//   }}
//   ${(props) => {
//     if (props.lineHeight) {
//       return `line-height: ${props.lineHeight};`;
//     }
//     return '';
//   }}
// `;
