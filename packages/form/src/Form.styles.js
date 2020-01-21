import { injectGlobal } from 'emotion';

export const globalStylesFormItem = () => injectGlobal`
  .ant-form-item-required:before {
    display: inline-block;
    margin-right: 4px;
    content: "*";
    font-family: SimSun;
    line-height: 1;
    font-size: 14px;
    color: #ff4d4f;
  }
  .ant-form-hide-required-mark .ant-form-item-required:before {
    display: none;
  }
  .ant-form-item {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.71428571;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    margin-bottom: 24px;
    vertical-align: top;
  }
  .ant-form-item label {
    position: relative;
  }
  .ant-form-item label > .anticon {
    vertical-align: top;
    font-size: 14px;
  }
  .ant-form-item-control > .ant-form-item:last-child,
  .ant-form-item [class^="ant-col-"] > .ant-form-item:only-child {
    margin-bottom: -24px;
  }
  .ant-form-item-control {
    line-height: 39.9999px;
    position: relative;
    zoom: 1;
  }
  .ant-form-item-control:before,
  .ant-form-item-control:after {
    content: "";
    display: table;
  }
  .ant-form-item-control:after {
    clear: both;
  }
  .ant-form-item-children {
    position: relative;
  }
  .ant-form-item-with-help {
    margin-bottom: 2px;
  }
  .ant-form-item-label {
    text-align: right;
    vertical-align: middle;
    line-height: 39.9999px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }
  .ant-form-item-label label {
    color: rgba(0, 0, 0, 0.85);
  }
  .ant-form-item .ant-switch {
    margin: 2px 0 4px;
  }
  .ant-form-item-no-colon .ant-form-item-label label:after {
    content: " ";
  }
  .ant-form-vertical .ant-form-item-label,
  .ant-col-24.ant-form-item-label,
  .ant-col-xl-24.ant-form-item-label {
    padding: 0 0 8px;
    margin: 0;
    display: block;
    text-align: left;
    line-height: 1.71428571;
  }
  @media (max-width: 575px) {
    .ant-form-item-label,
    .ant-form-item-control-wrapper {
      display: block;
      width: 100%;
    }
    .ant-form-item-label {
      padding: 0 0 8px;
      margin: 0;
      display: block;
      text-align: left;
      line-height: 1.71428571;
    }
    .ant-form-item-label label:after {
      display: none;
    }
    .ant-col-xs-24.ant-form-item-label {
      padding: 0 0 8px;
      margin: 0;
      display: block;
      text-align: left;
      line-height: 1.71428571;
    }
    .ant-col-xs-24.ant-form-item-label label:after {
      display: none;
    }
  }
  @media (max-width: 767px) {
    .ant-col-sm-24.ant-form-item-label {
      padding: 0 0 8px;
      margin: 0;
      display: block;
      text-align: left;
      line-height: 1.71428571;
    }
    .ant-col-sm-24.ant-form-item-label label:after {
      display: none;
    }
  }
  @media (max-width: 991px) {
    .ant-col-md-24.ant-form-item-label {
      padding: 0 0 8px;
      margin: 0;
      display: block;
      text-align: left;
      line-height: 1.71428571;
    }
    .ant-col-md-24.ant-form-item-label label:after {
      display: none;
    }
  }
  @media (max-width: 1199px) {
    .ant-col-lg-24.ant-form-item-label {
      padding: 0 0 8px;
      margin: 0;
      display: block;
      text-align: left;
      line-height: 1.71428571;
    }
    .ant-col-lg-24.ant-form-item-label label:after {
      display: none;
    }
  }
  @media (max-width: 1599px) {
    .ant-col-xl-24.ant-form-item-label {
      padding: 0 0 8px;
      margin: 0;
      display: block;
      text-align: left;
      line-height: 1.71428571;
    }
    .ant-col-xl-24.ant-form-item-label label:after {
      display: none;
    }
  }
  .ant-form-inline .ant-form-item {
    display: inline-block;
    margin-right: 16px;
    margin-bottom: 0;
  }
  .ant-form-inline .ant-form-item-with-help {
    margin-bottom: 24px;
  }
  .ant-form-inline .ant-form-item > .ant-form-item-control-wrapper,
  .ant-form-inline .ant-form-item > .ant-form-item-label {
    display: inline-block;
    vertical-align: top;
  }
  .ant-form-inline .ant-form-text {
    display: inline-block;
  }
  .ant-form-inline .has-feedback {
    display: inline-block;
  }
  .has-success.has-feedback .ant-form-item-children-icon,
  .has-warning.has-feedback .ant-form-item-children-icon,
  .has-error.has-feedback .ant-form-item-children-icon,
  .is-validating.has-feedback .ant-form-item-children-icon {
    position: absolute;
    top: 50%;
    right: 0;
    visibility: visible;
    pointer-events: none;
    width: 32px;
    height: 20px;
    line-height: 20px;
    margin-top: -10px;
    text-align: center;
    font-size: 14px;
    animation: zoomIn 0.3s cubic-bezier(0.12, 0.4, 0.29, 1.46);
    z-index: 1;
  }
  .has-success.has-feedback .ant-form-item-children-icon svg,
  .has-warning.has-feedback .ant-form-item-children-icon svg,
  .has-error.has-feedback .ant-form-item-children-icon svg,
  .is-validating.has-feedback .ant-form-item-children-icon svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .has-success.has-feedback .ant-form-item-children-icon {
    animation-name: diffZoomIn1 !important;
    color: #66BB6A;
  }
  .has-warning.has-feedback .ant-form-item-children-icon {
    color: #ffc53d;
    animation-name: diffZoomIn3 !important;
  }
  .has-error.has-feedback .ant-form-item-children-icon {
    color: #ee1e31;
    animation-name: diffZoomIn2 !important;
  }
  .is-validating.has-feedback .ant-form-item-children-icon {
    display: inline-block;
    color: #1890ff;
  }
  .ant-advanced-search-form .ant-form-item {
    margin-bottom: 24px;
  }
  .ant-advanced-search-form .ant-form-item-with-help {
    margin-bottom: 2px;
  }
  .ant-form-item-children > div > div > input:focus,
  .ant-form-item-children > div > div > input:active {
    border-color: #1890ff;
  }
  .ant-form-item-children > div > div > input::-webkit-input-placeholder {
    opacity: 0.5 !important;
    color: #9b9b9b !important;
    font-size: 14px !important;
    line-height: 1.43 !important;
  }
  .ant-form-item-children > div > div > input::-moz-placeholder {
    opacity: 0.5 !important;
    color: #9b9b9b !important;
    font-size: 14px !important;
    line-height: 1.43 !important;
  }
  .ant-form-item-children > div > div > input:-moz-placeholder {
    opacity: 0.5 !important;
    color: #9b9b9b !important;
    font-size: 14px !important;
    line-height: 1.43 !important;
  }
  .ant-form-item-children > div > div > input:-ms-input-placeholder {
    opacity: 0.5 !important;
    color: #9b9b9b !important;
    font-size: 14px !important;
    line-height: 1.43 !important;
  }
  .ant-form-item-control.has-error input {
    border-color: #ee1e31;
  }
  .ant-form-item-label {
    padding: 0 !important;
  }
`;

export default null;
