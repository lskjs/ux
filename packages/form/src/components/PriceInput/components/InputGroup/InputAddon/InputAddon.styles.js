import styled from 'react-emotion';

export default styled('section')`
  display: flex;
  ${p => (p.icon && `
    font-size: 24px;
    padding: 8px;
    align-items: center;
    > svg {
      display: flex;
    }
  `)}
`;
