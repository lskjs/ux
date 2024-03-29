import { injectGlobal } from 'emotion';

export default () => injectGlobal`
  .ant-slider {
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
    margin: 14px 6px 10px;
    padding: 4px 0;
    height: 12px;
    cursor: pointer;
    touch-action: none;
  }
  .ant-slider-vertical {
    width: 12px;
    height: 100%;
    margin: 6px 10px;
    padding: 0 4px;
  }
  .ant-slider-vertical .ant-slider-rail {
    height: 100%;
    width: 4px;
  }
  .ant-slider-vertical .ant-slider-track {
    width: 4px;
  }
  .ant-slider-vertical .ant-slider-handle {
    margin-left: -5px;
    margin-bottom: -7px;
  }
  .ant-slider-vertical .ant-slider-mark {
    top: 0;
    left: 12px;
    width: 18px;
    height: 100%;
  }
  .ant-slider-vertical .ant-slider-mark-text {
    left: 4px;
    white-space: nowrap;
  }
  .ant-slider-vertical .ant-slider-step {
    width: 4px;
    height: 100%;
  }
  .ant-slider-vertical .ant-slider-dot {
    top: auto;
    left: 2px;
    margin-bottom: -4px;
  }
  .ant-slider-with-marks {
    margin-bottom: 28px;
  }
  .ant-slider-rail {
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: var(--colors-mainBackground, #f5f5f5);
    transition: background-color 0.3s;
  }
  .ant-slider-track {
    position: absolute;
    height: 4px;
    border-radius: 6px;
    background-color: var(--colors-lightPrimary, #91d5ff);
    transition: background-color 0.3s ease;
  }
  .ant-slider-handle {
    position: absolute;
    margin-left: -7px;
    margin-top: -5px;
    width: 14px;
    height: 14px;
    cursor: pointer;
    border-radius: 50%;
    border: solid 2px var(--colors-lightPrimary, #91d5ff);
    background-color: #fff;
    transition: border-color 0.3s, transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  }
  .ant-slider-handle:focus {
    border-color: var(--colors-focusPrimary, #46a6ff);
    box-shadow: 0 0 0 5px #8cc8ff;
    outline: none;
  }
  .ant-slider-handle.ant-tooltip-open {
    border-color: var(--colors-primary, #1890ff);
  }
  .ant-slider:hover .ant-slider-rail {
    background-color: #e1e1e1;
  }
  .ant-slider:hover .ant-slider-track {
    background-color: #69c0ff;
  }
  .ant-slider:hover .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: #69c0ff;
  }
  .ant-slider-mark {
    position: absolute;
    top: 14px;
    left: 0;
    width: 100%;
    font-size: 14px;
  }
  .ant-slider-mark-text {
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.45);
  }
  .ant-slider-mark-text-active {
    color: rgba(0, 0, 0, 0.65);
  }
  .ant-slider-step {
    position: absolute;
    width: 100%;
    height: 4px;
    background: transparent;
  }
  .ant-slider-dot {
    position: absolute;
    top: -2px;
    margin-left: -4px;
    width: 8px;
    height: 8px;
    border: 2px solid #e8e8e8;
    background-color: #fff;
    cursor: pointer;
    border-radius: 50%;
    vertical-align: middle;
  }
  .ant-slider-dot:first-child {
    margin-left: -4px;
  }
  .ant-slider-dot:last-child {
    margin-left: -4px;
  }
  .ant-slider-dot-active {
    border-color: #8cc8ff;
  }
  .ant-slider-disabled {
    cursor: not-allowed;
  }
  .ant-slider-disabled .ant-slider-track {
    background-color: rgba(0, 0, 0, 0.25) !important;
  }
  .ant-slider-disabled .ant-slider-handle,
  .ant-slider-disabled .ant-slider-dot {
    border-color: rgba(0, 0, 0, 0.25) !important;
    background-color: #fff;
    cursor: not-allowed;
    box-shadow: none;
  }
  .ant-slider-disabled .ant-slider-mark-text,
  .ant-slider-disabled .ant-slider-dot {
    cursor: not-allowed !important;
  }
`;
