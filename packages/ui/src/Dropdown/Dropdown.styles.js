import styled from '@emotion/styled';
import { css } from '@emotion/core';
import getTheme from '@lskjs/theme/getTheme';
import createDynamicTag from '@lskjs/utils/createDynamicTag';

export const Wrapper = styled('div')`
  .dropdown-menu {
    display: none;
    border: 1px solid #c3c3c3;
    list-style: none;
    padding: 5px;
    margin: 0px;
    width: 150px;
    position: absolute;
    background: #fff;
  }
  .dropdown-menu.menu-open {
    display: contents;
    width: auto;
  }
  position: relative;
`;

export const blockStyle = css`
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

const dynamicTag = createDynamicTag('div');
export const Block = styled(dynamicTag)`
  display: flex;
  align-items: center;
  padding: 15.5px 12px;
  ${p =>
    p.gap &&
    css`
      padding: ${p.gap}px;
    `}
  border-radius: 0;
  ${p =>
    p.reverse &&
    css`
      flex-direction: row-reverse;
    `}
  ${p =>
    p.active &&
    css`
      * {
        color: ${getTheme(p.theme, 'colors.primary')};
      }
    `}
  &:hover {
    background-color: ${p => getTheme(p.theme, 'colors.lighterPrimary')};
    > div > svg {
      color: ${p => getTheme(p.theme, 'colors.primary')};
    }
  }
`;

export const IconWrapper = styled('div')`
  margin-right: 8px;
  ${p =>
    p.reverse &&
    css`
      margin-right: 0;
      margin-left: 8px;
    `}
  color: ${p => getTheme(p.theme, 'colors.gray')};
`;
