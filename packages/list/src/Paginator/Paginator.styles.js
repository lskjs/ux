import { css } from '@emotion/core';

export default {
  containerStyle: css`
    font-family: 'Gotham Pro', Helvetica, Arial;
    display: flex;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    > li a {
      -webkit-tap-highlight-color: transparent;
    }
    > li:focus-visible,
    > li > a:focus-visible {
      outline: none;
    }
  `,

  pageStyle: css`
    box-sizing: border-box;

    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #9b9b9b;
    cursor: pointer;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.08;
    letter-spacing: -0.2px;
    &:hover {
      background-color: #dedeff;
      color: #1890ff;
    }
    @media screen and (max-width: 991px) {
      width: 32px;
      height: 32px;
      font-size: 13px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 3.08;
      letter-spacing: -0.1px;
    }
  `,

  activeStyle: css`
    box-sizing: border-box;

    width: 100%;
    min-width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1890ff;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.08;
    letter-spacing: -0.2px;
    padding: 0 4px;
    &:hover {
      background-color: #1890ff;
      color: #fff;
      box-shadow: 0 0 0 4px #dedeff;
    }
    &:focus {
      color: #fff;
    }
    @media screen and (max-width: 991px) {
      width: 32px;
      height: 32px;
      font-size: 13px;
      font-stretch: normal;
      font-style: normal;
      line-height: 3.08;
      letter-spacing: -0.1px;
      font-weight: 500;
    }
  `,

  breakStyle: css`
    box-sizing: border-box;

    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    user-select: none;
    pointer-events: none;
    cursor: default;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.08;
    letter-spacing: -0.2px;
    > a {
      color: #9b9b9b;
    }
    @media screen and (max-width: 991px) {
      width: 32px;
      height: 32px;
      font-size: 13px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 3.08;
      letter-spacing: -0.1px;
    }
  `,

  disabledStyle: css`
    box-sizing: border-box;

    > a {
      user-select: none;
      pointer-events: none;
      cursor: default;
      svg {
        color: #595959 !important;
      }
      > div {
        color: #595959 !important;

        @media screen and (max-width: 991px) {
          background-color: transparent;
        }
      }
    }
  `,

  wrapperStyle: css`
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;
  `,

  nextStyle: css`
    box-sizing: border-box;

    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.08;
    letter-spacing: -0.1px;
    color: #1890ff;
    cursor: pointer;
    &:active,
    &:hover {
      color: #40a9ff;
    }
    margin-left: 36px;
    @media screen and (max-width: 991px) {
      font-size: 13px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 3.08;
      letter-spacing: -0.1px;
      padding: 0;
      color: #1890ff;
      margin-left: 8px;
      svg {
        margin-left: 4px !important;
      }
    }
  `,

  prevStyle: css`
    box-sizing: border-box;

    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 3.08;
    letter-spacing: -0.1px;
    color: #1890ff;
    cursor: pointer;
    &:active,
    &:hover {
      color: #40a9ff;
    }
    margin-right: 36px;
    @media screen and (max-width: 991px) {
      margin-right: 12px;
      padding: 0;
      svg {
        margin: 4px !important;
      }
    }
  `,

  nextDesktopTitleStyle: css`
    box-sizing: border-box;

    display: block;
    display: flex;
    align-items: center;
    @media screen and (max-width: 991px) {
      display: none;
    }
  `,

  prevDesktopTitleStyle: css`
    box-sizing: border-box;

    display: block;
    display: flex;
    align-items: center;
    @media screen and (max-width: 991px) {
      display: none;
    }
  `,

  nextMobileTitleStyle: css`
    box-sizing: border-box;

    display: none;
    @media screen and (max-width: 991px) {
      display: block;
    }
  `,

  prevMobileTitleStyle: css`
    box-sizing: border-box;

    display: none;
    @media screen and (max-width: 991px) {
      display: block;
    }
  `,
};
