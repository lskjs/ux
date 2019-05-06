import styled from 'react-emotion';
import createDynamicTag from '@lskjs/utils/createDynamicTag';

const dynamicTag = createDynamicTag('a');

export default styled(dynamicTag)`
  font-size: 20px;
  margin-left: 13px;
  font-family: ${p => p.theme.fontFamily};
`;
