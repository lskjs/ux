import styled from 'react-emotion';

export const Container = styled.div`
  position: relative;
  margin: 5px;
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
    margin: 5px;
  }
  [dir="rtl"] .slick-slide {
    float: right;
  }
  .slick-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
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

  /* .slides .slide img {
    max-width: 100%;
    object-fit: cover;
  } */

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

export const ButtonRight = styled.button`
  width: 56px;
  height: 56px;
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 37%;
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

export const ButtonLeft = styled.button`
  background-color: #ffffff;
  border-radius: 50%;
  position: absolute;
  top: 37%;
  right: 2%;
  border: none;
  width: 56px;
  height: 56px;
  box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  background-repeat: no-repeat;
  border-radius: 50%;
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

export const ArrowLeft = styled.i`
  background-image: url("https://image.flaticon.com/icons/svg/109/109617.svg");
  background-position: -6px 14px;
  background-size: 65px 27px;
  background-repeat: no-repeat;
  transform: rotate(180deg);
  display: block;
  width: 100%;
  height: 100%;
`;

export const ArrowRight = styled.i`
  background-image: url("https://image.flaticon.com/icons/svg/109/109617.svg");
  background-position: -6px 14px;
  background-size: 65px 27px;
  background-repeat: no-repeat;
  display: block;
  width: 100%;
  height: 100%;
`;


export const Wrapper = styled.article(({ itemWidth = '200px', itemHeight = '200px' }) => ({
  margin: '0 auto',
  height: itemHeight,
  width: itemWidth,
}));

export const ItemSlider = styled.div`
  margin: 5px;
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
