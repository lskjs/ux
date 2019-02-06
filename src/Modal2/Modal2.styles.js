import styled, { css } from 'react-emotion';

export const modalStyle = css`
  margin: 18px auto;
  outline: none;
`;

export const modalSmall = css`
  @media screen and (min-width: 768px) {
    width: 428px;
  }
`;

export const modalNormal = css`
  @media screen and (min-width: 768px) {
    width: 576px;
  }
`;

export const modalLarge = css`
  @media screen and (min-width: 768px) {
    width: 872px;
  }
`;

export const InnerWrapper = styled('div')`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 18px rgba(0,0,0,.2);
  overflow: hidden;
`;
