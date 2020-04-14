import styled from '@emotion/styled';
import createDynamicTag from '@lskjs/utils/createDynamicTag';

// export default styled(removeProps(createDynamicTag('hr'), [
//   'lineHeight',
//   'paragraph',
//   'textOverflow',
//   'color',
//   'view',
//   'align',
//   'width',
// ]))`

// `
// text-rendering: optimizeLegibility;
// -webkit-font-smoothing: antialiased;
// color: rgba(0,0,0,0.8);
// box-sizing: inherit;
// font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

// `

export default styled(createDynamicTag('blockquote'))`
  font-weight: 400;
  word-break: break-word;
  margin: 0;
  padding-left: 30px;
`;
