import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export const Label = styled('b')`
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  font-size: 13px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.54;
  letter-spacing: -0.1px;
  text-align: right;
  color: ${(p) => getTheme(p.theme, 'colors.main')};
  margin-right: 12px;
`;

export const Handler = styled('div')`
  width: 18px;
  height: 18px;
  background-color: ${(p) => getTheme(p.theme, 'colors.white')};
  border-radius: 50px;
  margin-left: 0;

  transition: margin-left 0.8s ease;
  will-change: margin-left;
`;

export const Block = styled('button')`
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  width: 48px;
  height: 26px;
  outline: none;
  flex-shrink: 0;
  cursor: pointer;

  border-radius: 50px;
  background-color: ${(p) => getTheme(p.theme, 'colors.border')};
  padding: 4px;

  transition: background-color 0.2s ease;
  ${(p) =>
    p.validationState === 'error' &&
    `
    background-color: ${getTheme(p.theme, 'colors.danger')};
  `}
  will-change: background-color;
  ${(p) =>
    p.checked &&
    `
    background-color: ${getTheme(p.theme, 'colors.primary')};
    ${Handler} {
      margin-left: auto;
    }
  `}
`;

export const Wrap = styled('div')`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  ${(p) =>
    p.disabled &&
    `
    ${Block} {
      background-color: ${getTheme(p.theme, 'colors.border')} !important;
      cursor: not-allowed;
    }
    ${Label} {
      color: ${getTheme(p.theme, 'colors.border')};
    }
  `}
`;

export const LabelWrapper = styled('div')`
  * {
    color: ${(p) => p.checked && getTheme(p.theme, 'colors.primary')} !important;
  }
  ${(p) =>
    p.left &&
    `margin-right: 12px;
  `};
  ${(p) =>
    p.right &&
    `margin-left: 12px;
  `};
`;
