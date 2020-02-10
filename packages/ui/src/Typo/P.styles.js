import styled from '@emotion/styled';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import removeProps from '@lskjs/utils/removeProps';
import createTypoCss, { excludeProps } from './createTypoCss';

export default styled(removeProps(createDynamicTag('p'), excludeProps))`
${props => createTypoCss({ view: 'p', ...props })}
margin-top: 2em;
font-size: 21px;
text-rendering: optimizeLegibility;
-webkit-font-smoothing: antialiased;
box-sizing: inherit;
margin: 0;
font-weight: 400;
font-style: normal;
word-break: break-word;
color: rgba(0, 0, 0, 0.84);
line-height: 1.58;
letter-spacing: -0.004em;
font-family: medium-content-serif-font;
margin-bottom: -0.46em;
font-size: 21px;
margin-top: 2em;
`;
