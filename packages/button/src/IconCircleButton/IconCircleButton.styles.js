import styled from '@emotion/styled';
import { css } from '@emotion/core';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import removeProps from '@lskjs/utils/removeProps';
import getTheme from '@lskjs/theme/getTheme';

const dynamicTag = createDynamicTag('button');
const filteredTag = removeProps(dynamicTag, [
  'small',
  'transparent',
  'child',
  'inverse',
]);

export default styled(filteredTag)`
  width: ${p => (p.small ? 22 : 24)}px;
  height: ${p => (p.small ? 22 : 24)}px;
  border-radius: 100px;
  background-color: ${p => getTheme(p.theme, 'colors.lighterPrimary')};
  color: ${p => getTheme(p.theme, 'colors.primary')};
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  border: none;
  outline: none;
  padding: 0;
  cursor: pointer;
  transition: background-color .2s ease, color .2s ease, box-shadow .2s ease;
  will-change: background-color, color, box-shadow;

  margin: ${p => (p.small ? 0 : 8)}px;
  box-shadow: 0 0 0 8px transparent;

  &:hover {
    ${p => (!p.small && css`
      box-shadow: 0 0 0 8px ${getTheme(p.theme, 'colors.lighterPrimary')};
    `)}
  }

  ${p => (p.active && css`
    background-color: ${getTheme(p.theme, 'colors.primary')};
    color: ${getTheme(p.theme, 'colors.white')};
  `)}

  &:hover {
    background-color: ${p => getTheme(p.theme, 'colors.primary')};
    color: ${p => getTheme(p.theme, 'colors.white')};
  }

  > svg {
    display: flex;
  }

  ${p => (p.inverse && css`
    background-color: ${getTheme(p.theme, 'colors.primary')};
    color: ${getTheme(p.theme, 'colors.white')};

    ${p.active && css`
      background-color: ${getTheme(p.theme, 'colors.primary')};
      color: ${getTheme(p.theme, 'colors.white')};
    `}

    &:hover {
      background-color: ${getTheme(p.theme, 'colors.primary')};
      color: ${getTheme(p.theme, 'colors.white')};
    }

    ${p.disabled && css`
      background-color: ${getTheme(p.theme, 'colors.border')};
      cursor: not-allowed;
      color: ${getTheme(p.theme, 'colors.white')};

      &:hover {
        background-color: ${getTheme(p.theme, 'colors.border')};
        color: ${getTheme(p.theme, 'colors.white')};
      }
    `}
  `)}

  ${p => (p.transparent && css`
    background-color: transparent;
    color: rgba(74, 74, 74, 0.28);
    font-size: 15px;

    ${p.active && css`
      background-color: transparent;
      color: rgba(74, 74, 74, 0.6);
    `}

    &:hover {
      background-color: transparent;
      color: rgba(74, 74, 74, 0.6);
    }
  `)}

  ${p => (p.disabled && css`
    background-color: #f9f9f9;
    cursor: not-allowed;
    color: #3e3e3e;

    &:hover {
      background-color: #f9f9f9;
      color: #3e3e3e;
    }
  `)}
`;
