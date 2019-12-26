import styled, { css } from 'react-emotion';

export const Title = styled('div')`
 ${p => (p.error && css`
    color: #ee1e31;
  `)}
`;

export const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled('div')`
  display: flex;
`;
