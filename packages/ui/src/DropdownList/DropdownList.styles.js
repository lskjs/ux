import styled, { css } from 'react-emotion';

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

export const listStyle = css`
  min-width: 224px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.24);
`;
