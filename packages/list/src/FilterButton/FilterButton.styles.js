import { css } from '@emotion/core';
import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

const views = {
  primary: (p) => css`
    box-shadow: 0 0 0 1px ${getTheme(p.theme, 'colors.primary')};
    background-color: ${p.active ? getTheme(p.theme, 'colors.lighterPrimary') : 'transparent'};
    color: ${getTheme(p.theme, 'colors.primary')};
    &:active {
      background-color: ${getTheme(p.theme, 'colors.lighterPrimary')};
    }
    &:focus {
      background-color: ${getTheme(p.theme, 'colors.lighterPrimary')};
    }
    &:hover {
      background-color: ${getTheme(p.theme, 'colors.lighterPrimary')};
    }
  `,
  shadow: (p) => css`
    background-color: ${p.active ? 'var(--colors-shadowPrimary, rgba(130, 130, 139, 0.08))' : 'transparent'};
    color: ${getTheme(p.theme, 'colors.main')};
    &:active {
      background-color: var(--colors-shadowPrimary, rgba(130, 130, 139, 0.08));
    }
    &:focus {
      background-color: var(--colors-shadowPrimary, rgba(130, 130, 139, 0.08));
    }
    &:hover {
      background-color: var(--colors-shadowPrimary, rgba(130, 130, 139, 0.08));
    }
  `,
};

export const Base = styled('button')`
  display: flex;
  margin: 0;
  position: relative;
  outline: none;
  border: none;
  align-items: center;
  border-radius: 4px;
  padding: 6px;
  pointer-events: ${(p) => (p.disabled ? 'none' : 'auto')};
  cursor: pointer;

  will-change: background-color;
  transition: background-color 0.2s ease;

  ${(p) => views[p.view] || views.primary};
`;

export const Badge = styled('div')`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  transform-origin: 100% 0;
  border-radius: 10px;
  box-sizing: border-box;

  background-color: ${(p) => getTheme(p.theme, 'colors.danger')};
  box-shadow: 0 0 0 1px ${(p) => getTheme(p.theme, 'colors.white')};
  color: ${(p) => getTheme(p.theme, 'colors.white')};
  font-size: 12px;
  font-weight: 400;
  height: 20px;
  line-height: 20px;
  min-width: 20px;
  padding: 0 6px;
  text-align: center;
  white-space: nowrap;
  z-index: auto;
`;

export const Content = styled('div')`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;

  min-width: 48px;
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  padding-right: 6px;

  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};

  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const Side = styled('div')`
  width: 24px;
  margin-right: 8px;
  font-size: 24px;
  flex-shrink: 0;

  > svg {
    display: flex;
  }
`;
