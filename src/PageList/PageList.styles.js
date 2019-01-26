import styled, { css } from 'react-emotion';
import Rate from 'antd/lib/rate';
import createDynamicTag from '../utils/createDynamicTag';
// import TabBlock from '~/Uapp/components.v2/atoms/TabBlock';

export const Title = styled('div')`
  font-family: ${p => p.theme.fontFamily};
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.8;
  letter-spacing: -0.1px;
  color: ${p => p.theme.colors.main};
`;

export const SearchWrapper = styled('div')`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  position: relative;
  border-radius: 4px;
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.border};
  width: 240px;
  overflow: hidden;
  
  > svg {
    font-size: 24px;
    color: ${p => p.theme.colors.primary};
  }
`;

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
  font-family: ${p => p.theme.fontFamily};
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.54;
  letter-spacing: normal;
  color: ${p => p.theme.colors.main};
  
  ::-webkit-input-placeholder {
    color: ${p => p.theme.colors.secondary};
    font-family: ${p => p.theme.fontFamily};
  }
  ::-moz-placeholder {
    color: ${p => p.theme.colors.secondary};
    font-family: ${p => p.theme.fontFamily};
  }
  :-ms-input-placeholder {
    color: ${p => p.theme.colors.secondary};
    font-family: ${p => p.theme.fontFamily};
  }
  :-moz-placeholder {
    color: ${p => p.theme.colors.secondary};
    font-family: ${p => p.theme.fontFamily};
  }
`;

const bootstrapFixHeight = css`
  > .row {
    height: 100%;
    > div {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`;


export const ArrowWrapper = styled('div')`
  display: flex;
  font-size: 13px;
  height: 14px;
  margin: 0 4px;
  color: ${p => p.theme.colors.primary};

  transition: transform .2s ease, opacity .2s ease;
  will-change: transform, opacity;

  opacity: 0;
  > svg {
    display: flex;
  }
  ${p => (p.visible && `
    opacity: 1 !important;
  `)}
  ${p => (p.inverse && `
    transform: rotate(180deg);
  `)}
`;


export const ListTableHeader = styled('div')`
  height: 48px;
  padding: 0 12px;
  background-color: ${p => p.theme.colors.white};
  ${bootstrapFixHeight}
  
  &:hover {
    ${ArrowWrapper} {
      opacity: 1;
    }
  }
`;

export const ListPaper = styled('div')`
  /* display: grid; */
  border-radius: ${p => p.theme.radius};
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.04), 0 2px 4px 0 rgba(0, 0, 0, 0.04);
  background-color: ${p => p.theme.colors.white};
  
  > *:first-child {
    border-radius: ${p => p.theme.radius} ${p => p.theme.radius} 0 0;
  }
  
  > *:last-child {
    border-radius: 0 0 ${p => p.theme.radius} ${p => p.theme.radius};
  }
`;

const dynamicListTableItemTag = createDynamicTag('div');
export const ListTableItem = styled(dynamicListTableItemTag)`
  display: block;
  height: ${p => p.height}px;
  padding: 0 12px;
  background-color: ${p => p.theme.colors.white};
  ${bootstrapFixHeight}
  
  ${p => (p.clickable && css`
    cursor: pointer;
    transition: background-color .2s ease;
    will-change: background-color;
    &:hover {
      background-color: ${p.theme.colors.lighterPrimary};
    }
  `)}
  
  &:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.colors.border};
  }
`;

export const ListGrid = styled('div')`
  display: grid;
  grid-column-gap: ${p => p.gap}px;
  grid-auto-rows: ${p => p.height}px;
  grid-template-columns: ${(p) => {
    if (p.auto) {
      return `repeat(${p.columns.length} 1fr)`;
    }
    const str = p.columns.join(' ');
    return str;
  }};
  
  align-items: center;
`;

export const ListTableItems = styled('div')`
  display: grid;
`;

export const ListGridItem = styled('div')`
  display: flex;
  align-items: center;
  overflow: hidden;
  
  grid-column: ${p => (p.column || 1)};
  grid-row: ${p => (p.row || 1)};
  
  font-family: ${p => p.theme.fontFamily};
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.54;
  letter-spacing: -0.1px;
  color: ${p => p.theme.colors.main};
  justify-content: ${(p) => {
    switch (p.align) {
      case 'right': return 'flex-end';
      case 'center': return 'center';
      default: return 'flex-start';
    }
  }};
`;

const dynamicHeaderTitleTag = createDynamicTag('div');
export const HeaderTitle = styled(dynamicHeaderTitleTag)`
  font-family: ${p => p.theme.fontFamily};
  font-size: 11px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.27;
  overflow: hidden;
  letter-spacing: -0.1px;
  color: ${p => p.theme.colors.main};
  display: flex;
  align-items: center;
  outline: none;
  background: none;
  border: none;
  padding: 0;
  grid-column: ${p => (p.column || 1)};
  grid-row: ${p => (p.row || 1)};
`;

export const YouTubeLink = styled('a')`
  font-size: 32px;
  color: ${p => p.theme.colors.primary};
  transition: color .2s ease;
  will-change: color;
  cursor: pointer;
  outline: none;
  
  &:hover {
    color: ${p => p.theme.colors.danger};
  }
  
  > svg {
    display: flex;
  }
`;

export const RatingWrapper = styled('div')`
  display: flex;
  align-items: center;
`;

export const RatingValue = styled('div')`
  font-family: ${p => p.theme.fontFamily};
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: -0.1px;
  color: ${p => p.theme.colors.main};
  margin-right: 6px;
`;

export const RatingStars = styled(Rate)`
  color: ${p => p.theme.colors.darkerBackground};
  font-size: 12px;
  line-height: 0;
`;

export const Footer = styled('div')`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.fontFamily};
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.darkerBackground};
  height: 48px;
  padding: 0 12px;
`;

export const FooterRight = styled('div')`
  margin-left: auto;
  display: flex;
  align-items: center;
`;


export const PaginationGroup = styled('div')`
  margin-left: 40px;
  display: flex;
  align-items: center;
  
  > *:not(:last-child) {
    margin-right: 6px;
  }
`;

export const paginationButtonStyle = theme => css`
  color: ${theme.colors.secondary};
  
  padding-top: 6px !important;
  padding-bottom: 6px !important;
  padding-right: 6px !important;
  padding-left: 6px !important;
  
  > div:last-child {
    font-size: 28px;
  }
  
  &[disabled] {
    color: #cdcdcd !important;
  }
`;

export const PaginationPages = styled('div')`
  margin-left: 40px;
  display: flex;
  align-items: center;
`;

export const PaginationWrapper = styled('div')`
  display: flex;
  font-family: ${p => p.theme.fontFamily};
  color: ${p => p.theme.colors.secondary};
`;

export const PaginationStepper = styled('div')`
  display: flex;
  align-items: center;
`;

export const PaginationSelect = styled('select')`
  background: none;
  border: none;
  outline: none;
  margin-left: 6px;
`;

export const Header = styled('div')`
  margin: 12px 0 16px;
  
  > *:not(:last-child) {
    margin: 0 0 16px !important;
  }
  
  > *:last-child {
    margin: 0 !important;
  }
`;

export const TabsTableWrapper = styled('div')`
  height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: flex-end;
  
  /* > ${TabBlock} {
    margin-bottom: -2px;
    
    ul li > * {
      padding: 16px 4px 21px;
      font-size: 13px !important;
    }
  } */
`;

export const ListHeader = styled('div')`
  /* display: grid; */
  background-color: ${p => p.theme.colors.white};
  
  > * {
    border-bottom: 1px solid ${p => p.theme.colors.border};
  }
  
${p => (p.sticky && css`
    position: sticky;
    top: ${p.offset || 0}px;
    z-index: 10;
    `)}
`;

export const TagsTableWrapper = styled('div')`
  padding: 8px 14px 4px;
  display: flex;
  
  > button {
    margin-bottom: 4px;
  }
`;

export const VerticalDivider = styled('div')`
  width: 1px;
  height: ${p => (p.height || 30)}px;
  background-color: ${p => p.theme.colors.border};
`;

