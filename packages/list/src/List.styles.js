import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Row } from '@lskjs/grid';
import getTheme from '@lskjs/theme/getTheme';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import removeProps from '@lskjs/utils/removeProps';

export const ListRowButton = styled('button')`
  padding: 13px 11px;
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.08;
  letter-spacing: -0.1px;
  color: ${(p) => getTheme(p.theme, 'colors.main')};
  background-color: transparent;
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  border: none;
  outline: none;
  border-radius: 0;
  text-decoration: none;
  display: block;
  width: 100%;
  margin: auto;
  cursor: pointer;
  height: 56px;
  pointer-events: ${(p) => (p.disabled ? 'none' : 'auto')};

  will-change: background-color;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(p) => getTheme(p.theme, 'colors.lighterPrimary')};
  }
`;

export const CommonButton = styled('button')`
  padding: 13px 11px;
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.08;
  letter-spacing: -0.1px;
  max-width: 214px;
  color: ${(p) => getTheme(p.theme, 'colors.white')};
  background-color: ${(p) => getTheme(p.theme, 'colors.primary')};
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  border: none;
  outline: none;
  border-radius: 4px;
  text-decoration: none;
  width: 100%;
  margin: auto;
  cursor: pointer;
  pointer-events: ${(p) => (p.disabled ? 'none' : 'auto')};

  will-change: background-color;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(p) => getTheme(p.theme, 'colors.darkPrimary')};
  }
`;

export const LoadMoreButton = styled('button')`
  padding: 17px 16px;
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.08;
  letter-spacing: -0.1px;
  color: ${(p) => getTheme(p.theme, 'colors.main')};
  background-color: ${(p) => getTheme(p.theme, 'colors.white')};
  width: 100%;
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  pointer-events: ${(p) => (p.disabled ? 'none' : 'auto')};
  text-decoration: none;
  outline: none;
  border: none;
  box-shadow: 0 0 0 1px ${(p) => getTheme(p.theme, 'colors.border')};
  text-align: center;
  cursor: pointer;

  will-change: background-color;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(130, 130, 139, 0.08);
  }
`;

export const Title = styled('div')`
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.8;
  letter-spacing: -0.1px;
  color: ${(p) => getTheme(p.theme, 'colors.main')};
`;

// export const SearchWrapper = styled('div')`
//   display: flex;
//   align-items: center;
//   padding: 8px 12px;
//   position: relative;
//   border-radius: 4px;
//   background-color: ${p => getTheme(p.theme, 'colors.white')};
//   border: 1px solid ${p => getTheme(p.theme, 'colors.border')};
//   width: 240px;
//   overflow: hidden;

//   > svg {
//     font-size: 24px;
//     color: ${p => getTheme(p.theme, 'colors.primary')};
//   }
// `;

export const SearchInput = styled('input')`
  border: none;
  outline: none;
  position: absolute;
  background: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 8px 12px 8px 44px;
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.54;
  letter-spacing: normal;
  color: ${(p) => getTheme(p.theme, 'colors.main')};

  ::-webkit-input-placeholder {
    color: ${(p) => getTheme(p.theme, 'colors.secondary')};
    font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  }
  ::-moz-placeholder {
    color: ${(p) => getTheme(p.theme, 'colors.secondary')};
    font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  }
  :-ms-input-placeholder {
    color: ${(p) => getTheme(p.theme, 'colors.secondary')};
    font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  }
  :-moz-placeholder {
    color: ${(p) => getTheme(p.theme, 'colors.secondary')};
    font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  }
`;

export const ArrowWrapper = styled('div')`
  display: flex;
  font-size: 13px;
  height: 14px;
  margin: 0 4px;
  color: ${(p) => getTheme(p.theme, 'colors.primary')};

  transition: transform 0.2s ease, opacity 0.2s ease;
  will-change: transform, opacity;

  opacity: 0;
  > svg {
    display: flex;
  }
  ${(p) =>
    p.visible &&
    `
    opacity: 1 !important;
  `}
  ${(p) =>
    p.inverse &&
    `
    transform: rotate(180deg);
  `}
`;

export const HeaderItemWrapper = styled('div')`
  height: 48px;
  padding: 0 ${(p) => getTheme(p.theme, 'tablePadding')}px;
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  background-color: ${(p) => getTheme(p.theme, 'colors.white')};
  font-weight: 500;
  > div > div {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${ArrowWrapper} {
      opacity: 1;
    }
  }
`;

export const Wrapper = styled('div')`
  /* display: grid; */
  width: 100%;
  /* overflow: hidden; */
  border-radius: ${(p) => getTheme(p.theme, 'borderRadius')};
  border: 1px solid ${(p) => getTheme(p.theme, 'colors.border')};
  background-color: ${(p) => getTheme(p.theme, 'colors.white')};

  > *:first-child {
    border-radius: ${(p) => getTheme(p.theme, 'borderRadius')} ${(p) => getTheme(p.theme, 'borderRadius')} 0 0;
  }

  > *:last-child {
    border-radius: 0 0 ${(p) => getTheme(p.theme, 'borderRadius')} ${(p) => getTheme(p.theme, 'borderRadius')};
  }
`;

const dynamicListTableItemTag = createDynamicTag('div');
export const ListTableItem = styled(dynamicListTableItemTag)`
  display: block;
  height: ${(p) => p.height}px;
  padding: 0 ${(p) => getTheme(p.theme, 'tablePadding')}px;
  background-color: ${(p) => getTheme(p.theme, 'colors.white')};

  ${(p) =>
    p.clickable &&
    css`
      cursor: pointer;
      transition: background-color 0.2s ease;
      will-change: background-color;
      &:hover {
        background-color: ${getTheme(p.theme, 'colors.lighterPrimary')};
      }
    `}

  &:not(:last-child) {
    border-bottom: 1px solid ${(p) => getTheme(p.theme, 'colors.border')};
  }
`;

export const ListGrid = styled('div')`
  display: grid;
  grid-column-gap: ${(p) => p.gap}px;
  grid-auto-rows: ${(p) => p.height}px;
  grid-template-columns: ${(p) => {
    if (p.auto) {
      return `repeat(${p.columns.length} 1fr)`;
    }
    const str = p.columns.join(' ');
    return str;
  }};

  align-items: center;
`;

export const BodyWrapper = styled('div')`
  /* display: grid; */
`;

export const BodyWrapperPadded = styled(Row)`
  padding: 12px 0;
`;

export const ItemsWrapper = styled('div')`
  > .table-gird-row {
    padding: ${(p) => `0 ${getTheme(p.theme, 'tablePadding')}px`};
  }
`;

export const FilterWrapper = styled('div')`
  padding: 22px ${(p) => getTheme(p.theme, 'tablePadding')}px 0;
  background-color: ${(p) => getTheme(p.theme, 'colors.lightGray')};
  position: relative;
  bottom: 1px;
  margin-top: 1px;
`;

export const FooterWrapper = styled('div')`
  /* display: flex; */
  /* align-items: center; */
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  font-size: 13px;
  color: ${(p) => getTheme(p.theme, 'colors.secondary')};
  /* background-color: ${(p) => getTheme(p.theme, 'colors.darkerBackground')}; */
  border-top: 1px solid ${(p) => getTheme(p.theme, 'colors.border')};
  /* height: auto; */
  padding: ${(p) => `8px ${getTheme(p.theme, 'tablePadding')}px`};
  /* @media screen and (max-width: 1317px) {
    flex-direction: column;
    align-items: flex-end;
    padding: 12px ${(p) => getTheme(p.theme, 'tablePadding')}px;
    height: auto;
  } */
`;

export const PaginatorGroupWrapper = styled('div')``;

export const PagesWrapper = styled('div')``;

export const PaginatorWrapper = styled('div')`
  /* font-family: ${(p) => getTheme(p.theme, 'fontFamily')}; */
  color: ${(p) => getTheme(p.theme, 'colors.secondary')};
`;

export const StepperWrapper = styled('div')``;

export const SelectWrapper = styled('select')`
  background: none;
  border: none;
  outline: none;
  margin-left: 6px;
`;

export const HeaderWrapper = styled('div')`
  /* display: grid; */
  background-color: ${(p) => getTheme(p.theme, 'colors.white')};

  > * {
    box-shadow: inset 0 -1px 0 ${(p) => getTheme(p.theme, 'colors.border')};
  }

  ${(p) =>
    p.sticky &&
    css`
      position: sticky;
      top: ${p.offset || 0}px;
      z-index: 10;
    `}
`;

export const TagsPanelWrapper = styled('div')`
  padding: ${(p) => `8px ${getTheme(p.theme, 'tablePadding')}px`};
  display: flex;
  flex-wrap: wrap;
  > button {
    margin-bottom: 4px;
  }
`;

export const ArrowButton = styled('button')`
  max-width: 32px;
  min-width: 32px;
  height: 32px;
  border-radius: 6px;
  text-align: center;
  transition: all 0.3s;
  display: inline-block;
  vertical-align: middle;
  outline: none;
  list-style: none;
  border: 1px solid #d9d9d9;
  cursor: pointer;
`;

export const ArrowBlock = styled('div')`
  display: flex;
  justify-content: flex-end;
  > button:not(:last-child) {
    margin-right: 8px;
  }
`;

const hoverTag = createDynamicTag('div');
const filteredHoverTag = removeProps(hoverTag, ['bordered']);
export const HoverRowWrapper = styled(filteredHoverTag)`
  cursor: pointer;
  display: block;
  > .table-gird-row {
    background-color: ${(p) => getTheme(p.theme, 'colors.white')};
    transition: background-color 0.2s ease-out;
    will-change: background-color;
  }
  ${(p) =>
    p.bordered &&
    css`
      &:not(:last-child) {
        ::after {
          content: '';
          position: absolute;
          width: 100%;
          display: block;
          height: 1px;
          background-color: ${getTheme(p.theme, 'colors.border')};
        }
      }
    `}
  &:hover {
    > .table-gird-row {
      background-color: ${(p) => getTheme(p.theme, 'colors.lighterPrimary')};
    }
  }
  ${(p) =>
    p.checked &&
    css`
      > .table-gird-row {
        background-color: ${getTheme(p.theme, 'colors.semiPrimary')};
      }
    `}
`;

const filteredSelectTag = removeProps('div', ['bordered']);
export const SelectRowWrapper = styled(filteredSelectTag)`
  cursor: pointer;
  display: block;
  &:not(:last-child) {
    border-bottom: 1px solid ${(p) => getTheme(p.theme, 'colors.border')};
  }
  > .table-gird-row {
    background-color: ${(p) => getTheme(p.theme, 'colors.white')};
    transition: background-color 0.2s ease-out;
    will-change: background-color;
  }
  > .table-gird-row:hover {
    background-color: ${(p) => getTheme(p.theme, 'colors.lighterPrimary')};
    transition: background-color 0.2s ease-out;
    will-change: background-color;
  }
  ${(p) =>
    p.bordered &&
    css`
      &:not(:last-child) {
        border-bottom: 1px solid ${getTheme(p.theme, 'colors.border')};
      }
    `}
  ${(p) =>
    p.checked &&
    css`
      > .table-gird-row {
        background-color: ${getTheme(p.theme, 'colors.semiPrimary')};
      }
    `}
`;

export const modalStyle = css`
  > form > div {
    display: block !important;
  }
`;

export const SearchActionsWrapper = styled('div')``;

export const SearchResultsWrapper = styled('div')`
  padding: ${(p) => getTheme(p.theme, 'tablePadding')}px;
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.23;
  letter-spacing: -0.1px;
  color: ${(p) => getTheme(p.theme, 'colors.main')};
`;

export const SearchWrapper = styled('div')`
  position: relative;
  box-sizing: border-box;
  ${(p) =>
    p.flex &&
    css`
      display: flex;
      align-items: center;
    `}
`;

export const PreSearchWrapper = styled('div')`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
