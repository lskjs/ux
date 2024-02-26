import { injectGlobal } from 'emotion';

export default () => injectGlobal`
  .ant-radio-group {
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
    line-height: unset;
  }
  .ant-radio-wrapper {
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
    position: relative;
    white-space: nowrap;
    margin-right: 8px;
    cursor: pointer;
  }
  .ant-radio {
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
    outline: none;
    display: inline-block;
    position: relative;
    line-height: 1;
    vertical-align: sub;
    cursor: pointer;
  }
  .ant-radio-wrapper:hover .ant-radio .ant-radio-inner,
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-focused .ant-radio-inner {
    border-color: var(--colors-border, #1890ff);
  }
  .ant-radio-checked:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid var(--colors-border, #1890ff);
    content: "";
    animation: antRadioEffect 0.36s ease-in-out;
    animation-fill-mode: both;
    visibility: hidden;
  }
  .ant-radio:hover:after,
  .ant-radio-wrapper:hover .ant-radio:after {
    visibility: visible;
  }
  .ant-radio-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    border-width: 1px;
    border-style: solid;
    border-radius: 100px;
    border-color: var(--colors-border, #d9d9d9);
    background-color: #fff;
    transition: all 0.3s;
  }
  .ant-radio-inner:after {
    position: absolute;
    width: 8px;
    height: 8px;
    left: 3px;
    top: 3px;
    border-radius: 8px;
    display: table;
    border-top: 0;
    border-left: 0;
    content: ' ';
    background-color: var(--colors-border, #1890ff);
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .ant-radio-input {
    position: absolute;
    left: 0;
    z-index: 1;
    cursor: pointer;
    opacity: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: var(--colors-border, #1890ff);
  }
  .ant-radio-checked .ant-radio-inner:after {
    transform: scale(0.875);
    opacity: 1;
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .ant-radio-disabled .ant-radio-inner {
    border-color: var(--colors-border, #d9d9d9) !important;
    background-color: #f5f5f5;
  }
  .ant-radio-disabled .ant-radio-inner:after {
    background-color: #ccc;
  }
  .ant-radio-disabled .ant-radio-input {
    cursor: not-allowed;
  }
  .ant-radio-disabled + span {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  span.ant-radio + * {
    padding-left: 8px;
    padding-right: 8px;
  }
  .ant-radio-button-wrapper {
    margin: 0;
    height: 32px;
    line-height: 30px;
    color: rgba(0, 0, 0, 0.65);
    display: inline-block;
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1px solid var(--colors-border, #d9d9d9);
    border-left: 0;
    border-top-width: 1.02px;
    background: #fff;
    padding: 0 15px;
    position: relative;
  }
  .ant-radio-button-wrapper a {
    color: rgba(0, 0, 0, 0.65);
  }
  .ant-radio-button-wrapper > .ant-radio-button {
    margin-left: 0;
    display: block;
    width: 0;
    height: 0;
  }
  .ant-radio-group-large .ant-radio-button-wrapper {
    height: 40px;
    line-height: 38px;
    font-size: 16px;
  }
  .ant-radio-group-small .ant-radio-button-wrapper {
    height: 24px;
    line-height: 22px;
    padding: 0 7px;
  }
  .ant-radio-button-wrapper:not(:first-child)::before {
    content: "";
    display: block;
    top: 0;
    left: -1px;
    width: 1px;
    height: 100%;
    position: absolute;
    background-color: var(--colors-border, #d9d9d9);
  }
  .ant-radio-button-wrapper:first-child {
    border-radius: 6px 0 0 6px;
    border-left: 1px solid var(--colors-border, #d9d9d9);
  }
  .ant-radio-button-wrapper:last-child {
    border-radius: 0 6px 6px 0;
  }
  .ant-radio-button-wrapper:first-child:last-child {
    border-radius: 6px;
  }
  .ant-radio-button-wrapper:hover,
  .ant-radio-button-wrapper-focused {
    color: var(--colors-border, #1890ff);
    position: relative;
  }
  .ant-radio-button-wrapper .ant-radio-inner,
  .ant-radio-button-wrapper input[type="checkbox"],
  .ant-radio-button-wrapper input[type="radio"] {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .ant-radio-button-wrapper-checked {
    background: #fff;
    border-color: var(--colors-border, #1890ff);
    color: var(--colors-border, #1890ff);
    box-shadow: -1px 0 0 0 var(--colors-border, #1890ff);
    z-index: 1;
  }
  .ant-radio-button-wrapper-checked::before {
    background-color: var(--colors-border, #1890ff) !important;
    opacity: 0.1;
  }
  .ant-radio-button-wrapper-checked:first-child {
    border-color: var(--colors-border, #1890ff);
    box-shadow: none !important;
  }
  .ant-radio-button-wrapper-checked:hover {
    border-color: #40a9ff;
    box-shadow: -1px 0 0 0 #40a9ff;
    color: #40a9ff;
  }
  .ant-radio-button-wrapper-checked:active {
    border-color: #096dd9;
    box-shadow: -1px 0 0 0 #096dd9;
    color: #096dd9;
  }
  .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background: var(--colors-border, #1890ff);
    border-color: var(--colors-border, #1890ff);
    color: #fff;
  }
  .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover {
    border-color: #40a9ff;
    background: #40a9ff;
    color: #fff;
  }
  .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active {
    border-color: #096dd9;
    background: #096dd9;
    color: #fff;
  }
  .ant-radio-button-wrapper-disabled {
    border-color: var(--colors-border, #d9d9d9);
    background-color: #f5f5f5;
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
  }
  .ant-radio-button-wrapper-disabled:first-child,
  .ant-radio-button-wrapper-disabled:hover {
    border-color: var(--colors-border, #d9d9d9);
    background-color: #f5f5f5;
    color: rgba(0, 0, 0, 0.25);
  }
  .ant-radio-button-wrapper-disabled:first-child {
    border-left-color: var(--colors-border, #d9d9d9);
  }
  .ant-radio-button-wrapper-disabled.ant-radio-button-wrapper-checked {
    color: #fff;
    background-color: #e6e6e6;
    border-color: var(--colors-border, #d9d9d9);
    box-shadow: none;
  }
  @keyframes antRadioEffect {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.6);
      opacity: 0;
    }
  }
  @supports (-moz-appearance:meterbar) and (background-blend-mode:difference,normal) {
    .ant-radio {
      vertical-align: text-bottom;
    }
  }
  .ant-radio-button-wrapper-checked {
    z-index: 0;
  }
  .ant-table-thead > tr > th.ant-table-selection-column .ant-radio-wrapper,
  .ant-table-tbody > tr > td.ant-table-selection-column .ant-radio-wrapper {
    margin-right: 0;
  }
  .ant-radio-inline.disabled,
  .ant-radio-vertical.disabled {
    cursor: not-allowed;
  }
  .ant-radio.disabled label {
    cursor: not-allowed;
  }
  .ant-radio-inner:after {
    left: 4px !important;
    top: 4px !important;
  }
  .ant-radio-checked:after {
    top: -1px;
    left: -1px;
  }
`;
