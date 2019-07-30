import styled, { css } from 'react-emotion';

export default css`
  width: 100%;
  height: auto;
  border: none !important;
  border-radius: 0 !important;
  @media screen and (max-width: 330px) {
    width: 100%;
  }
`;

export const Loader = styled('div')`
  border: 8px solid #fff; /* Light grey */
  border-top: 8px solid #1890ff; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  z-index: 12;
  position: absolute;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Overlay = styled('div')`
  display: flex;
  align-items: center;
  position: absolute;
  background-color: black;
  opacity: 0.3;
  border-radius: 8px;
  z-index: 10;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const LoaderWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;
