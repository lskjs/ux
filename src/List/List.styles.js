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


export const HeaderItemWrapper = styled('div')`
  height: 48px;
  padding: 0 12px;
  font-family: ${p => p.theme.fontFamily};
  background-color: ${p => p.theme.colors.white};
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
  border-radius: ${p => p.theme.borderRadius};
  border: 1px solid ${p => p.theme.colors.border};
  box-shadow: ${p => ((typeof p.shadow === 'string' && p.shadow) || (p.shadow ? '0 1px 6px 0 rgba(0, 0, 0, 0.04), 0 2px 4px 0 rgba(0, 0, 0, 0.04)' : 'none'))};
  background-color: ${p => p.theme.colors.white};
  
  > *:first-child {
    border-radius: ${p => p.theme.borderRadius} ${p => p.theme.borderRadius} 0 0;
  }
  
  > *:last-child {
    border-radius: 0 0 ${p => p.theme.borderRadius} ${p => p.theme.borderRadius};
  }
`;

const dynamicListTableItemTag = createDynamicTag('div');
export const ListTableItem = styled(dynamicListTableItemTag)`
  display: block;
  height: ${p => p.height}px;
  padding: 0 12px;
  background-color: ${p => p.theme.colors.white};
  
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

export const BodyWrapper = styled('div')`
  /* display: grid; */
  font-family: ${p => p.theme.fontFamily};
`;

export const ItemsWrapper = styled('div')`

`;

export const FilterWrapper = styled('div')`
  padding: 12px;
  background-color: ${p => p.theme.colors.lightGray};
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

export const FooterWrapper = styled('div')`
  display: flex;
  align-items: center;
  font-family: ${p => p.theme.fontFamily};
  color: ${p => p.theme.colors.secondary};
  background-color: ${p => p.theme.colors.darkerBackground};
  border-top: 1px solid ${p => p.theme.colors.border};
  height: auto;
  padding: 8px 12px;
  @media screen and (max-width: 1317px) {
    flex-direction: column;
    align-items: flex-end;
    padding: 12px;
    height: auto;
  }
`;

export const FooterRightWrapper = styled('div')`
  margin-left: auto;
  display: flex;
  align-items: center;
`;


export const PaginatorGroupWrapper = styled('div')`
  margin-left: 40px;
  display: flex;
  align-items: center;
  
  > *:not(:last-child) {
    margin-right: 6px;
  }
  @media screen and (max-width: 1317px) {
    margin-top: 12px;
    justify-content: flex-end;
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

export const PagesWrapper = styled('div')`
  margin-left: 40px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1317px) {
    margin-top: 12px;
    justify-content: flex-end;
  }
`;

export const PaginatorWrapper = styled('div')`
  display: flex;
  font-family: ${p => p.theme.fontFamily};
  color: ${p => p.theme.colors.secondary};
  @media screen and (max-width: 1317px) {
    flex-direction: column;
  }
`;

export const StepperWrapper = styled('div')`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1317px) {
    /* margin-top: 12px; */
    justify-content: flex-end;
  }
`;

export const SelectWrapper = styled('select')`
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

export const TabsWrapper = styled('div')`
  height: 56px;
  padding: 0 16px;
  display: flex;
  align-items: flex-end;
  
  /* > TabBlock {
    margin-bottom: -2px;
    
    ul li > * {
      padding: 16px 4px 21px;
      font-size: 13px !important;
    }
  } */
`;

export const HeaderWrapper = styled('div')`
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

export const TagsWrapper = styled('div')`
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
`;
