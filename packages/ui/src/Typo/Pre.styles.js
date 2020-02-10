import styled from '@emotion/styled';
import createDynamicTag from '@lskjs/utils/createDynamicTag';

export default styled(createDynamicTag('pre'))`
font-weight: 400;
word-break: break-word;
box-sizing: inherit;
margin: 0;
overflow-x: auto;
padding: 20px;
background: rgba(0, 0, 0, 0.05);
`;