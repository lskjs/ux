import styled from 'react-emotion';

export const Container = styled.div`
  position: relative;

 .slick-slider {
  position: relative;

  display: block;
  box-sizing: border-box;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list {
  position: relative;

  display: block;
  overflow: hidden;

  margin: 0;
  padding: 0;

  height: 615px;
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
  position: relative;
  top: 0;
  left: 0;

  display: block;
  margin: 0 auto;
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
}
[dir="rtl"] .slick-slide {
  float: right;
}
.slick-slide img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
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
.slick-list h1, h2, h3, h4, h5, h6 {
  text-align: center;
}
.slick-track div:nth-child(1) {
  margin-right: 10px;
}
.slick-arrow {
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 34px;
  height: 34px;
  padding: 0;
  text-indent: -9999px;
  background-repeat: no-repeat;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
  }
  &.slick-prev {
    display: none;
    transform: translateX(-50%) translateX(-30px);
    z-index: 2;
    &:after {
      transform: translateX(-50%) translateX(-2px) translateY(-50%);
      border-width: 9px 12px 9px 0;
      border-color: transparent #fff transparent transparent;
    }
  }
  &.slick-next {
    transform: translateX(-50%) translateX(30px);
    z-index: 1;
    &:after {
      transform: translateX(-50%) translateX(2px) translateY(-50%);
      border-width: 9px 0 9px 12px;
      border-color: transparent transparent transparent #fff;
    }
  }
  &.slick-disabled {
    cursor: default;
    background: green;
    opacity: 0.5;
  }
}
.slides .slide {
  display: inline-block;
  padding: 10px 20px;
}
.slides .slide img {
  width: 100%;
  margin: 0 auto;
}

.hidden {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 100px;
  height: 100px;
  overflow: hidden;
}
.visible {
  width: 330px;
  background-size: 330px;
}

`;

export const ButtonRight = styled.button`
  position: absolute;
  top: 50%;
  right: 0%;
  border: none;
  background: #fff;
  padding: 20px;
  border-radius: 50%;
  cursor: pointer;
`;

