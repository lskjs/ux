import styled from 'react-emotion';
import createDynamicTag from '../../../utils/createDynamicTag';

const dynamicTag = createDynamicTag('a');

export default styled(dynamicTag)`
  font-size: 20px;
  margin-left: 13px;
`;
