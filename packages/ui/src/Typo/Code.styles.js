import styled from '@emotion/styled';
import createDynamicTag from '@lskjs/utils/createDynamicTag';

export default styled(createDynamicTag('code'))`
font-style: normal;
word-break: break-word;
color: rgba(0, 0, 0, 0.84);
line-height: 1.58;
letter-spacing: -0.004em;
box-sizing: inherit;
font-weight: 400;
background-color: rgba(0, 0, 0, 0.05);
font-family: Menlo, Monaco, "Courier New", Courier, monospace;
padding: 2px 4px;
font-size: 75%;
`;
