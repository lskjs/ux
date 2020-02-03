import styled from '@emotion/styled';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import removeProps from '@lskjs/utils/removeProps';

const dynamicTag = createDynamicTag('div');
const filteredTag = removeProps(dynamicTag, ['verticalAlign', 'align']);
export default styled(filteredTag)`
  display: flex;
  color: inherit;
  text-decoration: none;
  align-items: ${p => (p.verticalAlign || 'flex-start')};
  justify-content: ${p => (p.align || 'flex-start')};
`;
