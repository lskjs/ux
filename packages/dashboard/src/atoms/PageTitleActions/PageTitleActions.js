import styled from 'react-emotion';

export default styled('div')`
  margin-left: auto;
  display: flex;
  align-items: center;
  > * {
    flex-shrink: 0;
  }
  > *:not(:last-child) {
    margin-right: 8px;
  }
`;
