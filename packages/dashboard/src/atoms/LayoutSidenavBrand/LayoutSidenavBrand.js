import styled from '@emotion/styled';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import getTheme from '@lskjs/theme/getTheme';

const dynamicTag = createDynamicTag('a');

export default styled(dynamicTag)`
  font-size: 20px;
  margin-left: 13px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
