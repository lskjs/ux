import styled from '@emotion/styled';

export default styled('div', { shouldForwardProp: (prop) => !['verticalAlign', 'align'].includes(prop) })`
  display: flex;
  color: inherit;
  text-decoration: none;
  align-items: ${(p) => p.verticalAlign || 'flex-start'};
  justify-content: ${(p) => p.align || 'flex-start'};
`;
