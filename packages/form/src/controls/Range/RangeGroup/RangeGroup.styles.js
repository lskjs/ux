import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export const Graph = styled('div')`
  height: 52px;
  display: flex;
  padding: 0 0 0 6px;
  align-items: flex-end;
`;

export const GraphItem = styled('div', { shouldForwardProp: (prop) => !['height'].includes(prop) })`
  flex-grow: 1;
  border-radius: 2px 2px 0px 0px;
  background-color: ${(p) => getTheme(p.theme, 'colors.darkerBackground')};
  height: ${(p) => p.height};
`;
