/* eslint import/no-extraneous-dependencies: 0 */
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import getTheme from '@lskjs/theme/getTheme';

export const modalStyle = css`
  margin: 60px auto;
  @media screen and (max-width: 576px) {
    margin-top: 0;
  }
  outline: none;
  position: relative;
  width: 100%;
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
  background: ${p => getTheme(p.theme, 'colors.white')};
  border-radius: 8px;
  box-shadow: 0 2px 18px rgba(0, 0, 0, 0.2);
`;

// export const reactModalStyles = css`
//   transform: translate3d(0, 10%, 0);
//   transition: transform 0.2s ease;
// `;

// export const reactModalOpenStyles = css`
//   transform: translate3d(0, 0%, 0);
// `;

export const closeButtonStyle = css`
  position: absolute !important;
  right: 0;
  top: 0;
  margin: 8px;
  z-index: 1;
`;

export const hocFooter = css`
  .ant-form-item {
    width: auto !important;
    margin-bottom: 0 !important;
  }
`;

export const triggerStyle = css`
  display: flex;
`;

export const globalStyles = css`
  .bodyModal {
    overflow: hidden;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .ReactModal__Overlay--after-open {
    opacity: 1;
  }

  .ReactModal__Overlay--before-close {
    opacity: 0;
  }

  .ReactModal__Overlay .ReactModal__Content {
    opacity: 0;
    transform: translate3d(0, 5%, 0);
    transition: opacity 0.15s ease-out, transform 0.2s ease-out;
  }

  .ReactModal__Overlay--after-open .ReactModal__Content {
    transform: translate3d(0, 0%, 0);
    opacity: 1;
  }

  .ReactModal__Overlay--before-close .ReactModal__Content {
    transform: translate3d(0, -5%, 0);
    opacity: 0;
  }
`;
