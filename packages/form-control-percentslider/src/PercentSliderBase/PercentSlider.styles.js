import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export const Value = styled('div')`
  font-weight: 500;
  font-size: 14px;
  margin-right: 12px;
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};
  color: ${(p) => getTheme(p.theme, 'colors.primary')};
  flex-shrink: 0;
  width: 38px;
`;

export const SliderWrapper = styled('div')`
  width: 100%;
  .rc-slider .rc-slider-track {
    background-color: ${(p) => getTheme(p.theme, 'colors.primary')};
  }
  .rc-slider .rc-slider-handle {
    border: solid 2px ${(p) => getTheme(p.theme, 'colors.primary')};
  }
`;

export const Wrapper = styled('div')`
  display: flex;
  .rc-slider {
    margin: 10px 0px 10px 6px;
    height: 8px;
    background-color: transparent !important;
    border-top: none !important;
    border-bottom: none !important;
  }

  .rc-slider:hover {
    background-color: transparent !important;
  }

  .rc-slider-rail {
    height: 2px !important;
    background-color: ${(p) => getTheme(p.theme, 'colors.darkerBackground')} !important;
    top: 0 !important;
    left: 0 !important;
  }

  .rc-slider-track {
    height: 2px !important;
    background-color: ${(p) => getTheme(p.theme, 'colors.primary')} !important;
    top: 0 !important;
  }

  .rc-slider-step {
    height: 2px !important;
    top: 0 !important;
  }

  .rc-slider-handle {
    position: relative;
    margin-top: -7px !important;
    width: 8px !important;
    height: 8px !important;
    border: none !important;
    border-radius: 50%;
    background-color: ${(p) => getTheme(p.theme, 'colors.primary')} !important;
    outline: none !important;
    box-shadow: 0 0 0 1px ${(p) => getTheme(p.theme, 'colors.primary')};

    transition: box-shadow 0.2s ease-out !important;
    will-change: box-shadow;
  }

  .rc-slider-handle:hover {
    box-shadow: 0 0 0 6px ${(p) => getTheme(p.theme, 'colors.primary')};
    transform: scale(1) !important;
  }

  .rc-slider-disabled .rc-slider-rail {
    background-color: #e9e9e9 !important;
  }

  .rc-slider-disabled .rc-slider-handle {
    background-color: #efefef !important;
  }

  .rc-slider-mark {
    top: auto !important;
    bottom: 22px !important;
    left: -6px !important;
    width: calc(100% + 6px) !important;

    display: flex;
    justify-content: space-between;
  }

  .rc-slider-mark-text {
    font-size: 12px;
    font-weight: 500;
    font-family: 'Gotham Pro', Helvetica, Arial;
    letter-spacing: -0.1px;
    color: rgba(155, 155, 155, 0.5) !important;

    width: auto !important;
    margin-left: 0 !important;
    position: relative !important;
    left: auto !important;
  }

  .rc-slider-mark-text-active {
    color: ${(p) => getTheme(p.theme, 'colors.primary')} !important;
  }

  .rc-slider-dot {
    display: none;
    top: -1px !important;
    width: 4px !important;
    height: 4px !important;
    border: none !important;
    background-color: rgba(75, 134, 198, 0.5) !important;
  }

  .rc-slider-dot-active {
    background-color: ${(p) => getTheme(p.theme, 'colors.primary')} !important;
  }
`;
