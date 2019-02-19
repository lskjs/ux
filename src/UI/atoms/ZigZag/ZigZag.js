import styled, { keyframes } from 'react-emotion';

const zig = keyframes`
  33% {
    transform: translate(-15px, -30px);
  }
  66% {
    transform: translate(15px, -30px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const zag = keyframes`
  33% {
    transform: translate(15px, 30px);
  }
  66% {
    transform: translate(-15px, 30px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export default styled('div')`
  position: absolute;
  margin-left: 15px;
  top: 4px;
  left: -7px;
  &:first-child {
    animation: ${zig} 0.7s 0s infinite linear;
  }
  &:last-child {
    animation: ${zag} 0.7s 0s infinite linear;
  }
  background-color: ${p => p.color};
  animation-fill-mode: both;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
`;
