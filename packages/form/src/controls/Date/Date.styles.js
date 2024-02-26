import { injectGlobal } from 'emotion';

export default () => injectGlobal`
  .ant-calendar-picker-container {
    z-index: 1;
  }
  .ant-calendar-picker-container-clear,
  .ant-calendar-picker-container-icon {
    z-index: 0;
  }
  form .has-feedback .ant-calendar-picker-icon,
  form .has-feedback .ant-time-picker-icon,
  form .has-feedback .ant-calendar-picker-clear,
  form .has-feedback .ant-time-picker-clear {
    right: 28px;
  }
  .has-warning .ant-calendar-picker-open .ant-calendar-picker-input {
    border-color: var(--colors-warning, #ffd666);
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255, 197, 61, 0.2);
    border-right-width: 1px !important;
  }
  .has-warning .ant-calendar-picker-icon:after {
    color: var(--colors-warning, #ffc53d);
  }
  .has-error .ant-calendar-picker-open .ant-calendar-picker-input {
    border-color: var(--colors-danger, #ff7875);
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
    border-right-width: 1px !important;
  }
  .has-error .ant-calendar-picker-icon:after {
    color: var(--colors-danger, #ff4d4f);
  }
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker .ant-input {
    border-radius: 0;
    border-right-width: 1px;
    border-right-color: transparent;
  }
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker .ant-input:hover {
    border-color: var(--colors-focusPrimary, #40a9ff);
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker .ant-input:focus {
    border-color: var(--colors-focusPrimary, #40a9ff);
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
    border-right-color: var(--colors-gray, #d9d9d9);
  }
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input:hover {
    border-color: var(--colors-focusPrimary, #40a9ff);
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input:focus {
    border-color: var(--colors-focusPrimary, #40a9ff);
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input:focus .ant-cascader-input {
    border-color: var(--colors-focusPrimary, #40a9ff);
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
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
    background: #fff;
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
  form .has-feedback .ant-input {
    padding-right: 24px;
  }
  form .has-feedback :not(.ant-input-group-addon) > .ant-select .ant-select-arrow,
  form .has-feedback :not(.ant-input-group-addon) > .ant-select .ant-select-selection__clear {
    right: 28px;
  }
  form .has-feedback :not(.ant-input-group-addon) > .ant-select .ant-select-selection-selected-value {
    padding-right: 42px;
  }
  form .has-feedback .ant-input-search:not(.ant-input-search-enter-button) .ant-input-suffix {
    right: 28px;
  }
  form textarea.ant-input {
    height: auto;
    margin-bottom: 4px;
  }
  form .ant-input-number + .ant-form-text {
    margin-left: 8px;
  }
  form .ant-input-number-handler-wrap {
    z-index: 2;
  }
  form .ant-input-group .ant-select,
  form .ant-input-group .ant-cascader-picker {
    width: auto;
  }
  form :not(.ant-input-group-wrapper) > .ant-input-group,
  form .ant-input-group-wrapper {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    top: -1px;
  }
  .ant-input-group-wrap .ant-select-selection {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .ant-input-group-wrap .ant-select-selection:hover {
    border-color: var(--colors-gray, #d9d9d9);
  }
  .ant-input-group-wrap .ant-select-selection--single {
    margin-left: -1px;
    height: 40px;
    background-color: #eee;
  }
  .ant-input-group-wrap .ant-select-selection--single .ant-select-selection__rendered {
    padding-left: 8px;
    padding-right: 25px;
    line-height: 30px;
  }
  .ant-input-group-wrap .ant-select-open .ant-select-selection {
    border-color: var(--colors-gray, #d9d9d9);
    box-shadow: none;
  }
  .has-warning .ant-input,
  .has-warning .ant-input:hover {
    border-color: var(--colors-warning, #ffc53d);
  }
  .has-warning .ant-input:focus {
    border-color: var(--colors-warning, #ffd666);
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255, 197, 61, 0.2);
    border-right-width: 1px !important;
  }
  .has-warning .ant-input:not([disabled]):hover {
    border-color: var(--colors-warning, #ffc53d);
  }
  .has-warning .ant-calendar-picker-open .ant-calendar-picker-input {
    border-color: var(--colors-warning, #ffd666);
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255, 197, 61, 0.2);
    border-right-width: 1px !important;
  }
  .has-warning .ant-input-prefix {
    color: var(--colors-warning, #ffc53d);
  }
  .has-warning .ant-input-group-addon {
    color: var(--colors-warning, #ffc53d);
    border-color: var(--colors-warning, #ffc53d);
    background-color: #fff;
  }
  .has-warning .ant-input-number {
    border-color: var(--colors-warning, #ffc53d);
  }
  .has-warning .ant-input-number-focused,
  .has-warning .ant-input-number:focus {
    border-color: var(--colors-warning, #ffd666);
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255, 197, 61, 0.2);
    border-right-width: 1px !important;
  }
  .has-warning .ant-input-number:not([disabled]):hover {
    border-color: var(--colors-warning, #ffc53d);
  }
  .has-error .ant-input,
  .has-error .ant-input:hover {
    border-color: var(--colors-danger, #ff4d4f);
  }
  .has-error .ant-input:focus {
    border-color: var(--colors-danger, #ff7875);
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
    border-right-width: 1px !important;
  }
  .has-error .ant-input:not([disabled]):hover {
    border-color: var(--colors-danger, #ff4d4f);
  }
  .has-error .ant-input-prefix {
    color: var(--colors-danger, #ff4d4f);
  }
  .has-error .ant-input-group-addon {
    color: var(--colors-danger, #ff4d4f);
    border-color: var(--colors-danger, #ff4d4f);
    background-color: #fff;
  }
  .has-error .ant-select.ant-select-auto-complete .ant-input:focus {
    border-color: var(--colors-danger, #ff4d4f);
  }
  .has-error .ant-input-group-addon .ant-select-selection {
    border-color: transparent;
    box-shadow: none;
  }
  .has-error .ant-input-number {
    border-color: var(--colors-danger, #ff4d4f);
  }
  .has-error .ant-input-number-focused,
  .has-error .ant-input-number:focus {
    border-color: var(--colors-danger, #ff7875);
    outline: 0;
    box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
    border-right-width: 1px !important;
  }
  .has-error .ant-input-number:not([disabled]):hover {
    border-color: var(--colors-danger, #ff4d4f);
  }
  .ant-input {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-variant: tabular-nums;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    display: inline-block;
    padding: 4px 11px;
    width: 100%;
    height: 32px;
    font-size: 14px;
    line-height: 1.71428571;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    background-image: none;
    border: 1px solid var(--colors-gray, #d9d9d9);
    border-radius: 6px;
    transition: all 0.3s;
  }
  .ant-input::-moz-placeholder {
    color: #bfbfbf;
    opacity: 1;
  }
  .ant-input:-ms-input-placeholder {
    color: #bfbfbf;
  }
  .ant-input::-webkit-input-placeholder {
    color: #bfbfbf;
  }
  .ant-input:hover {
    border-color: var(--colors-focusPrimary, #40a9ff);
    border-right-width: 1px !important;
  }
  .ant-input:focus {
    border-color: var(--colors-focusPrimary, #40a9ff);
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
  }
  .ant-input-disabled {
    background-color: var(--colors-mainBackground, #f5f5f5);
    opacity: 1;
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
  }
  .ant-input-disabled:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }
  textarea.ant-input {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
    min-height: 32px;
  }
  .ant-input-lg {
    padding: 6px 11px;
    height: 40px;
    font-size: 16px;
  }
  .ant-input-sm {
    padding: 1px 7px;
    height: 24px;
  }
  .ant-input-group {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.71428571;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    display: table;
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
  }
  .ant-input-group[class*="col-"] {
    float: none;
    padding-left: 0;
    padding-right: 0;
  }
  .ant-input-group > [class*="col-"] {
    padding-right: 8px;
  }
  .ant-input-group > [class*="col-"]:last-child {
    padding-right: 0;
  }
  .ant-input-group-addon,
  .ant-input-group-wrap,
  .ant-input-group > .ant-input {
    display: table-cell;
  }
  .ant-input-group-addon:not(:first-child):not(:last-child),
  .ant-input-group-wrap:not(:first-child):not(:last-child),
  .ant-input-group > .ant-input:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  .ant-input-group-addon,
  .ant-input-group-wrap {
    width: 1px;
    white-space: nowrap;
    vertical-align: middle;
  }
  .ant-input-group-wrap > * {
    display: block !important;
  }
  .ant-input-group .ant-input {
    float: left;
    width: 100%;
    margin-bottom: 0;
  }
  .ant-input-group .ant-input:focus {
    z-index: 1;
    border-right-width: 1px;
  }
  .ant-input-group .ant-input:hover {
    z-index: 1;
    border-right-width: 1px;
  }
  .ant-input-group-addon {
    padding: 0 11px;
    font-size: 14px;
    font-weight: normal;
    line-height: 1;
    color: rgba(0, 0, 0, 0.65);
    text-align: center;
    background-color: #fafafa;
    border: 1px solid var(--colors-gray, #d9d9d9);
    border-radius: 6px;
    position: relative;
    transition: all 0.3s;
  }
  .ant-input-group-addon .ant-select {
    margin: -5px -11px;
  }
  .ant-input-group-addon .ant-select .ant-select-selection {
    background-color: inherit;
    margin: -1px;
    border: 1px solid transparent;
    box-shadow: none;
  }
  .ant-input-group-addon .ant-select-open .ant-select-selection,
  .ant-input-group-addon .ant-select-focused .ant-select-selection {
    color: #1890ff;
  }
  .ant-input-group-addon > i:only-child:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .ant-input-group > .ant-input:first-child,
  .ant-input-group-addon:first-child {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .ant-input-group > .ant-input:first-child .ant-select .ant-select-selection,
  .ant-input-group-addon:first-child .ant-select .ant-select-selection {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .ant-input-group > .ant-input-affix-wrapper:not(:first-child) .ant-input {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .ant-input-group > .ant-input-affix-wrapper:not(:last-child) .ant-input {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .ant-input-group-addon:first-child {
    border-right: 0;
  }
  .ant-input-group-addon:last-child {
    border-left: 0;
  }
  .ant-input-group > .ant-input:last-child,
  .ant-input-group-addon:last-child {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .ant-input-group > .ant-input:last-child .ant-select .ant-select-selection,
  .ant-input-group-addon:last-child .ant-select .ant-select-selection {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  .ant-input-group-lg .ant-input,
  .ant-input-group-lg > .ant-input-group-addon {
    padding: 6px 11px;
    height: 40px;
    font-size: 16px;
  }
  .ant-input-group-sm .ant-input,
  .ant-input-group-sm > .ant-input-group-addon {
    padding: 1px 7px;
    height: 24px;
  }
    .ant-input-group-lg .ant-select-selection--single {
      height: 40px;
    }
    .ant-input-group-sm .ant-select-selection--single {
      height: 24px;
    }
  .ant-input-group .ant-input-affix-wrapper {
    display: table-cell;
    width: 100%;
    float: left;
  }
  .ant-input-group.ant-input-group-compact {
    display: block;
    zoom: 1;
  }
  .ant-input-group.ant-input-group-compact:before,
  .ant-input-group.ant-input-group-compact:after {
    content: "";
    display: table;
  }
  .ant-input-group.ant-input-group-compact:after {
    clear: both;
  }
  .ant-input-group.ant-input-group-compact-addon:not(:first-child):not(:last-child),
  .ant-input-group.ant-input-group-compact-wrap:not(:first-child):not(:last-child),
  .ant-input-group.ant-input-group-compact > .ant-input:not(:first-child):not(:last-child) {
    border-right-width: 1px;
    border-right-color: transparent;
  }
  .ant-input-group.ant-input-group-compact-addon:not(:first-child):not(:last-child):hover,
  .ant-input-group.ant-input-group-compact-wrap:not(:first-child):not(:last-child):hover,
  .ant-input-group.ant-input-group-compact > .ant-input:not(:first-child):not(:last-child):hover {
    border-color: var(--colors-focusPrimary, #40a9ff);
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact-addon:not(:first-child):not(:last-child):focus,
  .ant-input-group.ant-input-group-compact-wrap:not(:first-child):not(:last-child):focus,
  .ant-input-group.ant-input-group-compact > .ant-input:not(:first-child):not(:last-child):focus {
    border-color: var(--colors-focusPrimary, #40a9ff);
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact > * {
    border-radius: 0;
    border-right-width: 0;
    vertical-align: top;
    float: none;
    display: inline-block;
  }
  .ant-input-group.ant-input-group-compact > span:not(:last-child) > .ant-input {
    border-right-width: 0;
  }
  .ant-input-group.ant-input-group-compact .ant-input {
    float: none;
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
    border-color: var(--colors-focusPrimary, #40a9ff);
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact > .ant-select > .ant-select-selection:focus,
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker .ant-input:focus,
  .ant-input-group.ant-input-group-compact > .ant-select-auto-complete .ant-input:focus,
  .ant-input-group.ant-input-group-compact > .ant-cascader-picker .ant-input:focus,
  .ant-input-group.ant-input-group-compact > .ant-mention-wrapper .ant-mention-editor:focus,
  .ant-input-group.ant-input-group-compact > .ant-time-picker .ant-time-picker-input:focus {
    border-color: var(--colors-focusPrimary, #40a9ff);
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
    border-right-color: var(--colors-gray, #d9d9d9);
  }
  .ant-input-group.ant-input-group-compact > *:last-child:hover,
  .ant-input-group.ant-input-group-compact > .ant-select:last-child > .ant-select-selection:hover,
  .ant-input-group.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input:hover,
  .ant-input-group.ant-input-group-compact > .ant-select-auto-complete:last-child .ant-input:hover,
  .ant-input-group.ant-input-group-compact > .ant-cascader-picker:last-child .ant-input:hover,
  .ant-input-group.ant-input-group-compact > .ant-cascader-picker-focused:last-child .ant-input:hover,
  .ant-input-group.ant-input-group-compact > .ant-mention-wrapper:last-child .ant-mention-editor:hover,
  .ant-input-group.ant-input-group-compact > .ant-time-picker:last-child .ant-time-picker-input:hover {
    border-color: var(--colors-focusPrimary, #40a9ff);
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
    border-color: var(--colors-focusPrimary, #40a9ff);
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
    border-color: var(--colors-focusPrimary, #40a9ff);
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
  }
  .ant-input-group.ant-input-group-compact > .ant-select-auto-complete .ant-input {
    vertical-align: top;
  }
  .ant-input-group-wrapper {
    display: inline-block;
    vertical-align: top;
    width: 100%;
  }
  .ant-input-affix-wrapper {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.71428571;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    display: inline-block;
    width: 100%;
  }
  .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
    border-color: var(--colors-focusPrimary, #40a9ff);
    border-right-width: 1px !important;
  }
  .ant-input-affix-wrapper .ant-input {
    position: static;
  }
  .ant-input-affix-wrapper .ant-input-prefix,
  .ant-input-affix-wrapper .ant-input-suffix {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    line-height: 0;
    color: rgba(0, 0, 0, 0.65);
  }
  .ant-input-affix-wrapper .ant-input-prefix :not(.anticon),
  .ant-input-affix-wrapper .ant-input-suffix :not(.anticon) {
    line-height: 1.71428571;
  }
  .ant-input-affix-wrapper .ant-input-prefix {
    left: 12px;
  }
  .ant-input-affix-wrapper .ant-input-suffix {
    right: 12px;
  }
  .ant-input-affix-wrapper .ant-input:not(:first-child) {
    padding-left: 30px;
  }
  .ant-input-affix-wrapper .ant-input:not(:last-child) {
    padding-right: 30px;
  }
  .ant-input-affix-wrapper .ant-input {
    min-height: 100%;
  }
  .ant-input-search-icon {
    color: rgba(0, 0, 0, 0.45);
    cursor: pointer;
    transition: all 0.3s;
  }
  .ant-input-search-icon:hover {
    color: #333;
  }
  .ant-input-search:not(.ant-input-search-small) > .ant-input-suffix {
    right: 12px;
  }
  .ant-input-search > .ant-input-suffix > .ant-input-search-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .ant-input-search > .ant-input-suffix > .ant-input-search-button > .anticon-search {
    font-size: 16px;
  }
  .ant-input-search.ant-input-search-enter-button > .ant-input {
    padding-right: 46px;
  }
  .ant-input-search.ant-input-search-enter-button > .ant-input-suffix {
    right: 0;
  }
  .ant-input-number {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-variant: tabular-nums;
    box-sizing: border-box;
    list-style: none;
    position: relative;
    padding: 4px 11px;
    width: 100%;
    height: 32px;
    font-size: 14px;
    line-height: 1.71428571;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    background-image: none;
    transition: all 0.3s;
    margin: 0;
    padding: 0;
    display: inline-block;
    border: 1px solid var(--colors-gray, #d9d9d9);
    border-radius: 6px;
    width: 90px;
  }
  .ant-input-number::-moz-placeholder {
    color: #bfbfbf;
    opacity: 1;
  }
  .ant-input-number:-ms-input-placeholder {
    color: #bfbfbf;
  }
  .ant-input-number::-webkit-input-placeholder {
    color: #bfbfbf;
  }
  .ant-input-number:hover {
    border-color: var(--colors-focusPrimary, #40a9ff);
    border-right-width: 1px !important;
  }
  .ant-input-number:focus {
    border-color: var(--colors-focusPrimary, #40a9ff);
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
  }
  .ant-input-number-disabled {
    background-color: var(--colors-mainBackground, #f5f5f5);
    opacity: 1;
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
  }
  .ant-input-number-disabled:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }
  textarea.ant-input-number {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
    transition: all 0.3s, height 0s;
    min-height: 32px;
  }
  .ant-input-number-lg {
    padding: 6px 11px;
    height: 40px;
    font-size: 16px;
  }
  .ant-input-number-sm {
    padding: 1px 7px;
    height: 24px;
  }
  .ant-input-number-handler {
    text-align: center;
    line-height: 0;
    height: 50%;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.45);
    position: relative;
    transition: all 0.1s linear;
    display: block;
    width: 100%;
    font-weight: bold;
  }
  .ant-input-number-handler:active {
    background: #f4f4f4;
  }
  .ant-input-number-handler:hover .ant-input-number-handler-up-inner,
  .ant-input-number-handler:hover .ant-input-number-handler-down-inner {
    color: var(--colors-focusPrimary, #40a9ff);
  }
  .ant-input-number-handler-up-inner,
  .ant-input-number-handler-down-inner {
    font-style: normal;
    vertical-align: -0.125em;
    text-align: center;
    text-transform: none;
    line-height: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 12px;
    user-select: none;
    position: absolute;
    width: 12px;
    height: 12px;
    transition: all 0.1s linear;
    display: inline-block;
    font-size: 12px;
    font-size: 7px \9;
    transform: scale(0.58333333) rotate(0deg);
    right: 4px;
    color: rgba(0, 0, 0, 0.45);
  }
  .ant-input-number-handler-up-inner > *,
  .ant-input-number-handler-down-inner > * {
    line-height: 1;
  }
  .ant-input-number-handler-up-inner svg,
  .ant-input-number-handler-down-inner svg {
    display: inline-block;
  }
  .ant-input-number-handler-up-inner:before,
  .ant-input-number-handler-down-inner:before {
    display: none;
  }
  .ant-input-number-handler-up-inner .ant-input-number-handler-up-inner-icon,
  .ant-input-number-handler-up-inner .ant-input-number-handler-down-inner-icon,
  .ant-input-number-handler-down-inner .ant-input-number-handler-up-inner-icon,
  .ant-input-number-handler-down-inner .ant-input-number-handler-down-inner-icon {
    display: block;
  }
  :root .ant-input-number-handler-up-inner,
  :root .ant-input-number-handler-down-inner {
    font-size: 12px;
  }
  .ant-input-number:hover {
    border-color: var(--colors-focusPrimary, #40a9ff);
    border-right-width: 1px !important;
  }
  .ant-input-number-focused {
    border-color: var(--colors-focusPrimary, #40a9ff);
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    border-right-width: 1px !important;
  }
  .ant-input-number-disabled {
    background-color: var(--colors-mainBackground, #f5f5f5);
    opacity: 1;
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
  }
  .ant-input-number-disabled:hover {
    border-color: #e6d8d8;
    border-right-width: 1px !important;
  }
  .ant-input-number-disabled .ant-input-number-input {
    cursor: not-allowed;
  }
  .ant-input-number-disabled .ant-input-number-handler-wrap {
    display: none;
  }
  .ant-input-number-input {
    width: 100%;
    text-align: left;
    outline: 0;
    -moz-appearance: textfield;
    height: 30px;
    transition: all 0.3s linear;
    background-color: transparent;
    border: 0;
    border-radius: 6px;
    padding: 0 11px;
  }
  .ant-input-number-input::-moz-placeholder {
    color: #bfbfbf;
    opacity: 1;
  }
  .ant-input-number-input:-ms-input-placeholder {
    color: #bfbfbf;
  }
  .ant-input-number-input::-webkit-input-placeholder {
    color: #bfbfbf;
  }
  .ant-input-number-lg {
    padding: 0;
    font-size: 16px;
  }
  .ant-input-number-lg input {
    height: 38px;
  }
  .ant-input-number-sm {
    padding: 0;
  }
  .ant-input-number-sm input {
    height: 22px;
    padding: 0 7px;
  }
  .ant-input-number-handler-wrap {
    border-left: 1px solid var(--colors-gray, #d9d9d9);
    width: 22px;
    height: 100%;
    background: #fff;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    border-radius: 0 6px 6px 0;
    transition: opacity 0.24s linear 0.1s;
  }
  .ant-input-number-handler-wrap:hover .ant-input-number-handler {
    height: 40%;
  }
  .ant-input-number:hover .ant-input-number-handler-wrap {
    opacity: 1;
  }
  .ant-input-number-handler-up {
    cursor: pointer;
  }
  .ant-input-number-handler-up-inner {
    top: 50%;
    margin-top: -5px;
    text-align: center;
  }
  .ant-input-number-handler-up:hover {
    height: 60% !important;
  }
  .ant-input-number-handler-down {
    border-top: 1px solid var(--colors-gray, #d9d9d9);
    top: 0;
    cursor: pointer;
  }
  .ant-input-number-handler-down-inner {
    top: 50%;
    margin-top: -6px;
    text-align: center;
  }
  .ant-input-number-handler-down:hover {
    height: 60% !important;
  }
  .ant-input-number-handler-up-disabled,
  .ant-input-number-handler-down-disabled {
    cursor: not-allowed;
  }
  .ant-input-number-handler-up-disabled:hover .ant-input-number-handler-up-inner,
  .ant-input-number-handler-down-disabled:hover .ant-input-number-handler-down-inner {
    color: rgba(0, 0, 0, 0.25);
  }
  form .has-feedback .ant-calendar-picker-icon {
    right: 28px;
  }
  .has-warning .ant-calendar-picker-icon:after {
    color: var(--colors-warning, #ffc53d);
  }
  .has-error .ant-calendar-picker-icon:after {
    color: var(--colors-danger, #ff4d4f);
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
  .ant-calendar-picker {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    outline: none;
    cursor: text;
    transition: opacity .3s;
  }
  .ant-calendar-picker-container {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: 'tnum';
    position: absolute;
    z-index: 1050;
    font-family: -apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei','Helvetica Neue',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
  }
  .ant-calendar {
    position: relative;
    width: 280px;
    font-size: 14px;
    line-height: 1.5;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #fff;
    border-radius: 4px;
    outline: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }
  .ant-calendar-input-wrap {
    height: 24px;
    padding: 6px 10px;
    border-bottom: 1px solid var(--colors-border, #e8e8e8);
  }
  .ant-calendar-input {
    width: 100%;
    height: 22px;
    color: rgba(0,0,0,0.65);
    background: #fff;
    border: 0;
    outline: 0;
    cursor: auto;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-variant: tabular-nums;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    display: inline-block;
    font-size: 14px;
    line-height: 1.71428571;
    background-image: none;
    border-radius: 6px;
    transition: all 0.3s;
  }
  .ant-calendar .ant-calendar-today-btn:only-child, .ant-calendar .ant-calendar-clear-btn:only-child {
    margin: 0;
  }
  .ant-calendar-date-panel {
    position: relative;
    outline: none;
  }
  .ant-calendar-header {
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-bottom: 1px solid var(--colors-border, #e8e8e8);
    user-select: none;
  }
  .ant-calendar-body {
    padding: 8px 12px;
  }
  .ant-calendar-footer {
    padding: 0 12px;
    line-height: 38px;
    border-top: 1px solid var(--colors-border, #e8e8e8);
  }
  .ant-calendar-range {
    width: 552px;
    overflow: hidden;
  }
  .ant-calendar-range-part {
    position: relative;
    width: 50%;
  }
  .ant-calendar-range-left {
    float: left;
  }
  .ant-calendar-range-middle {
    position: absolute;
    left: 50%;
    z-index: 1;
    height: 24px;
    margin: 1px 0 0 0;
    padding: 0 200px 0 0;
    color: rgba(0,0,0,0.45);
    line-height: 34px;
    text-align: center;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    pointer-events: none;
  }
  .ant-calendar-range-right .ant-calendar-date-input-wrap {
    margin-left: -90px;
  }
`;
