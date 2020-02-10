import styled from '@emotion/styled';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import removeProps from '@lskjs/utils/removeProps';
import createTypoCss, { excludeProps } from './createTypoCss';

export default styled(removeProps(createDynamicTag('h2'), excludeProps))`
${props => createTypoCss({ view: 'h2', ...props })}
line-height: 1.12;
letter-spacing: -0.022em;
font-weight: 600;
margin-bottom: -0.28em;
font-size: 34px;
margin-top: 1.25em;

text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
word-break: break-word;
box-sizing: inherit;
margin: 0;
font-family: medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif;
font-style: normal;
color: rgba(0, 0, 0, 0.84);
letter-spacing: -0.022em;
font-weight: 600;
line-height: 1.18;
margin-bottom: -0.31em;
font-size: 26px;
margin-top: 1.72em;
`;
