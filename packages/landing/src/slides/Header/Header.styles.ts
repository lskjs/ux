import styled from '@emotion/styled';

export const Wrapper = styled('header')`
  height: 64px;
`;

export const Inner = styled('div')`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Brand = styled('div')`
  flex-shrink: 0;
  max-width: 160px;
  font-size: 24px;
  margin-right: 30px;
  font-family: sans-serif;
`;

export const SearchWrapper = styled('div')`
  width: 36px;
  flex-shrink: 0;
  margin-right: 30px;
  font-family: sans-serif;
  @media screen and (min-width: 768px) {
    width: 160px;
  }
  @media screen and (min-width: 992px) {
    width: 255px;
  }
  @media screen and (min-width: 1200px) {
    width: 360px;
  }
`;

export const MenuWrapper = styled('div')`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const MenuItem = styled('a')<{ activeClassName: string }>`
  display: block;
  cursor: pointer;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 300;
  color: #000;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 18px;
  }

  &.selected {
    font-weight: bold;
  }
`;

export const RightMenu = styled('div')`
  margin-left: auto;
  flex-shrink: 0;
  max-width: 160px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;


export const RightMenuItem = styled('div')`
  flex-shrink: 0;
  font-family: sans-serif;
  &:not(:first-of-type) {
    margin-left: 24px;
  }
`;

