import styled from 'react-emotion';
import { injectGlobal } from 'emotion';
import getTheme from '@lskjs/theme/getTheme';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import removeProps from '@lskjs/utils/removeProps';

const dynamicTag = createDynamicTag('span');

export const Block = styled(removeProps(dynamicTag, ['noStyle', 'inputCode']))`
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  font-size: 13px;
  line-height: 1.43;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  ${p => (p.disabled && `
    opacity: .5 !important;
    cursor: not-allowed !important;
  `)}
`;

export const globalStyles = () => injectGlobal`

  .tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
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
    font-size: 13px;
    opacity: 0;
    filter: alpha(opacity=0); }
    .tooltip.in {
      opacity: 0.9;
      filter: alpha(opacity=90); }
    .tooltip.top {
      margin-top: -3px;
      padding: 5px 0; }
    .tooltip.right {
      margin-left: 3px;
      padding: 0 5px; }
    .tooltip.bottom {
      margin-top: 3px;
      padding: 5px 0; }
    .tooltip.left {
      margin-left: -3px;
      padding: 0 5px; }

  .tooltip-inner {
    max-width: 200px;
    padding: 3px 8px;
    color: #fff;
    text-align: center;
    background-color: #000;
    border-radius: 6px; }

  .tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid; }

  .tooltip.top .tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000; }

  .tooltip.top-left .tooltip-arrow {
    bottom: 0;
    right: 5px;
    margin-bottom: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000; }

  .tooltip.top-right .tooltip-arrow {
    bottom: 0;
    left: 5px;
    margin-bottom: -5px;
    border-width: 5px 5px 0;
    border-top-color: #000; }

  .tooltip.right .tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
    border-right-color: #000; }

  .tooltip.left .tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: -5px;
    border-width: 5px 0 5px 5px;
    border-left-color: #000; }

  .tooltip.bottom .tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000; }

  .tooltip.bottom-left .tooltip-arrow {
    top: 0;
    right: 5px;
    margin-top: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000; }

  .tooltip.bottom-right .tooltip-arrow {
    top: 0;
    left: 5px;
    margin-top: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #000; }

    .tooltip.in {
  opacity: 1;
  filter: alpha(opacity=100); }

.tooltip-inner {
  background-color: #313138;
  padding: 8px 10px !important;
  text-align: left !important;
  font-family: 'Gotham Pro', Helvetica, Arial;
  font-size: 11px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: -0.1px;
  text-align: left;
  color: #ffffff;
  border-radius: 3px;
}

.tooltip.top .tooltip-arrow {
  border-top-color: #313138; }

.tooltip.top-left .tooltip-arrow {
  border-top-color: #313138; }

.tooltip.top-right .tooltip-arrow {
  border-top-color: #313138; }

.tooltip.right .tooltip-arrow {
  border-right-color: #313138; }

.tooltip.left .tooltip-arrow {
  border-left-color: #313138; }

.tooltip.bottom .tooltip-arrow {
  border-bottom-color: #313138; }

.tooltip.bottom-left .tooltip-arrow {
  border-bottom-color: #313138; }

.tooltip.bottom-right .tooltip-arrow {
  border-bottom-color: #313138; }

`;
