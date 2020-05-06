import getTheme from '@lskjs/theme/getTheme';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

export default styled('div')`
  position: absolute;
  width: max-content;
  z-index: 11;
  display: inline-flex;
  flex-direction: column;
  > div {
    justify-content: flex-start;
  }
  button {
    width: 100%;
    border: none;
    outline: none;
    text-align: left;
  }
  ${p =>
    p.pull === 'stretch' &&
    p.placement === 'bottom' &&
    css`
      > div {
        border-radius: 0px 0 8px 8px;
        box-shadow: none !important;
      }
    `}
  ${p =>
    p.pull === 'stretch' &&
    p.placement === 'top' &&
    css`
      > div {
        border-radius: 8px 8px 0px 0px;
        box-shadow: none !important;
      }
    `}
  ${p =>
    p.bordered &&
    css`
      > div {
        border-top: 1px solid ${getTheme(p.theme, 'colors.border')};
        box-shadow: 0 8px 6px 0px rgba(0, 0, 0, 0.24);
        padding-top: 8px;
        padding-bottom: 8px;
      }
    `}
`;

export const listStyle = css`
  min-width: 224px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.24);
  width: 100%;
`;

export const Actions = styled('div')`
  padding: 8px 12px;
  background-color: ${p => getTheme(p.theme, 'colors.white')};
  border-radius: 0 !important;
  border-top: none !important;
`;
