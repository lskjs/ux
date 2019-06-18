import styled from 'react-emotion';

export default styled('div')`
  position: absolute;
  width: max-content;
  z-index: 10;
  display: inline-flex;
  > div {
    justify-content: flex-start;
  }
  button {
    width: 100%;
    border: none;
    outline: none;
    text-align: left;
  }
`;
