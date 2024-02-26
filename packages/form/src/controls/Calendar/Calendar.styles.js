import { injectGlobal } from 'emotion';

export const globalStylesCalendar = () => injectGlobal`
  .ant-calendar-picker-container {
    z-index: 1;
  }
  .ant-calendar-input-wrap {
    height: 34px;
    padding: 6px 10px;
    border-bottom: 1px solid var(--colors-border, #e8e8e8);
  }
  .ant-calendar-input {
    border: 0;
    width: 100%;
    cursor: auto;
    outline: 0;
    height: 22px;
    color: rgba(0, 0, 0, 0.65);
    background: var(--colors-white, #fff);
  }
  .ant-calendar-input::-moz-placeholder {
    color: #bfbfbf;
    opacity: 1;
  }
  .ant-calendar-input:-ms-input-placeholder {
    color: #bfbfbf;
  }
  .ant-calendar-input::-webkit-input-placeholder {
    color: #bfbfbf;
  }
  .ant-calendar-week-number {
    width: 286px;
  }
  .ant-calendar-week-number-cell {
    text-align: center;
  }
  .ant-calendar-header {
    height: 40px;
    line-height: 40px;
    text-align: center;
    user-select: none;
    border-bottom: 1px solid var(--colors-border, #e8e8e8);
  }
  .ant-calendar-header a:hover {
    color: #40a9ff;
  }
  .ant-calendar-header .ant-calendar-century-select,
  .ant-calendar-header .ant-calendar-decade-select,
  .ant-calendar-header .ant-calendar-year-select,
  .ant-calendar-header .ant-calendar-month-select {
    padding: 0 2px;
    font-weight: 500;
    display: inline-block;
    color: rgba(0, 0, 0, 0.85);
    line-height: 40px;
  }
  .ant-calendar-header .ant-calendar-century-select-arrow,
  .ant-calendar-header .ant-calendar-decade-select-arrow,
  .ant-calendar-header .ant-calendar-year-select-arrow,
  .ant-calendar-header .ant-calendar-month-select-arrow {
    display: none;
  }
  .ant-calendar-header .ant-calendar-prev-century-btn,
  .ant-calendar-header .ant-calendar-next-century-btn,
  .ant-calendar-header .ant-calendar-prev-decade-btn,
  .ant-calendar-header .ant-calendar-next-decade-btn,
  .ant-calendar-header .ant-calendar-prev-month-btn,
  .ant-calendar-header .ant-calendar-next-month-btn,
  .ant-calendar-header .ant-calendar-prev-year-btn,
  .ant-calendar-header .ant-calendar-next-year-btn {
    position: absolute;
    top: 0;
    color: rgba(0, 0, 0, 0.45);
    font-family: Arial, "Hiragino Sans GB", "Microsoft Yahei", "Microsoft Sans Serif", sans-serif;
    padding: 0 5px;
    font-size: 16px;
    display: inline-block;
    line-height: 40px;
  }
  .ant-calendar-header .ant-calendar-prev-century-btn,
  .ant-calendar-header .ant-calendar-prev-decade-btn,
  .ant-calendar-header .ant-calendar-prev-year-btn {
    left: 7px;
  }
  .ant-calendar-header .ant-calendar-prev-century-btn:after,
  .ant-calendar-header .ant-calendar-prev-decade-btn:after,
  .ant-calendar-header .ant-calendar-prev-year-btn:after {
    content: '«';
  }
  .ant-calendar-header .ant-calendar-next-century-btn,
  .ant-calendar-header .ant-calendar-next-decade-btn,
  .ant-calendar-header .ant-calendar-next-year-btn {
    right: 7px;
  }
  .ant-calendar-header .ant-calendar-next-century-btn:after,
  .ant-calendar-header .ant-calendar-next-decade-btn:after,
  .ant-calendar-header .ant-calendar-next-year-btn:after {
    content: '»';
  }
  .ant-calendar-header .ant-calendar-prev-month-btn {
    left: 29px;
  }
  .ant-calendar-header .ant-calendar-prev-month-btn:after {
    content: '‹';
  }
  .ant-calendar-header .ant-calendar-next-month-btn {
    right: 29px;
  }
  .ant-calendar-header .ant-calendar-next-month-btn:after {
    content: '›';
  }
  .ant-calendar-body {
    padding: 8px 12px;
  }
  .ant-calendar table {
    border-collapse: collapse;
    max-width: 100%;
    background-color: transparent;
    width: 100%;
  }
  .ant-calendar table,
  .ant-calendar th,
  .ant-calendar td {
    border: 0;
    text-align: center;
  }
  .ant-calendar-calendar-table {
    border-spacing: 0;
    margin-bottom: 0;
  }
  .ant-calendar-column-header {
    line-height: 18px;
    width: 33px;
    padding: 6px 0;
    text-align: center;
  }
  .ant-calendar-column-header .ant-calendar-column-header-inner {
    display: block;
    font-weight: normal;
  }
  .ant-calendar-week-number-header .ant-calendar-column-header-inner {
    display: none;
  }
  .ant-calendar-cell {
    padding: 3px 0;
    height: 30px;
  }
  .ant-calendar-date {
    display: block;
    margin: 0 auto;
    color: rgba(0, 0, 0, 0.65);
    border-radius: 2px;
    width: 24px;
    height: 24px;
    line-height: 22px;
    border: 1px solid transparent;
    padding: 0;
    background: transparent;
    text-align: center;
    transition: background 0.3s ease;
  }
  .ant-calendar-date-panel {
    position: relative;
  }
  .ant-calendar-date:hover {
    background: #e6f7ff;
    cursor: pointer;
  }
  .ant-calendar-date:active {
    color: var(--colors-white, #fff);
    background: #40a9ff;
  }
  .ant-calendar-today .ant-calendar-date {
    border-color: #1890ff;
    font-weight: bold;
    color: #1890ff;
  }
  .ant-calendar-last-month-cell .ant-calendar-date,
  .ant-calendar-next-month-btn-day .ant-calendar-date {
    color: rgba(0, 0, 0, 0.25);
  }
  .ant-calendar-selected-day .ant-calendar-date {
    background: #d1e9ff;
  }
  .ant-calendar-selected-date .ant-calendar-date,
  .ant-calendar-selected-start-date .ant-calendar-date,
  .ant-calendar-selected-end-date .ant-calendar-date {
    background: #1890ff;
    color: var(--colors-white, #fff);
    border: 1px solid transparent;
  }
  .ant-calendar-selected-date .ant-calendar-date:hover,
  .ant-calendar-selected-start-date .ant-calendar-date:hover,
  .ant-calendar-selected-end-date .ant-calendar-date:hover {
    background: #1890ff;
  }
  .ant-calendar-disabled-cell .ant-calendar-date {
    cursor: not-allowed;
    color: #bcbcbc;
    background: #f5f5f5;
    border-radius: 0;
    width: auto;
    border: 1px solid transparent;
  }
  .ant-calendar-disabled-cell .ant-calendar-date:hover {
    background: #f5f5f5;
  }
  .ant-calendar-disabled-cell.ant-calendar-today .ant-calendar-date {
    position: relative;
    padding-right: 5px;
    padding-left: 5px;
  }
  .ant-calendar-disabled-cell.ant-calendar-today .ant-calendar-date:before {
    content: " ";
    position: absolute;
    top: -1px;
    left: 5px;
    width: 24px;
    height: 24px;
    border: 1px solid #bcbcbc;
    border-radius: 2px;
  }
  .ant-calendar-disabled-cell-first-of-row .ant-calendar-date {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .ant-calendar-disabled-cell-last-of-row .ant-calendar-date {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .ant-calendar-footer {
    border-top: 1px solid var(--colors-border, #e8e8e8);
    line-height: 38px;
    padding: 0 12px;
  }
  .ant-calendar-footer:empty {
    border-top: 0;
  }
  .ant-calendar-footer-btn {
    text-align: center;
    display: block;
  }
  .ant-calendar-footer-extra {
    text-align: left;
  }
  .ant-calendar .ant-calendar-today-btn,
  .ant-calendar .ant-calendar-clear-btn {
    display: inline-block;
    text-align: center;
    margin: 0 0 0 8px;
  }
  .ant-calendar .ant-calendar-today-btn-disabled,
  .ant-calendar .ant-calendar-clear-btn-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .ant-calendar .ant-calendar-today-btn:only-child,
  .ant-calendar .ant-calendar-clear-btn:only-child {
    margin: 0;
  }
  .ant-calendar .ant-calendar-clear-btn {
    display: none;
    position: absolute;
    right: 5px;
    text-indent: -76px;
    overflow: hidden;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    top: 7px;
    margin: 0;
  }
  .ant-calendar .ant-calendar-clear-btn:after {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.25);
    display: inline-block;
    line-height: 1;
    width: 20px;
    text-indent: 43px;
    transition: color 0.3s ease;
  }
  .ant-calendar .ant-calendar-clear-btn:hover:after {
    color: rgba(0, 0, 0, 0.45);
  }
  .ant-calendar .ant-calendar-ok-btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 0 15px;
    height: 32px;
    user-select: none;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    color: var(--colors-white, #fff);
    background-color: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    padding: 0 7px;
    font-size: 14px;
    border-radius: 6px;
    height: 24px;
    line-height: 22px;
  }
  .ant-calendar .ant-calendar-ok-btn > .anticon {
    line-height: 1;
  }
  .ant-calendar .ant-calendar-ok-btn,
  .ant-calendar .ant-calendar-ok-btn:active,
  .ant-calendar .ant-calendar-ok-btn:focus {
    outline: 0;
  }
  .ant-calendar .ant-calendar-ok-btn:not([disabled]):hover {
    text-decoration: none;
  }
  .ant-calendar .ant-calendar-ok-btn:not([disabled]):active {
    outline: 0;
    box-shadow: none;
  }
  .ant-calendar .ant-calendar-ok-btn.disabled,
  .ant-calendar .ant-calendar-ok-btn[disabled] {
    cursor: not-allowed;
  }
  .ant-calendar .ant-calendar-ok-btn.disabled > *,
  .ant-calendar .ant-calendar-ok-btn[disabled] > * {
    pointer-events: none;
  }
  .ant-calendar .ant-calendar-ok-btn-lg {
    padding: 0 15px;
    font-size: 16px;
    border-radius: 6px;
    height: 40px;
  }
  .ant-calendar .ant-calendar-ok-btn-sm {
    padding: 0 7px;
    font-size: 14px;
    border-radius: 6px;
    height: 24px;
  }
  .ant-calendar .ant-calendar-ok-btn > a:only-child {
    color: currentColor;
  }
  .ant-calendar .ant-calendar-ok-btn > a:only-child:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: transparent;
  }
  .ant-calendar .ant-calendar-ok-btn:hover,
  .ant-calendar .ant-calendar-ok-btn:focus {
    color: var(--colors-white, #fff);
    background-color: #40a9ff;
    border-color: #40a9ff;
  }
  .ant-calendar .ant-calendar-ok-btn:hover > a:only-child,
  .ant-calendar .ant-calendar-ok-btn:focus > a:only-child {
    color: currentColor;
  }
  .ant-calendar .ant-calendar-ok-btn:hover > a:only-child:after,
  .ant-calendar .ant-calendar-ok-btn:focus > a:only-child:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: transparent;
  }
  .ant-calendar .ant-calendar-ok-btn:active,
  .ant-calendar .ant-calendar-ok-btn.active {
    color: var(--colors-white, #fff);
    background-color: #096dd9;
    border-color: #096dd9;
  }
  .ant-calendar .ant-calendar-ok-btn:active > a:only-child,
  .ant-calendar .ant-calendar-ok-btn.active > a:only-child {
    color: currentColor;
  }
  .ant-calendar .ant-calendar-ok-btn:active > a:only-child:after,
  .ant-calendar .ant-calendar-ok-btn.active > a:only-child:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: transparent;
  }
  .ant-calendar .ant-calendar-ok-btn.disabled,
  .ant-calendar .ant-calendar-ok-btn[disabled],
  .ant-calendar .ant-calendar-ok-btn.disabled:hover,
  .ant-calendar .ant-calendar-ok-btn[disabled]:hover,
  .ant-calendar .ant-calendar-ok-btn.disabled:focus,
  .ant-calendar .ant-calendar-ok-btn[disabled]:focus,
  .ant-calendar .ant-calendar-ok-btn.disabled:active,
  .ant-calendar .ant-calendar-ok-btn[disabled]:active,
  .ant-calendar .ant-calendar-ok-btn.disabled.active,
  .ant-calendar .ant-calendar-ok-btn[disabled].active {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    text-shadow: none;
    box-shadow: none;
  }
  .ant-calendar .ant-calendar-ok-btn.disabled > a:only-child,
  .ant-calendar .ant-calendar-ok-btn[disabled] > a:only-child,
  .ant-calendar .ant-calendar-ok-btn.disabled:hover > a:only-child,
  .ant-calendar .ant-calendar-ok-btn[disabled]:hover > a:only-child,
  .ant-calendar .ant-calendar-ok-btn.disabled:focus > a:only-child,
  .ant-calendar .ant-calendar-ok-btn[disabled]:focus > a:only-child,
  .ant-calendar .ant-calendar-ok-btn.disabled:active > a:only-child,
  .ant-calendar .ant-calendar-ok-btn[disabled]:active > a:only-child,
  .ant-calendar .ant-calendar-ok-btn.disabled.active > a:only-child,
  .ant-calendar .ant-calendar-ok-btn[disabled].active > a:only-child {
    color: currentColor;
  }
  .ant-calendar .ant-calendar-ok-btn.disabled > a:only-child:after,
  .ant-calendar .ant-calendar-ok-btn[disabled] > a:only-child:after,
  .ant-calendar .ant-calendar-ok-btn.disabled:hover > a:only-child:after,
  .ant-calendar .ant-calendar-ok-btn[disabled]:hover > a:only-child:after,
  .ant-calendar .ant-calendar-ok-btn.disabled:focus > a:only-child:after,
  .ant-calendar .ant-calendar-ok-btn[disabled]:focus > a:only-child:after,
  .ant-calendar .ant-calendar-ok-btn.disabled:active > a:only-child:after,
  .ant-calendar .ant-calendar-ok-btn[disabled]:active > a:only-child:after,
  .ant-calendar .ant-calendar-ok-btn.disabled.active > a:only-child:after,
  .ant-calendar .ant-calendar-ok-btn[disabled].active > a:only-child:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: transparent;
  }
  .ant-calendar .ant-calendar-ok-btn-disabled {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
    cursor: not-allowed;
  }
  .ant-calendar .ant-calendar-ok-btn-disabled > a:only-child {
    color: currentColor;
  }
  .ant-calendar .ant-calendar-ok-btn-disabled > a:only-child:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: transparent;
  }
  .ant-calendar .ant-calendar-ok-btn-disabled:hover {
    color: rgba(0, 0, 0, 0.25);
    background-color: #f5f5f5;
    border-color: #d9d9d9;
  }
  .ant-calendar .ant-calendar-ok-btn-disabled:hover > a:only-child {
    color: currentColor;
  }
  .ant-calendar .ant-calendar-ok-btn-disabled:hover > a:only-child:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: transparent;
  }
  .ant-calendar-range-picker-input {
    background-color: transparent;
    border: 0;
    height: 99%;
    outline: 0;
    width: 44%;
    text-align: center;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-variant: tabular-nums;
    box-sizing: border-box;
    margin: 0;
    list-style: none;
    position: relative;
    display: inline-block;
    font-size: 14px;
    color: rgba(0,0,0,0.65);
    transition: all 0.3s;
  }
  .ant-calendar-range-picker-input::-moz-placeholder {
    color: #bfbfbf;
    opacity: 1;
  }
  .ant-calendar-range-picker-input:-ms-input-placeholder {
    color: #bfbfbf;
  }
  .ant-calendar-range-picker-input::-webkit-input-placeholder {
    color: #bfbfbf;
  }
  .ant-calendar-range-picker-input[disabled] {
    cursor: not-allowed;
  }
  .ant-calendar-range-picker-separator {
    color: rgba(0, 0, 0, 0.45);
    width: 10px;
    display: inline-block;
    height: 100%;
    vertical-align: top;
  }
  .ant-calendar-range {
    width: 552px;
    overflow: hidden;
  }
  .ant-calendar-range .ant-calendar-date-panel::after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .ant-calendar-range-part {
    width: 50%;
    position: relative;
  }
  .ant-calendar-range-left {
    float: left;
  }
  .ant-calendar-range-left .ant-calendar-time-picker-inner {
    border-right: 1px solid var(--colors-border, #e8e8e8);
  }
  .ant-calendar-range-right {
    float: right;
  }
  .ant-calendar-range-right .ant-calendar-time-picker-inner {
    border-left: 1px solid var(--colors-border, #e8e8e8);
  }
  .ant-calendar-range-middle {
    position: absolute;
    left: 50%;
    width: 20px;
    margin-left: -132px;
    text-align: center;
    height: 34px;
    line-height: 34px;
    color: rgba(0, 0, 0, 0.45);
  }
  .ant-calendar-range-right .ant-calendar-date-input-wrap {
    margin-left: -118px;
  }
  .ant-calendar-range.ant-calendar-time .ant-calendar-range-middle {
    margin-left: -12px;
  }
  .ant-calendar-range.ant-calendar-time .ant-calendar-range-right .ant-calendar-date-input-wrap {
    margin-left: 0;
  }
  .ant-calendar-range .ant-calendar-input-wrap {
    position: relative;
    height: 24px;
  }
  .ant-calendar-range .ant-calendar-input,
  .ant-calendar-range .ant-calendar-time-picker-input {
    position: relative;
    display: inline-block;
    padding: 4px 11px;
    width: 100%;
    height: 32px;
    font-size: 14px;
    line-height: 1.71428571;
    color: rgba(0, 0, 0, 0.65);
    background-color: var(--colors-white, #fff);
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    transition: all 0.3s;
    height: 24px;
    border: 0;
    box-shadow: none;
    padding-left: 0;
    padding-right: 0;
  }
  .ant-calendar-range .ant-calendar-input::-moz-placeholder,
  .ant-calendar-range .ant-calendar-time-picker-input::-moz-placeholder {
    color: #bfbfbf;
    opacity: 1;
  }
  .ant-calendar-range .ant-calendar-input:-ms-input-placeholder,
  .ant-calendar-range .ant-calendar-time-picker-input:-ms-input-placeholder {
    color: #bfbfbf;
  }
  .ant-calendar-range .ant-calendar-input::-webkit-input-placeholder,
  .ant-calendar-range .ant-calendar-time-picker-input::-webkit-input-placeholder {
    color: #bfbfbf;
  }
  .ant-calendar-range .ant-calendar-input:hover,
  .ant-calendar-range .ant-calendar-time-picker-input:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }
  .ant-calendar-range .ant-calendar-input:focus,
  .ant-calendar-range .ant-calendar-time-picker-input:focus {
    border-color: #40a9ff;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
  }
  .ant-calendar-range .ant-calendar-input-disabled,
  .ant-calendar-range .ant-calendar-time-picker-input-disabled {
    background-color: #f5f5f5;
    opacity: 1;
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
  }
  .ant-calendar-range .ant-calendar-input-disabled:hover,
  .ant-calendar-range .ant-calendar-time-picker-input-disabled:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }
  textarea.ant-calendar-range .ant-calendar-input,
  textarea.ant-calendar-range .ant-calendar-time-picker-input {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
    min-height: 32px;
  }
  .ant-calendar-range .ant-calendar-input-lg,
  .ant-calendar-range .ant-calendar-time-picker-input-lg {
    padding: 6px 11px;
    height: 40px;
    font-size: 16px;
  }
  .ant-calendar-range .ant-calendar-input-sm,
  .ant-calendar-range .ant-calendar-time-picker-input-sm {
    padding: 1px 7px;
    height: 24px;
  }
  .ant-calendar-range .ant-calendar-input:focus,
  .ant-calendar-range .ant-calendar-time-picker-input:focus {
    box-shadow: none;
  }
  .ant-calendar-range .ant-calendar-time-picker-icon {
    display: none;
  }
  .ant-calendar-range.ant-calendar-week-number {
    width: 574px;
  }
  .ant-calendar-range.ant-calendar-week-number .ant-calendar-range-part {
    width: 286px;
  }
  .ant-calendar-range .ant-calendar-year-panel,
  .ant-calendar-range .ant-calendar-month-panel,
  .ant-calendar-range .ant-calendar-decade-panel {
    top: 34px;
  }
  .ant-calendar-range .ant-calendar-month-panel .ant-calendar-year-panel {
    top: 0;
  }
  .ant-calendar-range .ant-calendar-decade-panel-table,
  .ant-calendar-range .ant-calendar-year-panel-table,
  .ant-calendar-range .ant-calendar-month-panel-table {
    height: 208px;
  }
  .ant-calendar-range .ant-calendar-in-range-cell {
    border-radius: 0;
    position: relative;
  }
  .ant-calendar-range .ant-calendar-in-range-cell > div {
    position: relative;
    z-index: 1;
  }
  .ant-calendar-range .ant-calendar-in-range-cell:before {
    content: "";
    display: block;
    background: #e6f7ff;
    border-radius: 0;
    border: 0;
    position: absolute;
    top: 4px;
    bottom: 4px;
    left: 0;
    right: 0;
  }
  .ant-calendar-range .ant-calendar-footer-extra {
    float: left;
  }
  div.ant-calendar-range-quick-selector {
    text-align: left;
  }
  div.ant-calendar-range-quick-selector > a {
    margin-right: 8px;
  }
  .ant-calendar-range .ant-calendar-header,
  .ant-calendar-range .ant-calendar-month-panel-header,
  .ant-calendar-range .ant-calendar-year-panel-header {
    border-bottom: 0;
  }
  .ant-calendar-range .ant-calendar-body,
  .ant-calendar-range .ant-calendar-month-panel-body,
  .ant-calendar-range .ant-calendar-year-panel-body {
    border-top: 1px solid var(--colors-border, #e8e8e8);
  }
  .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker {
    height: 207px;
    width: 100%;
    top: 68px;
    z-index: 2;
  }
  .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-panel {
    height: 267px;
    margin-top: -34px;
  }
  .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-inner {
    padding-top: 40px;
    height: 100%;
    background: none;
  }
  .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-combobox {
    display: inline-block;
    height: 100%;
    background-color: var(--colors-white, #fff);
    border-top: 1px solid var(--colors-border, #e8e8e8);
  }
  .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-select {
    height: 100%;
  }
  .ant-calendar-range.ant-calendar-time .ant-calendar-time-picker-select ul {
    max-height: 100%;
  }
  .ant-calendar-range.ant-calendar-time .ant-calendar-footer .ant-calendar-time-picker-btn {
    margin-right: 8px;
  }
  .ant-calendar-range.ant-calendar-time .ant-calendar-today-btn {
    margin: 8px 12px;
    height: 22px;
    line-height: 22px;
  }
  .ant-calendar-range-with-ranges.ant-calendar-time .ant-calendar-time-picker {
    height: 233px;
  }
  .ant-calendar-range.ant-calendar-show-time-picker .ant-calendar-body {
    border-top-color: transparent;
  }
  .ant-calendar-time-picker {
    position: absolute;
    width: 100%;
    top: 40px;
    background-color: var(--colors-white, #fff);
  }
  .ant-calendar-time-picker-panel {
    z-index: 1050;
    position: absolute;
    width: 100%;
  }
  .ant-calendar-time-picker-inner {
    display: inline-block;
    position: relative;
    outline: none;
    list-style: none;
    font-size: 14px;
    text-align: left;
    background-color: var(--colors-white, #fff);
    background-clip: padding-box;
    line-height: 1.5;
    overflow: hidden;
    width: 100%;
  }
  .ant-calendar-time-picker-combobox {
    width: 100%;
  }
  .ant-calendar-time-picker-column-1,
  .ant-calendar-time-picker-column-1 .ant-calendar-time-picker-select {
    width: 100%;
  }
  .ant-calendar-time-picker-column-2 .ant-calendar-time-picker-select {
    width: 50%;
  }
  .ant-calendar-time-picker-column-3 .ant-calendar-time-picker-select {
    width: 33.33%;
  }
  .ant-calendar-time-picker-column-4 .ant-calendar-time-picker-select {
    width: 25%;
  }
  .ant-calendar-time-picker-input-wrap {
    display: none;
  }
  .ant-calendar-time-picker-select {
    float: left;
    font-size: 14px;
    border-right: 1px solid var(--colors-border, #e8e8e8);
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    height: 226px;
  }
  .ant-calendar-time-picker-select:hover {
    overflow-y: auto;
  }
  .ant-calendar-time-picker-select:first-child {
    border-left: 0;
    margin-left: 0;
  }
  .ant-calendar-time-picker-select:last-child {
    border-right: 0;
  }
  .ant-calendar-time-picker-select ul {
    list-style: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    max-height: 206px;
  }
  .ant-calendar-time-picker-select li {
    padding-left: 32px;
    list-style: none;
    box-sizing: content-box;
    margin: 0;
    width: 100%;
    height: 24px;
    line-height: 24px;
    cursor: pointer;
    user-select: none;
    transition: background 0.3s ease;
  }
  .ant-calendar-time-picker-select li:last-child:after {
    content: "";
    height: 202px;
    display: block;
  }
  .ant-calendar-time-picker-select li:hover {
    background: #e6f7ff;
  }
  li.ant-calendar-time-picker-select-option-selected {
    background: #f5f5f5;
    font-weight: bold;
  }
  li.ant-calendar-time-picker-select-option-disabled {
    color: rgba(0, 0, 0, 0.25);
  }
  li.ant-calendar-time-picker-select-option-disabled:hover {
    background: transparent;
    cursor: not-allowed;
  }
  .ant-calendar-time .ant-calendar-day-select {
    padding: 0 2px;
    font-weight: 500;
    display: inline-block;
    color: rgba(0, 0, 0, 0.85);
    line-height: 34px;
  }
  .ant-calendar-time .ant-calendar-footer {
    position: relative;
    height: auto;
  }
  .ant-calendar-time .ant-calendar-footer-btn {
    text-align: right;
  }
  .ant-calendar-time .ant-calendar-footer .ant-calendar-today-btn {
    float: left;
    margin: 0;
  }
  .ant-calendar-time .ant-calendar-footer .ant-calendar-time-picker-btn {
    display: inline-block;
    margin-right: 8px;
  }
  .ant-calendar-time .ant-calendar-footer .ant-calendar-time-picker-btn-disabled {
    color: rgba(0, 0, 0, 0.25);
  }
  .ant-calendar-month-panel {
    position: absolute;
    top: 1px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    border-radius: 6px;
    background: var(--colors-white, #fff);
    outline: none;
  }
  .ant-calendar-month-panel > div {
    height: 100%;
  }
  .ant-calendar-month-panel-hidden {
    display: none;
  }
  .ant-calendar-month-panel-header {
    height: 40px;
    line-height: 40px;
    text-align: center;
    user-select: none;
    border-bottom: 1px solid var(--colors-border, #e8e8e8);
  }
  .ant-calendar-month-panel-header a:hover {
    color: #40a9ff;
  }
  .ant-calendar-month-panel-header .ant-calendar-month-panel-century-select,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-decade-select,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-year-select,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-month-select {
    padding: 0 2px;
    font-weight: 500;
    display: inline-block;
    color: rgba(0, 0, 0, 0.85);
    line-height: 40px;
  }
  .ant-calendar-month-panel-header .ant-calendar-month-panel-century-select-arrow,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-decade-select-arrow,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-year-select-arrow,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-month-select-arrow {
    display: none;
  }
  .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-century-btn,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-decade-btn,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-month-btn,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-next-month-btn,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-year-btn,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn {
    position: absolute;
    top: 0;
    color: rgba(0, 0, 0, 0.45);
    font-family: Arial, "Hiragino Sans GB", "Microsoft Yahei", "Microsoft Sans Serif", sans-serif;
    padding: 0 5px;
    font-size: 16px;
    display: inline-block;
    line-height: 40px;
  }
  .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-century-btn,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-decade-btn,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-year-btn {
    left: 7px;
  }
  .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-century-btn:after,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-decade-btn:after,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-year-btn:after {
    content: '«';
  }
  .ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn {
    right: 7px;
  }
  .ant-calendar-month-panel-header .ant-calendar-month-panel-next-century-btn:after,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-next-decade-btn:after,
  .ant-calendar-month-panel-header .ant-calendar-month-panel-next-year-btn:after {
    content: '»';
  }
  .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-month-btn {
    left: 29px;
  }
  .ant-calendar-month-panel-header .ant-calendar-month-panel-prev-month-btn:after {
    content: '‹';
  }
  .ant-calendar-month-panel-header .ant-calendar-month-panel-next-month-btn {
    right: 29px;
  }
  .ant-calendar-month-panel-header .ant-calendar-month-panel-next-month-btn:after {
    content: '›';
  }
  .ant-calendar-month-panel-body {
    height: calc(100% - 40px);
  }
  .ant-calendar-month-panel-table {
    table-layout: fixed;
    width: 100%;
    height: 100%;
    border-collapse: separate;
  }
  .ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month {
    background: #1890ff;
    color: var(--colors-white, #fff);
  }
  .ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month:hover {
    background: #1890ff;
    color: var(--colors-white, #fff);
  }
  .ant-calendar-month-panel-cell {
    text-align: center;
  }
  .ant-calendar-month-panel-cell-disabled .ant-calendar-month-panel-month,
  .ant-calendar-month-panel-cell-disabled .ant-calendar-month-panel-month:hover {
    cursor: not-allowed;
    color: #bcbcbc;
    background: #f5f5f5;
  }
  .ant-calendar-month-panel-month {
    display: inline-block;
    margin: 0 auto;
    color: rgba(0, 0, 0, 0.65);
    background: transparent;
    text-align: center;
    height: 24px;
    line-height: 24px;
    padding: 0 8px;
    border-radius: 2px;
    transition: background 0.3s ease;
  }
  .ant-calendar-month-panel-month:hover {
    background: #e6f7ff;
    cursor: pointer;
  }
  .ant-calendar-year-panel {
    position: absolute;
    top: 1px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    border-radius: 6px;
    background: var(--colors-white, #fff);
    outline: none;
  }
  .ant-calendar-year-panel > div {
    height: 100%;
  }
  .ant-calendar-year-panel-hidden {
    display: none;
  }
  .ant-calendar-year-panel-header {
    height: 40px;
    line-height: 40px;
    text-align: center;
    user-select: none;
    border-bottom: 1px solid var(--colors-border, #e8e8e8);
  }
  .ant-calendar-year-panel-header a:hover {
    color: #40a9ff;
  }
  .ant-calendar-year-panel-header .ant-calendar-year-panel-century-select,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-decade-select,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-year-select,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-month-select {
    padding: 0 2px;
    font-weight: 500;
    display: inline-block;
    color: rgba(0, 0, 0, 0.85);
    line-height: 40px;
  }
  .ant-calendar-year-panel-header .ant-calendar-year-panel-century-select-arrow,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-decade-select-arrow,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-year-select-arrow,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-month-select-arrow {
    display: none;
  }
  .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-century-btn,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-decade-btn,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-month-btn,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-next-month-btn,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-year-btn,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn {
    position: absolute;
    top: 0;
    color: rgba(0, 0, 0, 0.45);
    font-family: Arial, "Hiragino Sans GB", "Microsoft Yahei", "Microsoft Sans Serif", sans-serif;
    padding: 0 5px;
    font-size: 16px;
    display: inline-block;
    line-height: 40px;
  }
  .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-century-btn,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-decade-btn,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-year-btn {
    left: 7px;
  }
  .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-century-btn:after,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-decade-btn:after,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-year-btn:after {
    content: '«';
  }
  .ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn {
    right: 7px;
  }
  .ant-calendar-year-panel-header .ant-calendar-year-panel-next-century-btn:after,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-next-decade-btn:after,
  .ant-calendar-year-panel-header .ant-calendar-year-panel-next-year-btn:after {
    content: '»';
  }
  .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-month-btn {
    left: 29px;
  }
  .ant-calendar-year-panel-header .ant-calendar-year-panel-prev-month-btn:after {
    content: '‹';
  }
  .ant-calendar-year-panel-header .ant-calendar-year-panel-next-month-btn {
    right: 29px;
  }
  .ant-calendar-year-panel-header .ant-calendar-year-panel-next-month-btn:after {
    content: '›';
  }
  .ant-calendar-year-panel-body {
    height: calc(100% - 40px);
  }
  .ant-calendar-year-panel-table {
    table-layout: fixed;
    width: 100%;
    height: 100%;
    border-collapse: separate;
  }
  .ant-calendar-year-panel-cell {
    text-align: center;
  }
  .ant-calendar-year-panel-year {
    display: inline-block;
    margin: 0 auto;
    color: rgba(0, 0, 0, 0.65);
    background: transparent;
    text-align: center;
    height: 24px;
    line-height: 24px;
    padding: 0 8px;
    border-radius: 2px;
    transition: background 0.3s ease;
  }
  .ant-calendar-year-panel-year:hover {
    background: #e6f7ff;
    cursor: pointer;
  }
  .ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year {
    background: #1890ff;
    color: var(--colors-white, #fff);
  }
  .ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year:hover {
    background: #1890ff;
    color: var(--colors-white, #fff);
  }
  .ant-calendar-year-panel-last-decade-cell .ant-calendar-year-panel-year,
  .ant-calendar-year-panel-next-decade-cell .ant-calendar-year-panel-year {
    user-select: none;
    color: rgba(0, 0, 0, 0.25);
  }
  .ant-calendar-decade-panel {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: var(--colors-white, #fff);
    border-radius: 6px;
    outline: none;
  }
  .ant-calendar-decade-panel-hidden {
    display: none;
  }
  .ant-calendar-decade-panel-header {
    height: 40px;
    line-height: 40px;
    text-align: center;
    user-select: none;
    border-bottom: 1px solid var(--colors-border, #e8e8e8);
  }
  .ant-calendar-decade-panel-header a:hover {
    color: #40a9ff;
  }
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-century-select,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-decade-select,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-year-select,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-month-select {
    padding: 0 2px;
    font-weight: 500;
    display: inline-block;
    color: rgba(0, 0, 0, 0.85);
    line-height: 40px;
  }
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-century-select-arrow,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-decade-select-arrow,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-year-select-arrow,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-month-select-arrow {
    display: none;
  }
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-century-btn,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-century-btn,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-decade-btn,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-decade-btn,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-month-btn,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-month-btn,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-year-btn,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn {
    position: absolute;
    top: 0;
    color: rgba(0, 0, 0, 0.45);
    font-family: Arial, "Hiragino Sans GB", "Microsoft Yahei", "Microsoft Sans Serif", sans-serif;
    padding: 0 5px;
    font-size: 16px;
    display: inline-block;
    line-height: 40px;
  }
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-century-btn,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-decade-btn,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-year-btn {
    left: 7px;
  }
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-century-btn:after,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-decade-btn:after,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-year-btn:after {
    content: '«';
  }
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-century-btn,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-decade-btn,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn {
    right: 7px;
  }
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-century-btn:after,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-decade-btn:after,
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-year-btn:after {
    content: '»';
  }
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-month-btn {
    left: 29px;
  }
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-prev-month-btn:after {
    content: '‹';
  }
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-month-btn {
    right: 29px;
  }
  .ant-calendar-decade-panel-header .ant-calendar-decade-panel-next-month-btn:after {
    content: '›';
  }
  .ant-calendar-decade-panel-body {
    height: calc(100% - 40px);
  }
  .ant-calendar-decade-panel-table {
    table-layout: fixed;
    width: 100%;
    height: 100%;
    border-collapse: separate;
  }
  .ant-calendar-decade-panel-cell {
    text-align: center;
    white-space: nowrap;
  }
  .ant-calendar-decade-panel-decade {
    display: inline-block;
    margin: 0 auto;
    color: rgba(0, 0, 0, 0.65);
    background: transparent;
    text-align: center;
    height: 24px;
    line-height: 24px;
    padding: 0 6px;
    border-radius: 2px;
    transition: background 0.3s ease;
  }
  .ant-calendar-decade-panel-decade:hover {
    background: #e6f7ff;
    cursor: pointer;
  }
  .ant-calendar-decade-panel-selected-cell .ant-calendar-decade-panel-decade {
    background: #1890ff;
    color: var(--colors-white, #fff);
  }
  .ant-calendar-decade-panel-selected-cell .ant-calendar-decade-panel-decade:hover {
    background: #1890ff;
    color: var(--colors-white, #fff);
  }
  .ant-calendar-decade-panel-last-century-cell .ant-calendar-decade-panel-decade,
  .ant-calendar-decade-panel-next-century-cell .ant-calendar-decade-panel-decade {
    user-select: none;
    color: rgba(0, 0, 0, 0.25);
  }
  .ant-calendar-month .ant-calendar-month-header-wrap {
    position: relative;
    height: 288px;
  }
  .ant-calendar-month .ant-calendar-month-panel,
  .ant-calendar-month .ant-calendar-year-panel {
    top: 0;
    height: 100%;
  }
  .ant-calendar-week-number-cell {
    opacity: 0.5;
  }
  .ant-calendar-week-number .ant-calendar-body tr {
    transition: all 0.3s;
    cursor: pointer;
  }
  .ant-calendar-week-number .ant-calendar-body tr:hover {
    background: #e6f7ff;
  }
  .ant-calendar-week-number .ant-calendar-body tr.ant-calendar-active-week {
    background: #bae7ff;
    font-weight: bold;
  }
  .ant-calendar-week-number .ant-calendar-body tr .ant-calendar-selected-day .ant-calendar-date,
  .ant-calendar-week-number .ant-calendar-body tr .ant-calendar-selected-day:hover .ant-calendar-date {
    background: transparent;
    color: rgba(0, 0, 0, 0.65);
  }
  form .has-feedback .ant-calendar-picker-icon,
  form .has-feedback .ant-calendar-picker-clear {
    right: 28px;
  }
  .has-warning .ant-calendar-picker-open .ant-calendar-picker-input {
    border-color: #ffd666;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255, 197, 61, 0.2);
    border-right-width: 1px !important;
  }
  .has-warning .ant-calendar-picker-icon:after {
    color: #ffc53d;
  }
  .has-error .ant-calendar-picker-open .ant-calendar-picker-input {
    border-color: #ff7875;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
    border-right-width: 1px !important;
  }
  .has-error .ant-calendar-picker-icon:after {
    color: #ff4d4f;
  }
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker .ant-input {
    border-radius: 0;
    border-right-width: 1px;
    border-right-color: transparent;
  }
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker .ant-input:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker .ant-input:focus {
    border-color: #40a9ff;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker:first-child .ant-input {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-right-width: 1px;
    border-right-color: #d9d9d9;
  }
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input:focus {
    border-color: #40a9ff;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input:focus .ant-cascader-input {
    border-color: #40a9ff;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
  }
  .ant-calendar-range-picker-separator {
    vertical-align: baseline;
  }
  .ant-calendar-picker:hover .ant-calendar-picker-clear {
    opacity: 1;
    pointer-events: auto;
  }
  .ant-calendar-picker-clear {
    margin-right: 15px;
    opacity: 0;
    z-index: 0;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.25);
    background: var(--colors-white, #fff);
    pointer-events: none;
    cursor: pointer;
  }
  .ant-calendar-picker-icon {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.25);
    display: inline-block;
    line-height: 1;
  }
  .ant-calendar-picker-clear,
  .ant-calendar-picker-icon {
    position: absolute;
    width: 14px;
    height: 14px;
    right: 12px;
    top: 50%;
    margin-top: -7px;
    line-height: 14px;
    font-size: 12px;
    transition: all 0.3s;
    user-select: none;
    z-index: 0;
  }
`;

export const globalStylesFullCalendar = () => injectGlobal`
  .ant-fullcalendar {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.71428571;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: none;
    border-top: 1px solid #d9d9d9;
  }
  .ant-fullcalendar-month-select {
    margin-left: 5px;
  }
  .ant-fullcalendar-header {
    padding: 11px 16px 11px 0;
    text-align: right;
  }
  .ant-fullcalendar-header .ant-select-dropdown {
    text-align: left;
  }
  .ant-fullcalendar-header .ant-radio-group {
    margin-left: 8px;
    text-align: left;
  }
  .ant-fullcalendar-header label.ant-radio-button {
    height: 22px;
    line-height: 20px;
    padding: 0 10px;
  }
  .ant-fullcalendar-date-panel {
    position: relative;
    outline: none;
  }
  .ant-fullcalendar-calendar-body {
    padding: 8px 12px;
  }
  .ant-fullcalendar table {
    border-collapse: collapse;
    max-width: 100%;
    background-color: transparent;
    width: 100%;
    height: 256px;
  }
  .ant-fullcalendar table,
  .ant-fullcalendar th,
  .ant-fullcalendar td {
    border: 0;
  }
  .ant-fullcalendar td {
    position: relative;
  }
  .ant-fullcalendar-calendar-table {
    border-spacing: 0;
    margin-bottom: 0;
  }
  .ant-fullcalendar-column-header {
    line-height: 18px;
    padding: 0;
    width: 33px;
    text-align: center;
  }
  .ant-fullcalendar-column-header .ant-fullcalendar-column-header-inner {
    display: block;
    font-weight: normal;
  }
  .ant-fullcalendar-week-number-header .ant-fullcalendar-column-header-inner {
    display: none;
  }
  .ant-fullcalendar-month,
  .ant-fullcalendar-date {
    text-align: center;
    transition: all 0.3s;
  }
  .ant-fullcalendar-value {
    display: block;
    margin: 0 auto;
    color: rgba(0, 0, 0, 0.65);
    border-radius: 2px;
    width: 24px;
    height: 24px;
    padding: 0;
    background: transparent;
    line-height: 24px;
    transition: all 0.3s;
  }
  .ant-fullcalendar-value:hover {
    background: #e6f7ff;
    cursor: pointer;
  }
  .ant-fullcalendar-value:active {
    background: #1890ff;
    color: var(--colors-white, #fff);
  }
  .ant-fullcalendar-month-panel-cell .ant-fullcalendar-value {
    width: 48px;
  }
  .ant-fullcalendar-today .ant-fullcalendar-value,
  .ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-value {
    box-shadow: 0 0 0 1px #1890ff inset;
  }
  .ant-fullcalendar-selected-day .ant-fullcalendar-value,
  .ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-value {
    background: #1890ff;
    color: var(--colors-white, #fff);
  }
  .ant-fullcalendar-disabled-cell-first-of-row .ant-fullcalendar-value {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .ant-fullcalendar-disabled-cell-last-of-row .ant-fullcalendar-value {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .ant-fullcalendar-last-month-cell .ant-fullcalendar-value,
  .ant-fullcalendar-next-month-btn-day .ant-fullcalendar-value {
    color: rgba(0, 0, 0, 0.25);
  }
  .ant-fullcalendar-month-panel-table {
    table-layout: fixed;
    width: 100%;
    border-collapse: separate;
  }
  .ant-fullcalendar-content {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -9px;
  }
  .ant-fullcalendar-fullscreen {
    border-top: 0;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-table {
    table-layout: fixed;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-header .ant-radio-group {
    margin-left: 16px;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-header label.ant-radio-button {
    height: 32px;
    line-height: 30px;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-month,
  .ant-fullcalendar-fullscreen .ant-fullcalendar-date {
    text-align: left;
    margin: 0 4px;
    display: block;
    color: rgba(0, 0, 0, 0.65);
    height: 116px;
    padding: 4px 8px;
    border-top: 2px solid var(--colors-border, #e8e8e8);
    transition: background 0.3s;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-month:hover,
  .ant-fullcalendar-fullscreen .ant-fullcalendar-date:hover {
    background: #e6f7ff;
    cursor: pointer;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-month:active,
  .ant-fullcalendar-fullscreen .ant-fullcalendar-date:active {
    background: #bae7ff;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-column-header {
    text-align: right;
    padding-right: 12px;
    padding-bottom: 5px;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-value {
    text-align: right;
    background: transparent;
    width: auto;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-today .ant-fullcalendar-value {
    color: rgba(0, 0, 0, 0.65);
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-month,
  .ant-fullcalendar-fullscreen .ant-fullcalendar-today .ant-fullcalendar-date {
    border-top-color: #1890ff;
    background: transparent;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-value,
  .ant-fullcalendar-fullscreen .ant-fullcalendar-today .ant-fullcalendar-value {
    box-shadow: none;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-month,
  .ant-fullcalendar-fullscreen .ant-fullcalendar-selected-day .ant-fullcalendar-date {
    background: #e6f7ff;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-month-panel-selected-cell .ant-fullcalendar-value,
  .ant-fullcalendar-fullscreen .ant-fullcalendar-selected-day .ant-fullcalendar-value {
    color: #1890ff;
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-last-month-cell .ant-fullcalendar-date,
  .ant-fullcalendar-fullscreen .ant-fullcalendar-next-month-btn-day .ant-fullcalendar-date {
    color: rgba(0, 0, 0, 0.25);
  }
  .ant-fullcalendar-fullscreen .ant-fullcalendar-content {
    height: 88px;
    overflow-y: auto;
    position: static;
    width: auto;
    left: auto;
    bottom: auto;
  }
  .ant-fullcalendar-disabled-cell .ant-fullcalendar-date,
  .ant-fullcalendar-disabled-cell .ant-fullcalendar-date:hover {
    cursor: not-allowed;
  }
  .ant-fullcalendar-disabled-cell:not(.ant-fullcalendar-today) .ant-fullcalendar-date,
  .ant-fullcalendar-disabled-cell:not(.ant-fullcalendar-today) .ant-fullcalendar-date:hover {
    background: transparent;
  }
  .ant-fullcalendar-disabled-cell .ant-fullcalendar-value {
    color: rgba(0, 0, 0, 0.25);
    border-radius: 0;
    width: auto;
    cursor: not-allowed;
  }
  .ant-fullcalendar-header {
    padding: 11px 16px 11px 0;
    text-align: right;
  }
  .ant-fullcalendar-header .ant-fullcalendar-year-select,
  .ant-fullcalendar-header .ant-fullcalendar-month-select {
    width: auto;
    margin-left: 8px;
  }
  .ant-fullcalendar-content {
    top: 8px;
    bottom: auto !important;
  }
  .ant-fullcalendar-disabled-cell > .ant-fullcalendar-date > .ant-fullcalendar-value:hover,
  .ant-fullcalendar-disabled-cell > .ant-fullcalendar-date > .ant-fullcalendar-value:active {
    background-color: transparent;
  }
  .ant-fullcalendar-cell > .ant-fullcalendar-date > .ant-fullcalendar-value {
    position: relative;
    z-index: 1;
  }
  .ant-fullcalendar-today .ant-fullcalendar-value,
  .ant-fullcalendar-month-panel-current-cell .ant-fullcalendar-value {
    box-shadow: none;
  }
  .ant-fullcalendar-header .ant-radio-group {
    display: none !important;
  }
  .ant-fullcalendar-header .ant-fullcalendar-year-select,
  .ant-fullcalendar-header .ant-fullcalendar-month-select {
    width: auto;
    margin-left: 8px;
  }
  .ant-select-auto-complete {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.71428571;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .ant-select-auto-complete.ant-select .ant-select-selection {
    border: 0;
    box-shadow: none;
  }
  .ant-select-auto-complete.ant-select .ant-select-selection__rendered {
    margin-left: 0;
    margin-right: 0;
    height: 100%;
    line-height: 32px;
  }
  .ant-select-auto-complete.ant-select .ant-select-selection__placeholder {
    margin-left: 12px;
    margin-right: 12px;
  }
  .ant-select-auto-complete.ant-select .ant-select-selection--single {
    height: auto;
  }
  .ant-select-auto-complete.ant-select .ant-select-search--inline {
    position: static;
    float: left;
  }
  .ant-select-auto-complete.ant-select-allow-clear .ant-select-selection:hover .ant-select-selection__rendered {
    margin-right: 0 !important;
  }
  .ant-select-auto-complete.ant-select .ant-input {
    background: transparent;
    border-width: 1px;
    line-height: 1.71428571;
    height: 32px;
  }
  .ant-select-auto-complete.ant-select .ant-input:focus,
  .ant-select-auto-complete.ant-select .ant-input:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }
  .ant-select-auto-complete.ant-select .ant-input[disabled] {
    background-color: #f5f5f5;
    opacity: 1;
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
  }
  .ant-select-auto-complete.ant-select .ant-input[disabled]:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }
  .ant-select-auto-complete.ant-select-lg .ant-select-selection__rendered {
    line-height: 40px;
  }
  .ant-select-auto-complete.ant-select-lg .ant-input {
    padding-top: 6px;
    padding-bottom: 6px;
    height: 40px;
  }
  .ant-select-auto-complete.ant-select-sm .ant-select-selection__rendered {
    line-height: 24px;
  }
  .ant-select-auto-complete.ant-select-sm .ant-input {
    padding-top: 1px;
    padding-bottom: 1px;
    height: 24px;
  }
  .ant-fullcalendar-header .ant-select-dropdown {
    text-align: left;
  }
  .ant-input-group > .ant-input:first-child .ant-select .ant-select-selection,
  .ant-input-group-addon:first-child .ant-select .ant-select-selection {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .ant-input-group > .ant-input:last-child .ant-select .ant-select-selection,
  .ant-input-group-addon:last-child .ant-select .ant-select-selection {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .ant-input-group-lg .ant-select-selection--single {
    height: 40px;
  }
  .ant-input-group-sm .ant-select-selection--single {
    height: 24px;
  }
  .ant-input-group.ant-input-group-compact > .ant-select > .ant-select-selection,
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker .ant-input,
  .ant-input-group.ant-input-group-compact > .ant-select-auto-complete .ant-input,
  .ant-input-group.ant-input-group-compact > .ant-cascader-picker .ant-input,
  .ant-input-group.ant-input-group-compact > .ant-mention-wrapper .ant-mention-editor,
  .ant-input-group.ant-input-group-compact > .ant-time-picker .ant-time-picker-input {
    border-radius: 0;
    border-right-width: 1px;
    border-right-color: transparent;
  }
  .ant-input-group.ant-input-group-compact > .ant-select > .ant-select-selection:hover,
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker .ant-input:hover,
  .ant-input-group.ant-input-group-compact > .ant-select-auto-complete .ant-input:hover,
  .ant-input-group.ant-input-group-compact > .ant-cascader-picker .ant-input:hover,
  .ant-input-group.ant-input-group-compact > .ant-mention-wrapper .ant-mention-editor:hover,
  .ant-input-group.ant-input-group-compact > .ant-time-picker .ant-time-picker-input:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact > .ant-select > .ant-select-selection:focus,
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker .ant-input:focus,
  .ant-input-group.ant-input-group-compact > .ant-select-auto-complete .ant-input:focus,
  .ant-input-group.ant-input-group-compact > .ant-cascader-picker .ant-input:focus,
  .ant-input-group.ant-input-group-compact > .ant-mention-wrapper .ant-mention-editor:focus,
  .ant-input-group.ant-input-group-compact > .ant-time-picker .ant-time-picker-input:focus {
    border-color: #40a9ff;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact > *:first-child,
  .ant-input-group.ant-input-group-compact > .ant-select:first-child > .ant-select-selection,
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker:first-child .ant-input,
  .ant-input-group.ant-input-group-compact > .ant-select-auto-complete:first-child .ant-input,
  .ant-input-group.ant-input-group-compact > .ant-cascader-picker:first-child .ant-input,
  .ant-input-group.ant-input-group-compact > .ant-mention-wrapper:first-child .ant-mention-editor,
  .ant-input-group.ant-input-group-compact > .ant-time-picker:first-child .ant-time-picker-input {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .ant-input-group.ant-input-group-compact > *:last-child,
  .ant-input-group.ant-input-group-compact > .ant-select:last-child > .ant-select-selection,
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input,
  .ant-input-group.ant-input-group-compact > .ant-select-auto-complete:last-child .ant-input,
  .ant-input-group.ant-input-group-compact > .ant-cascader-picker:last-child .ant-input,
  .ant-input-group.ant-input-group-compact > .ant-cascader-picker-focused:last-child .ant-input,
  .ant-input-group.ant-input-group-compact > .ant-mention-wrapper:last-child .ant-mention-editor,
  .ant-input-group.ant-input-group-compact > .ant-time-picker:last-child .ant-time-picker-input {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-right-width: 1px;
    border-right-color: #d9d9d9;
  }
  .ant-input-group.ant-input-group-compact > *:last-child:hover,
  .ant-input-group.ant-input-group-compact > .ant-select:last-child > .ant-select-selection:hover,
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input:hover,
  .ant-input-group.ant-input-group-compact > .ant-select-auto-complete:last-child .ant-input:hover,
  .ant-input-group.ant-input-group-compact > .ant-cascader-picker:last-child .ant-input:hover,
  .ant-input-group.ant-input-group-compact > .ant-cascader-picker-focused:last-child .ant-input:hover,
  .ant-input-group.ant-input-group-compact > .ant-mention-wrapper:last-child .ant-mention-editor:hover,
  .ant-input-group.ant-input-group-compact > .ant-time-picker:last-child .ant-time-picker-input:hover {
    border-color: #40a9ff;
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact > *:last-child:focus,
  .ant-input-group.ant-input-group-compact > .ant-select:last-child > .ant-select-selection:focus,
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input:focus,
  .ant-input-group.ant-input-group-compact > .ant-select-auto-complete:last-child .ant-input:focus,
  .ant-input-group.ant-input-group-compact > .ant-cascader-picker:last-child .ant-input:focus,
  .ant-input-group.ant-input-group-compact > .ant-cascader-picker-focused:last-child .ant-input:focus,
  .ant-input-group.ant-input-group-compact > .ant-mention-wrapper:last-child .ant-mention-editor:focus,
  .ant-input-group.ant-input-group-compact > .ant-time-picker:last-child .ant-time-picker-input:focus {
    border-color: #40a9ff;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact > *:last-child:focus .ant-cascader-input,
  .ant-input-group.ant-input-group-compact > .ant-select:last-child > .ant-select-selection:focus .ant-cascader-input,
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input:focus .ant-cascader-input,
  .ant-input-group.ant-input-group-compact > .ant-select-auto-complete:last-child .ant-input:focus .ant-cascader-input,
  .ant-input-group.ant-input-group-compact > .ant-cascader-picker:last-child .ant-input:focus .ant-cascader-input,
  .ant-input-group.ant-input-group-compact > .ant-cascader-picker-focused:last-child .ant-input:focus .ant-cascader-input,
  .ant-input-group.ant-input-group-compact > .ant-mention-wrapper:last-child .ant-mention-editor:focus .ant-cascader-input,
  .ant-input-group.ant-input-group-compact > .ant-time-picker:last-child .ant-time-picker-input:focus .ant-cascader-input {
    border-color: #40a9ff;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact > .ant-select-auto-complete .ant-input {
    vertical-align: top;
  }
  .ant-select {
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
  outline: 0;
}
.ant-select ul,
.ant-select ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
.ant-select > ul > li > a {
  padding: 0;
  background-color: var(--colors-white, #fff);
}
.ant-select-arrow {
  display: inline-block;
  font-style: normal;
  vertical-align: -0.125em;
  text-align: center;
  text-transform: none;
  line-height: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  top: 50%;
  right: 11px;
  line-height: 1;
  margin-top: -6px;
  transform-origin: 50% 50%;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
}
.ant-select-arrow > * {
  line-height: 1;
}
.ant-select-arrow svg {
  display: inline-block;
}
.ant-select-arrow:before {
  display: none;
}
.ant-select-arrow .ant-select-arrow-icon {
  display: block;
}
.ant-select-arrow .ant-select-arrow-icon svg {
  transition: transform 0.3s;
}
.ant-select-selection {
  outline: none;
  user-select: none;
  box-sizing: border-box;
  display: block;
  background-color: var(--colors-white, #fff);
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  border-top-width: 1.02px;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-select-selection:hover {
  border-color: #40a9ff;
  border-right-width: 1px !important;
}
.ant-select-focused .ant-select-selection,
.ant-select-selection:focus,
.ant-select-selection:active {
  border-color: #40a9ff;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  border-right-width: 1px !important;
}
.ant-select-selection__clear {
  display: inline-block;
  font-style: normal;
  vertical-align: baseline;
  text-align: center;
  text-transform: none;
  text-rendering: auto;
  opacity: 0;
  position: absolute;
  right: 11px;
  z-index: 1;
  background: var(--colors-white, #fff);
  top: 50%;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.25);
  width: 12px;
  height: 12px;
  margin-top: -6px;
  line-height: 12px;
  cursor: pointer;
  transition: color 0.3s ease, opacity 0.15s ease;
}
.ant-select-selection__clear:before {
  display: block;
}
.ant-select-selection__clear:hover {
  color: rgba(0, 0, 0, 0.45);
}
.ant-select-selection:hover .ant-select-selection__clear {
  opacity: 1;
}
.ant-select-selection-selected-value {
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  padding-right: 20px;
}
.ant-select-no-arrow .ant-select-selection-selected-value {
  padding-right: 0;
}
.ant-select-disabled {
  color: rgba(0, 0, 0, 0.25);
}
.ant-select-disabled .ant-select-selection {
  background: #f5f5f5;
  cursor: not-allowed;
}
.ant-select-disabled .ant-select-selection:hover,
.ant-select-disabled .ant-select-selection:focus,
.ant-select-disabled .ant-select-selection:active {
  border-color: #d9d9d9;
  box-shadow: none;
}
.ant-select-disabled .ant-select-selection__clear {
  display: none;
  visibility: hidden;
  pointer-events: none;
}
.ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice {
  background: #f5f5f5;
  color: #aaa;
  padding-right: 10px;
}
.ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice__remove {
  display: none;
}
.ant-select-selection--single {
  height: 32px;
  position: relative;
  cursor: pointer;
}
.ant-select-selection__rendered {
  display: block;
  margin-left: 11px;
  margin-right: 11px;
  position: relative;
  line-height: 30px;
}
.ant-select-selection__rendered:after {
  content: '.';
  visibility: hidden;
  pointer-events: none;
  display: inline-block;
  width: 0;
}
.ant-select-lg {
  font-size: 16px;
}
.ant-select-lg .ant-select-selection--single {
  height: 40px;
}
.ant-select-lg .ant-select-selection__rendered {
  line-height: 38px;
}
.ant-select-lg .ant-select-selection--multiple {
  min-height: 40px;
}
.ant-select-lg .ant-select-selection--multiple .ant-select-selection__rendered li {
  height: 32px;
  line-height: 32px;
}
.ant-select-lg .ant-select-selection--multiple .ant-select-selection__clear {
  top: 20px;
}
.ant-select-sm .ant-select-selection--single {
  height: 24px;
}
.ant-select-sm .ant-select-selection__rendered {
  line-height: 22px;
  margin: 0 7px;
}
.ant-select-sm .ant-select-selection--multiple {
  min-height: 24px;
}
.ant-select-sm .ant-select-selection--multiple .ant-select-selection__rendered li {
  height: 16px;
  line-height: 14px;
}
.ant-select-sm .ant-select-selection--multiple .ant-select-selection__clear {
  top: 12px;
}
.ant-select-sm .ant-select-selection__clear,
.ant-select-sm .ant-select-arrow {
  right: 8px;
}
.ant-select-disabled .ant-select-selection__choice__remove {
  color: rgba(0, 0, 0, 0.25);
  cursor: default;
}
.ant-select-disabled .ant-select-selection__choice__remove:hover {
  color: rgba(0, 0, 0, 0.25);
}
.ant-select-search__field__wrap {
  display: inline-block;
  position: relative;
}
.ant-select-selection__placeholder,
.ant-select-search__field__placeholder {
  position: absolute;
  top: 50%;
  left: 0;
  right: 9px;
  color: #bfbfbf;
  line-height: 20px;
  height: 20px;
  max-width: 100%;
  margin-top: -10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
.ant-select-search__field__placeholder {
  left: 12px;
}
.ant-select-search__field__mirror {
  position: absolute;
  top: 0;
  left: 0;
  white-space: pre;
  pointer-events: none;
  opacity: 0;
}
.ant-select-search--inline {
  position: absolute;
  height: 100%;
  width: 100%;
}
.ant-select-search--inline .ant-select-search__field__wrap {
  width: 100%;
  height: 100%;
}
.ant-select-search--inline .ant-select-search__field {
  border-width: 0;
  font-size: 100%;
  height: 100%;
  width: 100%;
  background: transparent;
  outline: 0;
  border-radius: 6px;
  line-height: 1;
}
.ant-select-search--inline > i {
  float: right;
}
.ant-select-selection--multiple {
  min-height: 32px;
  cursor: text;
  padding-bottom: 3px;
  zoom: 1;
}
.ant-select-selection--multiple:before,
.ant-select-selection--multiple:after {
  content: "";
  display: table;
}
.ant-select-selection--multiple:after {
  clear: both;
}
.ant-select-selection--multiple .ant-select-search--inline {
  float: left;
  position: static;
  width: auto;
  padding: 0;
  max-width: 100%;
}
.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field {
  max-width: 100%;
  width: 0.75em;
}
.ant-select-selection--multiple .ant-select-selection__rendered {
  margin-left: 5px;
  margin-bottom: -3px;
  height: auto;
}
.ant-select-selection--multiple .ant-select-selection__placeholder {
  margin-left: 6px;
}
.ant-select-selection--multiple > ul > li,
.ant-select-selection--multiple .ant-select-selection__rendered > ul > li {
  margin-top: 3px;
  height: 24px;
  line-height: 22px;
}
.ant-select-selection--multiple .ant-select-selection__choice {
  color: rgba(0, 0, 0, 0.65);
  background-color: #fafafa;
  border: 1px solid var(--colors-border, #e8e8e8);
  border-radius: 2px;
  cursor: default;
  float: left;
  margin-right: 4px;
  max-width: 99%;
  position: relative;
  overflow: hidden;
  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0 20px 0 10px;
}
.ant-select-selection--multiple .ant-select-selection__choice__disabled {
  padding: 0 10px;
}
.ant-select-selection--multiple .ant-select-selection__choice__content {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  transition: margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.ant-select-selection--multiple .ant-select-selection__choice__remove {
  font-style: normal;
  vertical-align: -0.125em;
  text-align: center;
  text-transform: none;
  line-height: 0;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(0, 0, 0, 0.45);
  line-height: inherit;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s;
  display: inline-block;
  font-size: 12px;
  font-size: 10px \9;
  transform: scale(0.83333333) rotate(0deg);
  position: absolute;
  right: 4px;
}
.ant-select-selection--multiple .ant-select-selection__choice__remove > * {
  line-height: 1;
}
.ant-select-selection--multiple .ant-select-selection__choice__remove svg {
  display: inline-block;
}
.ant-select-selection--multiple .ant-select-selection__choice__remove:before {
  display: none;
}
.ant-select-selection--multiple .ant-select-selection__choice__remove .ant-select-selection--multiple .ant-select-selection__choice__remove-icon {
  display: block;
}
:root .ant-select-selection--multiple .ant-select-selection__choice__remove {
  font-size: 12px;
}
.ant-select-selection--multiple .ant-select-selection__choice__remove:hover {
  color: #404040;
}
.ant-select-selection--multiple .ant-select-selection__clear {
  top: 16px;
}
.ant-select-allow-clear .ant-select-selection--single .ant-select-selection-selected-value {
  padding-right: 16px;
}
.ant-select-allow-clear .ant-select-selection--multiple .ant-select-selection__rendered {
  margin-right: 20px;
}
.ant-select-open .ant-select-arrow-icon svg {
  transform: rotate(180deg);
}
.ant-select-open .ant-select-selection {
  border-color: #40a9ff;
  outline: 0;
  box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  border-right-width: 1px !important;
}
.ant-select-combobox .ant-select-arrow {
  display: none;
}
.ant-select-combobox .ant-select-search--inline {
  height: 100%;
  width: 100%;
  float: none;
}
.ant-select-combobox .ant-select-search__field__wrap {
  width: 100%;
  height: 100%;
}
.ant-select-combobox .ant-select-search__field {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), height 0s;
  box-shadow: none;
}
.ant-select-combobox.ant-select-allow-clear .ant-select-selection:hover .ant-select-selection__rendered {
  margin-right: 20px;
}
.ant-select-dropdown {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-variant: tabular-nums;
  line-height: 1.71428571;
  color: rgba(0, 0, 0, 0.65);
  margin: 0;
  padding: 0;
  list-style: none;
  font-variant: initial;
  background-color: var(--colors-white, #fff);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  box-sizing: border-box;
  z-index: 1050;
  left: -9999px;
  top: -9999px;
  position: absolute;
  outline: none;
  font-size: 14px;
}
.ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-bottomLeft,
.ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-bottomLeft {
  animation-name: antSlideUpIn;
}
.ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-topLeft,
.ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-topLeft {
  animation-name: antSlideDownIn;
}
.ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-bottomLeft {
  animation-name: antSlideUpOut;
}
.ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-topLeft {
  animation-name: antSlideDownOut;
}
.ant-select-dropdown-hidden {
  display: none;
}
.ant-select-dropdown-menu {
  outline: none;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  max-height: 250px;
  overflow: auto;
}
.ant-select-dropdown-menu-item-group-list {
  margin: 0;
  padding: 0;
}
.ant-select-dropdown-menu-item-group-list > .ant-select-dropdown-menu-item {
  padding-left: 20px;
}
.ant-select-dropdown-menu-item-group-title {
  color: rgba(0, 0, 0, 0.45);
  padding: 0 12px;
  height: 32px;
  line-height: 32px;
  font-size: 12px;
}
.ant-select-dropdown-menu-item-group-list .ant-select-dropdown-menu-item:first-child:not(:last-child),
.ant-select-dropdown-menu-item-group:not(:last-child) .ant-select-dropdown-menu-item-group-list .ant-select-dropdown-menu-item:last-child {
  border-radius: 0;
}
.ant-select-dropdown-menu-item {
  position: relative;
  display: block;
  padding: 5px 12px;
  line-height: 22px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.65);
  white-space: nowrap;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: background 0.3s ease;
}
.ant-select-dropdown-menu-item:hover {
  background-color: #e6f7ff;
}
.ant-select-dropdown-menu-item:first-child {
  border-radius: 6px 6px 0 0;
}
.ant-select-dropdown-menu-item:last-child {
  border-radius: 0 0 6px 6px;
}
.ant-select-dropdown-menu-item-disabled {
  color: rgba(0, 0, 0, 0.25);
  cursor: not-allowed;
}
.ant-select-dropdown-menu-item-disabled:hover {
  color: rgba(0, 0, 0, 0.25);
  background-color: var(--colors-white, #fff);
  cursor: not-allowed;
}
.ant-select-dropdown-menu-item-selected,
.ant-select-dropdown-menu-item-selected:hover {
  background-color: #fafafa;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.65);
}
.ant-select-dropdown-menu-item-active {
  background-color: #e6f7ff;
}
.ant-select-dropdown-menu-item-divider {
  height: 1px;
  margin: 1px 0;
  overflow: hidden;
  background-color: var(--colors-border, #e8e8e8);
  line-height: 0;
}
.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item {
  padding-right: 32px;
}
.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon {
  color: transparent;
  display: inline-block;
  font-size: 12px;
  font-size: 10px \9;
  transform: scale(0.83333333) rotate(0deg);
  transition: all 0.2s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
  font-weight: bold;
  text-shadow: 0 0.1px 0, 0.1px 0 0, 0 -0.1px 0, -0.1px 0;
}
:root .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item .ant-select-selected-icon {
  font-size: 12px;
}
.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover .ant-select-selected-icon {
  color: #ddd;
}
.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-disabled .ant-select-selected-icon {
  display: none;
}
.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected .ant-select-selected-icon,
.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover .ant-select-selected-icon {
  color: #1890ff;
  display: inline-block;
}
.ant-select-dropdown-container-open .ant-select-dropdown,
.ant-select-dropdown-open .ant-select-dropdown {
  display: block;
}
`;
