import styled from '@emotion/styled';
import { css } from '@emotion/core';
import getTheme from '@lskjs/theme/getTheme';

export default styled('span')`
  ${p => (p.validationState === 'error' && `
    color: ${getTheme(p.theme, 'colors.danger')};
  `)}
`;

export const globalStyles = css`
  .ant-checkbox {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.71428571;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    top: -0.09em;
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: var(--colors-primary, #1890ff);
  }
  .ant-checkbox-checked:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    border: 1px solid var(--colors-primary, #1890ff);
    content: "";
    animation: antCheckboxEffect 0.36s ease-in-out;
    animation-fill-mode: both;
    visibility: hidden;
  }
  .ant-checkbox:hover:after,
  .ant-checkbox-wrapper:hover .ant-checkbox:after {
    visibility: visible;
  }
  .ant-checkbox-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid var(--colors-border, #d9d9d9);
    border-radius: 2px;
    background-color: var(--colors-white, #fff);
    transition: all 0.3s;
    border-collapse: separate;
  }
  .ant-checkbox-inner:after {
    transform: rotate(45deg) scale(0);
    position: absolute;
    left: 4.57142857px;
    top: 1.14285714px;
    display: table;
    width: 5.71428571px;
    height: 9.14285714px;
    border: 2px solid var(--colors-white, #fff);
    border-top: 0;
    border-left: 0;
    content: ' ';
    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
    opacity: 0;
  }
  .ant-checkbox-input {
    position: absolute;
    left: 0;
    z-index: 1;
    cursor: pointer;
    opacity: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  .ant-checkbox-checked .ant-checkbox-inner:after {
    transform: rotate(45deg) scale(1);
    position: absolute;
    display: table;
    border: 2px solid var(--colors-white, #fff);
    border-top: 0;
    border-left: 0;
    content: ' ';
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    opacity: 1;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--colors-primary, #1890ff);
    border-color: var(--colors-primary, #1890ff);
  }
  .ant-checkbox-disabled {
    cursor: not-allowed;
  }
  .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner:after {
    animation-name: none;
    border-color: rgba(0, 0, 0, 0.25);
  }
  .ant-checkbox-disabled .ant-checkbox-input {
    cursor: not-allowed;
  }
  .ant-checkbox-disabled .ant-checkbox-inner {
    border-color: var(--colors-border, #d9d9d9) !important;
    background-color: #f5f5f5;
  }
  .ant-checkbox-disabled .ant-checkbox-inner:after {
    animation-name: none;
    border-color: #f5f5f5;
    border-collapse: separate;
  }
  .ant-checkbox-disabled + span {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .ant-checkbox-wrapper {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.71428571;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: unset;
    cursor: pointer;
    display: inline-block;
  }
  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 8px;
  }
  .ant-checkbox-wrapper + span,
  .ant-checkbox + span {
    padding-left: 8px;
    padding-right: 8px;
  }
  .ant-checkbox-group {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.71428571;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
  }
  .ant-checkbox-group-item {
    display: inline-block;
    margin-right: 8px;
  }
  .ant-checkbox-group-item:last-child {
    margin-right: 0;
  }
  .ant-checkbox-group-item + .ant-checkbox-group-item {
    margin-left: 0;
  }
  .ant-checkbox-indeterminate .ant-checkbox-inner {
    background-color: var(--colors-white, #fff);
    border-color: var(--colors-border, #d9d9d9);
  }
  .ant-checkbox-indeterminate .ant-checkbox-inner:after {
    content: ' ';
    transform: translate(-50%, -50%) scale(1);
    border: 0;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    background-color: var(--colors-primary, #1890ff);
    opacity: 1;
  }
  .ant-checkbox-indeterminate.ant-checkbox-disabled .ant-checkbox-inner:after {
    border-color: rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.25);
  }
  .ant-checkbox-inline.disabled,
  .ant-checkbox-vertical.disabled {
    cursor: not-allowed;
  }
  .ant-checkbox.disabled label {
    cursor: not-allowed;
  }
  .ant-checkbox-checked:after {
    top: -1px;
    left: -1px;
  }
`;
