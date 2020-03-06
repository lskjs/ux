import styled from '@emotion/styled';
import { css } from '@emotion/core';
import getTheme from '@lskjs/theme/getTheme';

export const popperDisabledStyle = css`
  pointer-events: none;
`;

export const contentStyle = css`
  overflow: hidden;
`;

export const Content = styled('div')`
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.24);
  background-color: ${p => getTheme(p.theme, 'colors.white')};
  z-index: 1;
  height: ${p => p.height}px;
`;

export const Icon = styled('div')`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 13px;
  font-size: 24px;
  line-height: 43px;
  color: hsl(0,0%,80%);
  transition: color .1s ease-out;

  &:hover {
    color: hsl(0,0%,60%);
  }
  > svg {
    margin-top: -22px;
  }
`;

export const outsideWrapperStyle = css`
  position: relative;
`;

export const Trigger = styled('button')`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  font-size: 13px;
  text-align: left;
  letter-spacing: -0.1px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  background-color: ${p => getTheme(p.theme, 'colors.white')};
  border: 1px solid ${p => (p.open ? `${getTheme(p.theme, 'colors.primary')} !important` : getTheme(p.theme, 'colors.border'))};
  padding: 0;
  outline: none;
  position: relative;
  transition: border-color .1s ease-out;

  > div {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
      &:not(:last-child) {
        line-height: 46px;
      }
      &:last-child {
        top: -2px;
      }
  }

  ${p => (p.disabled && css`
    opacity: .5;
    pointer-events: none;
    cursor: not-allowed;
  `)}

  ${p => (p.open && css`
    ${Icon} {
      color: hsl(0,0%,40%);
    }
  `)}

  &:hover {
    border-color: hsl(0,0%,70%);
  }
`;

export const globalStyles = css`
  .popover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2021;
    display: none;
    max-width: 276px;
    padding: 1px;
    font-family: "PT Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    letter-spacing: -0.1px;
    line-break: auto;
    line-height: 1.42857;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    word-wrap: normal;
    font-size: 15px;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); }
  .popover.top {
    margin-top: -10px; }
  .popover.right {
    margin-left: 10px; }
  .popover.bottom {
    margin-top: 10px; }
  .popover.left {
    margin-left: -10px; }

.popover-title {
  margin: 0;
  padding: 8px 14px;
  font-size: 15px;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 7px 7px 0 0; }

.popover-content {
  padding: 9px 14px; }

.popover > .arrow, .popover > .arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid; }

.popover > .arrow {
  border-width: 11px; }

.popover > .arrow:after {
  border-width: 10px;
  content: ""; }

.popover.top > .arrow {
  left: 50%;
  margin-left: -11px;
  border-bottom-width: 0;
  border-top-color: #999999;
  border-top-color: fadein(rgba(0, 0, 0, 0.2), 5%);
  bottom: -11px; }
  .popover.top > .arrow:after {
    content: " ";
    bottom: 1px;
    margin-left: -10px;
    border-bottom-width: 0;
    border-top-color: #fff; }

.popover.right > .arrow {
  top: 50%;
  left: -11px;
  margin-top: -11px;
  border-left-width: 0;
  border-right-color: #999999;
  border-right-color: fadein(rgba(0, 0, 0, 0.2), 5%); }
  .popover.right > .arrow:after {
    content: " ";
    left: 1px;
    bottom: -10px;
    border-left-width: 0;
    border-right-color: #fff; }

.popover.bottom > .arrow {
  left: 50%;
  margin-left: -11px;
  border-top-width: 0;
  border-bottom-color: #999999;
  border-bottom-color: fadein(rgba(0, 0, 0, 0.2), 5%);
  top: -11px; }
  .popover.bottom > .arrow:after {
    content: " ";
    top: 1px;
    margin-left: -10px;
    border-top-width: 0;
    border-bottom-color: #fff; }

.popover.left > .arrow {
  top: 50%;
  right: -11px;
  margin-top: -11px;
  border-right-width: 0;
  border-left-color: #999999;
  border-left-color: fadein(rgba(0, 0, 0, 0.2), 5%); }
  .popover.left > .arrow:after {
    content: " ";
    right: 1px;
    border-right-width: 0;
    border-left-color: #fff;
    bottom: -10px; }

`;
