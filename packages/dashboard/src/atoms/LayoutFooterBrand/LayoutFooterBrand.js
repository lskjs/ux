import styled from 'react-emotion';
import createDynamicTag from '@lskjs/utils/createDynamicTag';

const dynamicTag = createDynamicTag('a');

export default styled(dynamicTag)`
  color: ${p => p.theme.colors.darkGray};
  text-transform: uppercase;
  letter-spacing: 0.02em;
  opacity: 1;
  font-family: ${p => p.theme.fontFamily};
`;
