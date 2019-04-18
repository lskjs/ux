import { injectGlobal } from 'emotion';

export default () => injectGlobal`
  .ant-tree.ant-tree-directory {
    position: relative;
  }
  .ant-tree.ant-tree-directory > li span.ant-tree-switcher,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-switcher {
    position: relative;
    z-index: 1;
  }
  .ant-tree.ant-tree-directory > li span.ant-tree-switcher.ant-tree-switcher-noop,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-switcher.ant-tree-switcher-noop {
    pointer-events: none;
  }
  .ant-tree.ant-tree-directory > li span.ant-tree-checkbox,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-checkbox {
    position: relative;
    z-index: 1;
  }
  .ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper {
    user-select: none;
    border-radius: 0;
  }
  .ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper:hover,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper:hover {
    background: transparent;
  }
  .ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper:hover:before,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper:hover:before {
    background: #e6f7ff;
  }
  .ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper.ant-tree-node-selected,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper.ant-tree-node-selected {
    color: #fff;
    background: transparent;
  }
  .ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper:before,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 24px;
    transition: all 0.3s;
  }
  .ant-tree.ant-tree-directory > li span.ant-tree-node-content-wrapper > span,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li span.ant-tree-node-content-wrapper > span {
    position: relative;
    z-index: 1;
  }
  .ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-switcher,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-switcher {
    color: #fff;
  }
  .ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox .ant-tree-checkbox-inner,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox .ant-tree-checkbox-inner {
    border-color: #1890ff;
  }
  .ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked:after,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked:after {
    border-color: #fff;
  }
  .ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner {
    background: #fff;
  }
  .ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner:after,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-checkbox.ant-tree-checkbox-checked .ant-tree-checkbox-inner:after {
    border-color: #1890ff;
  }
  .ant-tree.ant-tree-directory > li.ant-tree-treenode-selected > span.ant-tree-node-content-wrapper:before,
  .ant-tree.ant-tree-directory .ant-tree-child-tree > li.ant-tree-treenode-selected > span.ant-tree-node-content-wrapper:before {
    background: #1890ff;
  }
  .ant-tree-checkbox {
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
  .ant-tree-checkbox-wrapper:hover .ant-tree-checkbox-inner,
  .ant-tree-checkbox:hover .ant-tree-checkbox-inner,
  .ant-tree-checkbox-input:focus + .ant-tree-checkbox-inner {
    border-color: #1890ff;
  }
  .ant-tree-checkbox-checked:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    border: 1px solid #1890ff;
    content: "";
    animation: antCheckboxEffect 0.36s ease-in-out;
    animation-fill-mode: both;
    visibility: hidden;
  }
  .ant-tree-checkbox:hover:after,
  .ant-tree-checkbox-wrapper:hover .ant-tree-checkbox:after {
    visibility: visible;
  }
  .ant-tree-checkbox-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    background-color: #fff;
    transition: all 0.3s;
    border-collapse: separate;
  }
  .ant-tree-checkbox-inner:after {
    transform: rotate(45deg) scale(0);
    position: absolute;
    left: 4.57142857px;
    top: 1.14285714px;
    display: table;
    width: 5.71428571px;
    height: 9.14285714px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    content: ' ';
    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
    opacity: 0;
  }
  .ant-tree-checkbox-input {
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
  .ant-tree-checkbox-checked .ant-tree-checkbox-inner:after {
    transform: rotate(45deg) scale(1);
    position: absolute;
    display: table;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    content: ' ';
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    opacity: 1;
  }
  .ant-tree-checkbox-checked .ant-tree-checkbox-inner {
    background-color: #1890ff;
    border-color: #1890ff;
  }
  .ant-tree-checkbox-disabled {
    cursor: not-allowed;
  }
  .ant-tree-checkbox-disabled.ant-tree-checkbox-checked .ant-tree-checkbox-inner:after {
    animation-name: none;
    border-color: rgba(0, 0, 0, 0.25);
  }
  .ant-tree-checkbox-disabled .ant-tree-checkbox-input {
    cursor: not-allowed;
  }
  .ant-tree-checkbox-disabled .ant-tree-checkbox-inner {
    border-color: #d9d9d9 !important;
    background-color: #f5f5f5;
  }
  .ant-tree-checkbox-disabled .ant-tree-checkbox-inner:after {
    animation-name: none;
    border-color: #f5f5f5;
    border-collapse: separate;
  }
  .ant-tree-checkbox-disabled + span {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .ant-tree-checkbox-wrapper {
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
  .ant-tree-checkbox-wrapper + .ant-tree-checkbox-wrapper {
    margin-left: 8px;
  }
  .ant-tree-checkbox-wrapper + span,
  .ant-tree-checkbox + span {
    padding-left: 8px;
    padding-right: 8px;
  }
  .ant-tree-checkbox-group {
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
  .ant-tree-checkbox-group-item {
    display: inline-block;
    margin-right: 8px;
  }
  .ant-tree-checkbox-group-item:last-child {
    margin-right: 0;
  }
  .ant-tree-checkbox-group-item + .ant-tree-checkbox-group-item {
    margin-left: 0;
  }
  .ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner {
    background-color: #fff;
    border-color: #d9d9d9;
  }
  .ant-tree-checkbox-indeterminate .ant-tree-checkbox-inner:after {
    content: ' ';
    transform: translate(-50%, -50%) scale(1);
    border: 0;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    background-color: #1890ff;
    opacity: 1;
  }
  .ant-tree-checkbox-indeterminate.ant-tree-checkbox-disabled .ant-tree-checkbox-inner:after {
    border-color: rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.25);
  }
  .ant-tree {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.71428571;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .ant-tree ol,
  .ant-tree ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .ant-tree li {
    padding: 4px 0;
    margin: 0;
    list-style: none;
    white-space: nowrap;
    outline: 0;
  }
  .ant-tree li span[draggable],
  .ant-tree li span[draggable="true"] {
    user-select: none;
    border-top: 2px transparent solid;
    border-bottom: 2px transparent solid;
    /* Required to make elements draggable in old WebKit */
    -khtml-user-drag: element;
    -webkit-user-drag: element;
    line-height: 20px;
  }
  .ant-tree li.drag-over > span[draggable] {
    background-color: #1890ff;
    color: white;
    opacity: 0.8;
  }
  .ant-tree li.drag-over-gap-top > span[draggable] {
    border-top-color: #1890ff;
  }
  .ant-tree li.drag-over-gap-bottom > span[draggable] {
    border-bottom-color: #1890ff;
  }
  .ant-tree li.filter-node > span {
    color: #ff4d4f !important;
    font-weight: 500 !important;
  }
  .ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-loading-icon,
  .ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-loading-icon {
    display: inline-block;
    position: absolute;
    left: 0;
    width: 24px;
    height: 24px;
    color: #1890ff;
    transform: none;
    font-size: 14px;
  }
  .ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-loading-icon svg,
  .ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-loading-icon svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  :root .ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_open:after,
  :root .ant-tree li.ant-tree-treenode-loading span.ant-tree-switcher.ant-tree-switcher_close:after {
    opacity: 0;
  }
  .ant-tree li ul {
    margin: 0;
    padding: 0 0 0 18px;
  }
  .ant-tree li .ant-tree-node-content-wrapper {
    display: inline-block;
    padding: 0 5px;
    border-radius: 2px;
    margin: 0;
    cursor: pointer;
    text-decoration: none;
    vertical-align: top;
    color: rgba(0, 0, 0, 0.65);
    transition: all 0.3s;
    height: 24px;
    line-height: 24px;
  }
  .ant-tree li .ant-tree-node-content-wrapper:hover {
    background-color: #e6f7ff;
  }
  .ant-tree li .ant-tree-node-content-wrapper.ant-tree-node-selected {
    background-color: #bae7ff;
  }
  .ant-tree li span.ant-tree-checkbox {
    margin: 4px 4px 0 2px;
  }
  .ant-tree li span.ant-tree-switcher,
  .ant-tree li span.ant-tree-iconEle {
    margin: 0;
    width: 24px;
    height: 24px;
    line-height: 24px;
    display: inline-block;
    vertical-align: top;
    border: 0 none;
    cursor: pointer;
    outline: none;
    text-align: center;
  }
  .ant-tree li span.ant-tree-switcher {
    position: relative;
  }
  .ant-tree li span.ant-tree-switcher.ant-tree-switcher-noop {
    cursor: default;
  }
  .ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon,
  .ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon {
    font-size: 12px;
    font-size: 10px \9;
    transform: scale(0.83333333) rotate(0deg);
    display: inline-block;
    font-weight: bold;
  }
  :root .ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon,
  :root .ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon {
    font-size: 12px;
  }
  .ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon svg,
  .ant-tree li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon svg {
    transition: transform 0.3s;
  }
  .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon,
  .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon {
    font-size: 12px;
    font-size: 10px \9;
    transform: scale(0.83333333) rotate(0deg);
    display: inline-block;
    font-weight: bold;
  }
  :root .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon,
  :root .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon {
    font-size: 12px;
  }
  .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon svg,
  .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon svg {
    transition: transform 0.3s;
  }
  .ant-tree li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon svg {
    transform: rotate(-90deg);
  }
  .ant-tree li:last-child > span.ant-tree-switcher:before,
  .ant-tree li:last-child > span.ant-tree-iconEle:before {
    display: none;
  }
  .ant-tree > li:first-child {
    padding-top: 7px;
  }
  .ant-tree > li:last-child {
    padding-bottom: 7px;
  }
  .ant-tree-child-tree {
    display: none;
  }
  .ant-tree-child-tree-open {
    display: block;
  }
  li.ant-tree-treenode-disabled > span:not(.ant-tree-switcher),
  li.ant-tree-treenode-disabled > .ant-tree-node-content-wrapper,
  li.ant-tree-treenode-disabled > .ant-tree-node-content-wrapper span {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  li.ant-tree-treenode-disabled > .ant-tree-node-content-wrapper:hover {
    background: transparent;
  }
  .ant-tree-icon__open {
    margin-right: 2px;
    vertical-align: top;
  }
  .ant-tree-icon__close {
    margin-right: 2px;
    vertical-align: top;
  }
  .ant-tree.ant-tree-show-line li {
    position: relative;
  }
  .ant-tree.ant-tree-show-line li span.ant-tree-switcher {
    background: #fff;
    color: rgba(0, 0, 0, 0.45);
  }
  .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-tree-switcher-icon,
  .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-select-switcher-icon {
    font-size: 12px;
    display: inline-block;
    font-weight: normal;
  }
  .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-tree-switcher-icon svg,
  .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher-noop .ant-select-switcher-icon svg {
    transition: transform 0.3s;
  }
  .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon,
  .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon {
    font-size: 12px;
    display: inline-block;
    font-weight: normal;
  }
  .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-tree-switcher-icon svg,
  .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_open .ant-select-switcher-icon svg {
    transition: transform 0.3s;
  }
  .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon,
  .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon {
    font-size: 12px;
    display: inline-block;
    font-weight: normal;
  }
  .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-tree-switcher-icon svg,
  .ant-tree.ant-tree-show-line li span.ant-tree-switcher.ant-tree-switcher_close .ant-select-switcher-icon svg {
    transition: transform 0.3s;
  }
  .ant-tree.ant-tree-show-line li:not(:last-child):before {
    content: ' ';
    width: 1px;
    border-left: 1px solid #d9d9d9;
    height: 100%;
    position: absolute;
    left: 12px;
    margin: 22px 0;
  }
  .ant-tree.ant-tree-icon-hide .ant-tree-treenode-loading .ant-tree-iconEle {
    display: none;
  }
  .ant-tree ant-tree-switcher {
    display: none !important;
  }
  .ant-select-tree-checkbox {
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
  .ant-select-tree-checkbox-wrapper:hover .ant-select-tree-checkbox-inner,
  .ant-select-tree-checkbox:hover .ant-select-tree-checkbox-inner,
  .ant-select-tree-checkbox-input:focus + .ant-select-tree-checkbox-inner {
    border-color: #1890ff;
  }
  .ant-select-tree-checkbox-checked:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    border: 1px solid #1890ff;
    content: "";
    animation: antCheckboxEffect 0.36s ease-in-out;
    animation-fill-mode: both;
    visibility: hidden;
  }
  .ant-select-tree-checkbox:hover:after,
  .ant-select-tree-checkbox-wrapper:hover .ant-select-tree-checkbox:after {
    visibility: visible;
  }
  .ant-select-tree-checkbox-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    background-color: #fff;
    transition: all 0.3s;
    border-collapse: separate;
  }
  .ant-select-tree-checkbox-inner:after {
    transform: rotate(45deg) scale(0);
    position: absolute;
    left: 4.57142857px;
    top: 1.14285714px;
    display: table;
    width: 5.71428571px;
    height: 9.14285714px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    content: ' ';
    transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
    opacity: 0;
  }
  .ant-select-tree-checkbox-input {
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
  .ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner:after {
    transform: rotate(45deg) scale(1);
    position: absolute;
    display: table;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    content: ' ';
    transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
    opacity: 1;
  }
  .ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner {
    background-color: #1890ff;
    border-color: #1890ff;
  }
  .ant-select-tree-checkbox-disabled {
    cursor: not-allowed;
  }
  .ant-select-tree-checkbox-disabled.ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner:after {
    animation-name: none;
    border-color: rgba(0, 0, 0, 0.25);
  }
  .ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-input {
    cursor: not-allowed;
  }
  .ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-inner {
    border-color: #d9d9d9 !important;
    background-color: #f5f5f5;
  }
  .ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-inner:after {
    animation-name: none;
    border-color: #f5f5f5;
    border-collapse: separate;
  }
  .ant-select-tree-checkbox-disabled + span {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  .ant-select-tree-checkbox-wrapper {
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
  .ant-select-tree-checkbox-wrapper + .ant-select-tree-checkbox-wrapper {
    margin-left: 8px;
  }
  .ant-select-tree-checkbox-wrapper + span,
  .ant-select-tree-checkbox + span {
    padding-left: 8px;
    padding-right: 8px;
  }
  .ant-select-tree-checkbox-group {
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
  .ant-select-tree-checkbox-group-item {
    display: inline-block;
    margin-right: 8px;
  }
  .ant-select-tree-checkbox-group-item:last-child {
    margin-right: 0;
  }
  .ant-select-tree-checkbox-group-item + .ant-select-tree-checkbox-group-item {
    margin-left: 0;
  }
  .ant-select-tree-checkbox-indeterminate .ant-select-tree-checkbox-inner {
    background-color: #fff;
    border-color: #d9d9d9;
  }
  .ant-select-tree-checkbox-indeterminate .ant-select-tree-checkbox-inner:after {
    content: ' ';
    transform: translate(-50%, -50%) scale(1);
    border: 0;
    left: 50%;
    top: 50%;
    width: 8px;
    height: 8px;
    background-color: #1890ff;
    opacity: 1;
  }
  .ant-select-tree-checkbox-indeterminate.ant-select-tree-checkbox-disabled .ant-select-tree-checkbox-inner:after {
    border-color: rgba(0, 0, 0, 0.25);
    background-color: rgba(0, 0, 0, 0.25);
  }
  .ant-select-tree {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.71428571;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    padding: 0;
    list-style: none;
    margin: 0;
    padding: 0 4px;
    margin-top: -4px;
  }
  .ant-select-tree li {
    padding: 0;
    margin: 8px 0;
    list-style: none;
    white-space: nowrap;
    outline: 0;
  }
  .ant-select-tree li.filter-node > span {
    font-weight: 500;
  }
  .ant-select-tree li ul {
    margin: 0;
    padding: 0 0 0 18px;
  }
  .ant-select-tree li .ant-select-tree-node-content-wrapper {
    display: inline-block;
    padding: 3px 5px;
    border-radius: 2px;
    margin: 0;
    cursor: pointer;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.65);
    transition: all 0.3s;
    width: calc(100% - 24px);
  }
  .ant-select-tree li .ant-select-tree-node-content-wrapper:hover {
    background-color: #e6f7ff;
  }
  .ant-select-tree li .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected {
    background-color: #bae7ff;
  }
  .ant-select-tree li span.ant-select-tree-checkbox {
    margin: 0 4px 0 0;
  }
  .ant-select-tree li span.ant-select-tree-checkbox + .ant-select-tree-node-content-wrapper {
    width: calc(100% - 46px);
  }
  .ant-select-tree li span.ant-select-tree-switcher,
  .ant-select-tree li span.ant-select-tree-iconEle {
    margin: 0;
    width: 24px;
    height: 24px;
    line-height: 22px;
    display: inline-block;
    vertical-align: middle;
    border: 0 none;
    cursor: pointer;
    outline: none;
    text-align: center;
  }
  .ant-select-tree li span.ant-select-icon_loading .ant-select-switcher-loading-icon {
    display: inline-block;
    position: absolute;
    left: 0;
    color: #1890ff;
    transform: none;
    font-size: 14px;
  }
  .ant-select-tree li span.ant-select-icon_loading .ant-select-switcher-loading-icon svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .ant-select-tree li span.ant-select-tree-switcher {
    position: relative;
  }
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher-noop {
    cursor: auto;
  }
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-tree-switcher-icon,
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-select-switcher-icon {
    font-size: 12px;
    font-size: 10px \9;
    transform: scale(0.83333333) rotate(0deg);
    display: inline-block;
    font-weight: bold;
  }
  :root .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-tree-switcher-icon,
  :root .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-select-switcher-icon {
    font-size: 12px;
  }
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-tree-switcher-icon svg,
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-select-switcher-icon svg {
    transition: transform 0.3s;
  }
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-tree-switcher-icon,
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-icon {
    font-size: 12px;
    font-size: 10px \9;
    transform: scale(0.83333333) rotate(0deg);
    display: inline-block;
    font-weight: bold;
  }
  :root .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-tree-switcher-icon,
  :root .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-icon {
    font-size: 12px;
  }
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-tree-switcher-icon svg,
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-icon svg {
    transition: transform 0.3s;
  }
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-icon svg {
    transform: rotate(-90deg);
  }
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-select-switcher-loading-icon,
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-loading-icon {
    display: inline-block;
    position: absolute;
    left: 0;
    width: 24px;
    height: 24px;
    color: #1890ff;
    transform: none;
    font-size: 14px;
  }
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_open .ant-select-switcher-loading-icon svg,
  .ant-select-tree li span.ant-select-tree-switcher.ant-select-tree-switcher_close .ant-select-switcher-loading-icon svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .ant-select-tree .ant-select-tree-treenode-loading .ant-select-tree-iconEle {
    display: none;
  }
  .ant-select-tree-child-tree {
    display: none;
  }
  .ant-select-tree-child-tree-open {
    display: block;
  }
  li.ant-select-tree-treenode-disabled > span:not(.ant-select-tree-switcher),
  li.ant-select-tree-treenode-disabled > .ant-select-tree-node-content-wrapper,
  li.ant-select-tree-treenode-disabled > .ant-select-tree-node-content-wrapper span {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  li.ant-select-tree-treenode-disabled > .ant-select-tree-node-content-wrapper:hover {
    background: transparent;
  }
  .ant-select-tree-icon__open {
    margin-right: 2px;
    vertical-align: top;
  }
  .ant-select-tree-icon__close {
    margin-right: 2px;
    vertical-align: top;
  }
  .ant-select-tree-dropdown {
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
  .ant-select-tree-dropdown .ant-select-dropdown-search {
    display: block;
    padding: 4px;
  }
  .ant-select-tree-dropdown .ant-select-dropdown-search .ant-select-search__field__wrap {
    width: 100%;
  }
  .ant-select-tree-dropdown .ant-select-dropdown-search .ant-select-search__field {
    padding: 4px 7px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    outline: none;
  }
  .ant-select-tree-dropdown .ant-select-dropdown-search.ant-select-search--hide {
    display: none;
  }
  .ant-select-tree-dropdown .ant-select-not-found {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
    padding: 7px 16px;
    display: block;
  }
  .ant-tree li span.ant-tree-switcher,
  .ant-tree li span.ant-tree-iconEle {
    display: none !important;
  }
  .ant-tree-node-selected {
    background: none !important;
  }
  .ant-tree-node-content-wrapper {
    padding: 2px 5px 0px 5px !important;
  }
  .ant-tree-node-content-wrapper:hover {
    background: none !important;
  }
  .ant-tree-switcher-noop {
    display: none !important;
  }

  .ant-tag {
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
    line-height: 20px;
    height: 22px;
    padding: 0 7px;
    border-radius: 6px;
    border: 1px solid #d9d9d9;
    background: #fafafa;
    font-size: 12px;
    transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    opacity: 1;
    margin-right: 8px;
    cursor: pointer;
    white-space: nowrap;
  }
  .ant-tag:hover {
    opacity: 0.85;
  }
  .ant-tag,
  .ant-tag a,
  .ant-tag a:hover {
    color: rgba(0, 0, 0, 0.65);
  }
  .ant-tag > a:first-child:last-child {
    display: inline-block;
    margin: 0 -8px;
    padding: 0 8px;
  }
  .ant-tag .anticon-close {
    display: inline-block;
    font-size: 12px;
    transform: scale(0.83333333) rotate(0deg);
    cursor: pointer;
    margin-left: 3px;
    transition: all 0.3s;
    color: rgba(0, 0, 0, 0.45);
    font-weight: bold;
  }
  :root .ant-tag .anticon-close {
    font-size: 12px;
  }
  .ant-tag .anticon-close:hover {
    color: rgba(0, 0, 0, 0.85);
  }
  .ant-tag-has-color {
    border-color: transparent;
  }
  .ant-tag-has-color,
  .ant-tag-has-color a,
  .ant-tag-has-color a:hover,
  .ant-tag-has-color .anticon-close,
  .ant-tag-has-color .anticon-close:hover {
    color: #fff;
  }
  .ant-tag-checkable {
    background-color: transparent;
    border-color: transparent;
  }
  .ant-tag-checkable:not(.ant-tag-checkable-checked):hover {
    color: #1890ff;
  }
  .ant-tag-checkable:active,
  .ant-tag-checkable-checked {
    color: #fff;
  }
  .ant-tag-checkable-checked {
    background-color: #1890ff;
  }
  .ant-tag-checkable:active {
    background-color: #096dd9;
  }
  .ant-tag-close {
    width: 0 !important;
    padding: 0;
    margin: 0;
  }
  .ant-tag-zoom-enter,
  .ant-tag-zoom-appear {
    animation: antFadeIn 0.2s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    animation-fill-mode: both;
  }
  .ant-tag-zoom-leave {
    animation: antZoomOut 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    animation-fill-mode: both;
  }
  .ant-tag-pink {
    color: #eb2f96;
    background: #fff0f6;
    border-color: #ffadd2;
  }
  .ant-tag-pink-inverse {
    background: #eb2f96;
    border-color: #eb2f96;
    color: #fff;
  }
  .ant-tag-magenta {
    color: #eb2f96;
    background: #fff0f6;
    border-color: #ffadd2;
  }
  .ant-tag-magenta-inverse {
    background: #eb2f96;
    border-color: #eb2f96;
    color: #fff;
  }
  .ant-tag-red {
    color: #f5222d;
    background: #fff1f0;
    border-color: #ffa39e;
  }
  .ant-tag-red-inverse {
    background: #f5222d;
    border-color: #f5222d;
    color: #fff;
  }
  .ant-tag-volcano {
    color: #fa541c;
    background: #fff2e8;
    border-color: #ffbb96;
  }
  .ant-tag-volcano-inverse {
    background: #fa541c;
    border-color: #fa541c;
    color: #fff;
  }
  .ant-tag-orange {
    color: #fa8c16;
    background: #fff7e6;
    border-color: #ffd591;
  }
  .ant-tag-orange-inverse {
    background: #fa8c16;
    border-color: #fa8c16;
    color: #fff;
  }
  .ant-tag-yellow {
    color: #fadb14;
    background: #feffe6;
    border-color: #fffb8f;
  }
  .ant-tag-yellow-inverse {
    background: #fadb14;
    border-color: #fadb14;
    color: #fff;
  }
  .ant-tag-gold {
    color: #faad14;
    background: #fffbe6;
    border-color: #ffe58f;
  }
  .ant-tag-gold-inverse {
    background: #faad14;
    border-color: #faad14;
    color: #fff;
  }
  .ant-tag-cyan {
    color: #13c2c2;
    background: #e6fffb;
    border-color: #87e8de;
  }
  .ant-tag-cyan-inverse {
    background: #13c2c2;
    border-color: #13c2c2;
    color: #fff;
  }
  .ant-tag-lime {
    color: #a0d911;
    background: #fcffe6;
    border-color: #eaff8f;
  }
  .ant-tag-lime-inverse {
    background: #a0d911;
    border-color: #a0d911;
    color: #fff;
  }
  .ant-tag-green {
    color: #52c41a;
    background: #f6ffed;
    border-color: #b7eb8f;
  }
  .ant-tag-green-inverse {
    background: #52c41a;
    border-color: #52c41a;
    color: #fff;
  }
  .ant-tag-blue {
    color: #1890ff;
    background: #e6f7ff;
    border-color: #91d5ff;
  }
  .ant-tag-blue-inverse {
    background: #1890ff;
    border-color: #1890ff;
    color: #fff;
  }
  .ant-tag-geekblue {
    color: #2f54eb;
    background: #f0f5ff;
    border-color: #adc6ff;
  }
  .ant-tag-geekblue-inverse {
    background: #2f54eb;
    border-color: #2f54eb;
    color: #fff;
  }
  .ant-tag-purple {
    color: #722ed1;
    background: #f9f0ff;
    border-color: #d3adf7;
  }
  .ant-tag-purple-inverse {
    background: #722ed1;
    border-color: #722ed1;
    color: #fff;
  }
  .ant-tag {
    margin-bottom: 8px;
  }
  .ant-tag {
    cursor: default;
  }
`;
