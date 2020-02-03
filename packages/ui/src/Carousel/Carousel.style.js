import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const ButtonRight = styled.button`
  position: relative;
  width: 75px;
  background-color: transparent;
  height: 100%;
  top: 0px;
  right: 0px;
  font-size: 2em;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  outline: none;
  right: 0px;
  z-index: 1;
  outline: none;
  visibility: hidden;
  opacity: .7;
  transition-duration: .3s;
  &:hover{
    opacity: 1;
  }
`;

export const ButtonLeft = styled.button`
  position: relative;
  background-color: transparent;
  top: 0px;
  left: 0px;
  width: 75px;
  height: 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  z-index: 2;
  outline: none;
  border: none !important;
  visibility: hidden;
  opacity: .7;
  transition-duration: .3s;
  &:hover{
    opacity: 1;
  }
`;

export const ArrowLeft = styled.i`
  border-radius: 50%;
  background-image: url("https://image.flaticon.com/icons/svg/25/25322.svg");
  background-position: -5px 13px;
  background-size: 47px 16px;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  width: 40px;
  height: 40px;
  border: none !important;
  display: block;
  margin-left: 8px;
  background-color: #fff;
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.2);
`;

export const ArrowRight = styled.i`
  border-radius: 50%;
  background-image: url("https://image.flaticon.com/icons/svg/25/25638.svg");
  background-position: -2px 13px;
  background-size: 46px 17px;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  display: block;
  width: 40px;
  margin-left: 29px;
  height: 40px;
  background-color: #fff;
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.2);
`;

export const globalStyles = css`
@keyframes closeWindow {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .ril__outer {
    background-color: rgba(0, 0, 0, 0.85);
    outline: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    -ms-content-zooming: none;
    -ms-user-select: none;
    -ms-touch-select: none;
    touch-action: none;
  }

  .ril__outerClosing {
    opacity: 0;
  }

  .ril__inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .ril__image,
  .ril__imagePrev,
  .ril__imageNext {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    max-width: none;
    -ms-content-zooming: none;
    -ms-user-select: none;
    -ms-touch-select: none;
    touch-action: none;
  }

  .ril__imageDiscourager {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .ril__navButtons {
    border: none;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 20px;
    height: 34px;
    padding: 40px 30px;
    margin: auto;
    cursor: pointer;
    opacity: 0.7;
  }
  .ril__navButtons:hover {
    opacity: 1;
  }
  .ril__navButtons:active {
    opacity: 0.7;
  }

  .ril__navButtonPrev {
    left: 0;
    background: rgba(0, 0, 0, 0.2)
      url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDE5LDMgLTIsLTIgLTE2LDE2IDE2LDE2IDEsLTEgLTE1LC0xNSAxNSwtMTUgeiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==')
      no-repeat center;
  }

  .ril__navButtonNext {
    right: 0;
    background: rgba(0, 0, 0, 0.2)
      url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDEsMyAyLC0yIDE2LDE2IC0xNiwxNiAtMSwtMSAxNSwtMTUgLTE1LC0xNSB6IiBmaWxsPSIjRkZGIi8+PC9zdmc+')
      no-repeat center;
  }

  .ril__downloadBlocker {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
    background-size: cover;
  }

  .ril__caption,
  .ril__toolbar {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
  }

  .ril__caption {
    bottom: 0;
    max-height: 150px;
    overflow: auto;
  }

  .ril__captionContent {
    padding: 10px 20px;
    color: #fff;
  }

  .ril__toolbar {
    top: 0;
    height: 50px;
  }

  .ril__toolbarSide {
    height: 50px;
    margin: 0;
  }

  .ril__toolbarLeftSide {
    padding-left: 20px;
    padding-right: 0;
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .ril__toolbarRightSide {
    padding-left: 0;
    padding-right: 20px;
    flex: 0 0 auto;
  }

  .ril__toolbarItem {
    display: inline-block;
    line-height: 50px;
    padding: 0;
    color: #fff;
    font-size: 120%;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ril__toolbarItemChild {
    vertical-align: middle;
  }

  .ril__builtinButton {
    width: 40px;
    height: 35px;
    cursor: pointer;
    border: none;
    opacity: 0.7;
  }
  .ril__builtinButton:hover {
    opacity: 1;
  }
  .ril__builtinButton:active {
    outline: none;
  }

  .ril__builtinButtonDisabled {
    cursor: default;
    opacity: 0.5;
  }
  .ril__builtinButtonDisabled:hover {
    opacity: 0.5;
  }

  .ril__closeButton {
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cGF0aCBkPSJtIDEsMyAxLjI1LC0xLjI1IDcuNSw3LjUgNy41LC03LjUgMS4yNSwxLjI1IC03LjUsNy41IDcuNSw3LjUgLTEuMjUsMS4yNSAtNy41LC03LjUgLTcuNSw3LjUgLTEuMjUsLTEuMjUgNy41LC03LjUgLTcuNSwtNy41IHoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=')
      no-repeat center;
  }

  .ril__zoomInButton {
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PHBhdGggZD0iTTEyIDV2NiIvPjwvZz48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')
      no-repeat center;
  }

  .ril__zoomOutButton {
    background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PC9nPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')
      no-repeat center;
  }

  .ril__outerAnimating {
    animation-name: closeWindow;
  }

  @keyframes pointFade {
    0%,
    19.999%,
    100% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
  }

  .ril__loadingCircle {
    width: 60px;
    height: 60px;
    position: relative;
  }

  .ril__loadingCirclePoint {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .ril__loadingCirclePoint::before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 11%;
    height: 30%;
    background-color: #fff;
    border-radius: 30%;
    animation: pointFade 800ms infinite ease-in-out both;
  }
  .ril__loadingCirclePoint:nth-of-type(1) {
    transform: rotate(0deg);
  }
  .ril__loadingCirclePoint:nth-of-type(7) {
    transform: rotate(180deg);
  }
  .ril__loadingCirclePoint:nth-of-type(1)::before,
  .ril__loadingCirclePoint:nth-of-type(7)::before {
    animation-delay: -800ms;
  }
  .ril__loadingCirclePoint:nth-of-type(2) {
    transform: rotate(30deg);
  }
  .ril__loadingCirclePoint:nth-of-type(8) {
    transform: rotate(210deg);
  }
  .ril__loadingCirclePoint:nth-of-type(2)::before,
  .ril__loadingCirclePoint:nth-of-type(8)::before {
    animation-delay: -666ms;
  }
  .ril__loadingCirclePoint:nth-of-type(3) {
    transform: rotate(60deg);
  }
  .ril__loadingCirclePoint:nth-of-type(9) {
    transform: rotate(240deg);
  }
  .ril__loadingCirclePoint:nth-of-type(3)::before,
  .ril__loadingCirclePoint:nth-of-type(9)::before {
    animation-delay: -533ms;
  }
  .ril__loadingCirclePoint:nth-of-type(4) {
    transform: rotate(90deg);
  }
  .ril__loadingCirclePoint:nth-of-type(10) {
    transform: rotate(270deg);
  }
  .ril__loadingCirclePoint:nth-of-type(4)::before,
  .ril__loadingCirclePoint:nth-of-type(10)::before {
    animation-delay: -400ms;
  }
  .ril__loadingCirclePoint:nth-of-type(5) {
    transform: rotate(120deg);
  }
  .ril__loadingCirclePoint:nth-of-type(11) {
    transform: rotate(300deg);
  }
  .ril__loadingCirclePoint:nth-of-type(5)::before,
  .ril__loadingCirclePoint:nth-of-type(11)::before {
    animation-delay: -266ms;
  }
  .ril__loadingCirclePoint:nth-of-type(6) {
    transform: rotate(150deg);
  }
  .ril__loadingCirclePoint:nth-of-type(12) {
    transform: rotate(330deg);
  }
  .ril__loadingCirclePoint:nth-of-type(6)::before,
  .ril__loadingCirclePoint:nth-of-type(12)::before {
    animation-delay: -133ms;
  }
  .ril__loadingCirclePoint:nth-of-type(7) {
    transform: rotate(180deg);
  }
  .ril__loadingCirclePoint:nth-of-type(13) {
    transform: rotate(360deg);
  }
  .ril__loadingCirclePoint:nth-of-type(7)::before,
  .ril__loadingCirclePoint:nth-of-type(13)::before {
    animation-delay: 0ms;
  }

  .ril__loadingContainer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .ril__imagePrev .ril__loadingContainer,
  .ril__imageNext .ril__loadingContainer {
    display: none;
  }

  .ril__errorContainer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .ril__imagePrev .ril__errorContainer,
  .ril__imageNext .ril__errorContainer {
    display: none;
  }

  .ril__loadingContainer__icon {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const Container = styled.div`
  position: relative;
  margin: 9px;
  margin-top: 0;
  margin-bottom: 0;
  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;

    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    &:hover {
      .slick-prev,
      .slick-next {
        visibility: visible;
      }
    }
  }

  .slick-list {
    position: relative;

    display: block;
    overflow: hidden;

    margin: 0;
    padding: 0;
  }
  .slick-list:focus {
    outline: none;
  }
  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    width: 10000px !important;
    position: relative;
    top: 0;
    left: 0;

    display: block;
  }
  .slick-track:before,
  .slick-track:after {
    display: table;

    content: "";
  }
  .slick-track:after {
    clear: both;
  }
  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    float: left;

    height: 100%;
    min-height: 1px;
    margin-right: 10px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
    height: 100%;
    object-fit: contain;
    ${p => p.withContetn && css`
      width: 100%
    `};
  }
  .slick-slide.slick-loading img {
    display: none;
  }
  .slick-slide.dragging img {
    pointer-events: none;
  }
  .slick-initialized .slick-slide {
    display: block;
    outline: none;
  }
  .slick-loading .slick-slide {
    visibility: hidden;
  }
  .slick-vertical .slick-slide {
    display: block;

    height: auto;

    border: 1px solid transparent;
  }
  .slick-arrow.slick-hidden {
    display: none;
  }
  .slick-list h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
  }
  .slick-track div:nth-child(1) {
    outline: none;
  }
  .slick-arrow {
    position: absolute;
    padding: 0;
    text-indent: -9999px;
    background-repeat: no-repeat;
    outline: none;
    &.slick-disabled {
      cursor: default;
      opacity: 0;
    }
  }
  .slides .slide {
    display: inline-block;
    padding: 10px 20px;
  }

  .slides .slide img {
    object-fit: cover;
  }

  .hidden {
    position: absolute;
    left: -10000px;
    top: auto;
    overflow: hidden;
  }
  .visible {
    width: 116px;
    background-size: 330px;
  }
`;

export const Wrapper = styled.article`;
  height: ${p => (`${p.itemHeight}px`)};
`;

export const ItemSlider = styled.div`
  margin: 0;
`;

export const AnotherButtonRight = styled.button`
  width: 56px;
  height: 56px;
  background-color: #ffffff;
  position: absolute;
  top: 31%;
  font-size: 2em;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  outline: none;
  transform: translateX(-50%) translateX(30px);
  display: none;
  right: -2%;
  z-index: 1;
  outline: none;
  @media (max-width: 1469px) {
    right: -3%;
  }
  @media (max-width: 513px) {
    right: -5%;
  }
  @media (max-width: 669px) {
    right: -4%;
  }
  visibility: hidden;
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.2);
`;

export const AnotherButtonLeft = styled.button`
  background-color: #ffffff;
  position: absolute;
  top: 31%;
  right: 2%;
  border: none;
  width: 56px;
  height: 56px;
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  background-repeat: no-repeat;
  cursor: pointer;
  outline: none;
  display: none;
  left: 2%;
  transform: translateX(-50%) translateX(-30px);
  z-index: 2;
  outline: none;
  @media (max-width: 1017px) {
    left: 4%;
  }
  @media (max-width: 889px) {
    left: 5%;
  }
  @media (max-width: 633px) {
    left: 7%;
  }
  @media (max-width: 450px) {
    left: 8%;
  }
  visibility: hidden;
`;

export const AnotherArrowLeft = styled.i`
  background-image: url("https://image.flaticon.com/icons/svg/109/109617.svg");
  background-position: -6px 14px;
  background-size: 65px 27px;
  background-repeat: no-repeat;
  transform: rotate(180deg);
  display: block;
  width: 100%;
  height: 100%;
`;

export const AnotherArrowRight = styled.i`
  background-image: url("https://image.flaticon.com/icons/svg/109/109617.svg");
  background-position: -6px 14px;
  background-size: 65px 27px;
  background-repeat: no-repeat;
  display: block;
  width: 100%;
  height: 100%;
`;
