import styled, { css } from 'react-emotion';

const h4Style = css`
  font-size: 21px;
  line-height: 1.6em;
  font-weight: 400;
`;

const bodyStyle = css`
  font-size: 1rem;
  opacity: .8;
  text-align: left;
`;

const defaultStyle = css`
  font-size: 14px;
`;

const h2Style = css`
  position: relative;
  font-size: 2rem;
  font-weight: 200;
  color: black;
`;

const smallStyle = css`
  font-size: 12px;
`;


export default styled('div')`
  font-family: ${p => p.theme.fontFamily};
  text-align: ${p => (p.align || 'left')};
  color: ${p => (p.color || p.theme.colors.main)};
  ${p => (p.paragraph && css`
    margin-bottom: .6em;
  `)}
  ${(p) => {
    switch (p.variant) {
      case 'h4': return h4Style;
      case 'body': return bodyStyle;
      case 'h2': return h2Style;
      case 'small': return smallStyle;
      default: return defaultStyle;
    }
  }}
`;
