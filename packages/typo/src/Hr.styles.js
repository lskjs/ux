import styled from '@emotion/styled';
import createDynamicTag from '@lskjs/utils/createDynamicTag';

export default styled(createDynamicTag('hr'))`
  font-weight: 300;
  font-size: 28px;
  border: none;
  margin-top: 30px;
  text-align: center;
  :before {
    line-height: 1.4;
    font-style: italic;
    text-indent: 0.6em;
    letter-spacing: 0.6em;
    content: '...';
  }
`;
