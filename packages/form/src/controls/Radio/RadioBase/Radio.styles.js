import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export const Icon = styled('button')`
  background: none;
  outline: none;
  border: none;
  color: ${p => (p.isActive ? p.theme.colors.primary : p.theme.colors.gray)};
  font-size: 24px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  > svg {
    max-width: 24px;
    min-width: 24px;
  }
`;

export const Item = styled('div')`
  display: inline-flex;
  align-items: flex-start;
  input {
    display: none;
  }
  label {
    margin-bottom: 0;
    line-height: 1;
    margin-left: 8px !important;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.43;
    letter-spacing: -0.1px;
    text-align: left;
    font-family: ${p => getTheme(p.theme, 'fontFamily')};
    color: ${p => getTheme(p.theme, 'colors.main')};
    cursor: pointer;
  }
  ${(p) => {
    switch (p.validationState) {
      case 'error':
        return `
        ${Icon} {
          color: ${getTheme(p.theme, 'colors.danger')};
        }
        label {
          color: ${getTheme(p.theme, 'colors.danger')};
        }
`;
      default:
        return '';
    }
  }}
${p => (p.selected && `
    ${Icon} {
      color: ${getTheme(p.theme, 'colors.primary')};
      cursor: default;
    }
    label {
      cursor: default;
      color: ${getTheme(p.theme, 'colors.main')} !important;
    }
    `)}
  ${p => (p.disabled && `
    ${Icon} {
      color: ${getTheme(p.theme, 'colors.border')} !important;
      cursor: not-allowed;
    }
    label {
      color: ${getTheme(p.theme, 'colors.border')} !important;
      cursor: not-allowed;
    }
    cursor: not-allowed;
    &:hover label {
      color: ${getTheme(p.theme, 'colors.primary')};
    }
    `)}
`;
