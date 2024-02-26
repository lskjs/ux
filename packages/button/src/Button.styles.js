/* eslint import/no-extraneous-dependencies: 0 */
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import removeProps from '@lskjs/utils/removeProps';
import getTheme from '@lskjs/theme/getTheme';

const iconLeft = css`
  margin-right: 8px;
`;

const iconRight = css`
  margin-left: 8px;
`;

const iconSingle = css`
  margin-left: 0;
  margin-right: 0;
`;

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const Text = styled('span')``;

export const Icon = styled('div')`
  display: flex;
  margin-top: 0;
  ${props => {
    switch (props.direction) {
      case 'left':
        return iconLeft;
      case 'right':
        return iconRight;
      case 'single':
        return iconSingle;
      default:
        return '';
    }
  }}

  ${props =>
    props.spin &&
    `
    > svg {
      animation: ${rotate} .6s linear infinite;
    }
  `}
`;

const xlargeSize = css`
  padding: 16px 17px;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.08;
  letter-spacing: -0.1px;
  min-width: 104px;
`;

const huge = css`
  padding: 19px 66px;
  font-size: 17px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: -0.2px;
  min-width: 104px;
`;

const largeSize = props => css`
  ${props.new
    ? `
    padding: 15px 16px;
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.08;
    letter-spacing: -0.1px;
  `
    : `
    padding: 17px 16px;
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.08;
    letter-spacing: -0.1px;
  `}
`;

const defaultSize = css`
  padding: 13px 11px;
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.08;
  letter-spacing: -0.1px;
  min-width: 104px;
`;

const verySmallSize = css`
  padding: 9.5px 8px;
  min-width: 48px;

  font-size: 11px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.08461539px;
`;

const smallSize = css`
  padding: 10px 12px;
  min-width: 48px;

  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.1px;
`;

const xsmallSize = css`
  padding: 5px 8px;
  min-width: 48px;
  height: 22px;
  font-weight: 600;

  font-size: 11px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.1px;
`;

const iconButtonLeft = props => css`
  display: ${props.block ? 'flex' : 'inline-flex'};
  align-items: center;
  ${props.size === 'large' &&
    `
    padding-left: 9px;
    padding-top: 9px;
    padding-bottom: 9px;

    ${Icon} {
      font-size: 24px;
    }
  `}
  ${props.size === 'default' &&
    `
    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: 12px;

    ${Icon} {
      font-size: 18px;
    }
  `}
  ${props.size === 'small' &&
    `
    padding-left: 6.35px;
    padding-top: 6px;
    padding-bottom: 6px;

    ${Icon} {
      font-size: 24px;
    }
  `}
`;

const iconButtonRight = props => css`
  display: ${props.block ? 'flex' : 'inline-flex'};
  align-items: center;
  ${props.paint === 'primaryText' &&
    `
    padding-top: 11px !important;
    padding-bottom: 11px !important;
    ${Icon} {
      margin: 0;
      font-size: 18px;
    }
  `}
  ${props.size === 'large' &&
    `
    padding-top: 9px;
    padding-bottom: 9px;
    padding-right: 9px;

    ${Icon} {
      font-size: 24px;
    }
  `}
  ${props.size === 'default' &&
    `
    padding-right: 14px;
    padding-top: 11px;
    padding-bottom: 11px;

    ${Icon} {
      font-size: 18px;
    }
  `}
  ${props.size === 'small' &&
    `
    padding-top: 6px;
    padding-bottom: 6px;
    padding-right: 8px;

    ${Icon} {
      font-size: 24px;
    }
  `}
`;

const iconButtonSingle = props => css`
  display: ${props.block ? 'flex' : 'inline-flex'};
  align-items: center;
  ${props.size === 'large' &&
    `
    padding-top: 6px !important;
    padding-bottom: 6px !important;
    padding-right: 6px !important;
    padding-left: 6px !important;

    ${Icon} {
      font-size: 26px;
    }
  `}
  ${props.size === 'default' &&
    `
    padding-top: 12px !important;
    padding-bottom: 12px !important;
    padding-right: 12px !important;
    padding-left: 12px !important;

    ${Icon} {
      font-size: 16px;
    }
  `}
  ${props.size === 'small' &&
    `
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 8px;
    padding-left: 8px;

    ${Icon} {
      font-size: 20px;
    }
  `}
`;

const viewSolidDisabled = css`
  background-color: rgb(242, 243, 250) !important;
  color: rgb(205, 205, 205) !important;
  &:hover,
  &:active,
  &:focus {
    background-color: rgb(243, 243, 243) !important;
    color: rgb(158, 158, 158) !important;
  }
`;

const viewBaseDisabled = css`
  background-color: rgb(242, 243, 250) !important;
  color: rgb(205, 205, 205) !important;
  &:hover,
  &:active,
  &:focus {
    background-color: rgb(243, 243, 243) !important;
    color: rgb(158, 158, 158) !important;
  }
`;

const defaultSolidTheme = props => css`
  color: ${getTheme(props.theme, 'colors.main')};
  background-color: #fff;

  &:hover {
    color: ${getTheme(props.theme, 'colors.main')};
    background-color: #fff;
  }

  &:active {
    color: ${getTheme(props.theme, 'colors.main')};
    background-color: #f0f0f0;
  }

  ${props.disabled &&
    `
    pointer-events: none;
    color: rgba(74, 74, 74, 0.5) !important;
    background-color: rgba(255, 255, 255, 0.5) !important;
    &:hover,
    &:focus,
    &:active {
      color: rgba(74, 74, 74, 0.5) !important;
      background-color: rgba(255, 255, 255, 0.5) !important;
    }
  `}
`;

const dangerBaseTheme = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.main')};
  background-color: ${getTheme(theme, 'colors.lighterGray')};

  &:hover {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.danger')};
  }

  &:focus {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.darkerDanger')};
  }

  &:active {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.danger')};
  }
`;

const warningBaseTheme = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.main')};
  background-color: ${getTheme(theme, 'colors.lighterGray')};

  &:hover {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.warning')};
  }

  &:focus {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.darkerWarning')};
  }

  &:active {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.warning')};
  }
`;

const successBaseTheme = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.main')};
  background-color: ${getTheme(theme, 'colors.lighterGray')};

  &:hover {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.success')};
  }

  &:focus {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.darkerSuccess')};
  }

  &:active {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.success')};
  }
`;

const primarySolidTheme = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.white')};
  background-color: ${getTheme(theme, 'colors.primary')};

  &:hover {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.darkPrimary')};
  }

  &:focus {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.focusPrimary')};
  }

  &:active {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.darkPrimary')};
  }
`;

const primaryTextSolidTheme = ({ theme }) => css`
  padding: 12.5px 8px;
  min-width: 76px;
  border-radius: 8px;
  font-size: 14px;

  color: ${getTheme(theme, 'colors.main')};
  background-color: transparent;

  &:hover {
    color: ${getTheme(theme, 'colors.primary')};
    background-color: ${getTheme(theme, 'colors.lighterPrimary')};
  }

  &:focus {
    color: ${getTheme(theme, 'colors.primary')};
    background-color: ${getTheme(theme, 'colors.lightPrimary')};
  }

  &:active {
    color: ${getTheme(theme, 'colors.primary')};
    background-color: ${getTheme(theme, 'colors.lighterPrimary')};
  }
`;

const dangerSolidTheme = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.white')};
  background-color: ${getTheme(theme, 'colors.danger')};

  &:hover {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.danger')};
  }

  &:active {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.darkDanger')};
  }
`;

const warningSolidTheme = ({ theme }) => css`
  color: #4a4a4a;
  background-color: ${getTheme(theme, 'colors.warning')};

  &:hover {
    color: #4a4a4a;
    background-color: ${getTheme(theme, 'colors.darkWarning')};
  }

  &:active {
    color: #4a4a4a;
    background-color: ${getTheme(theme, 'colors.darkWarning')};
  }
`;

const infoSolidTheme = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.white')};
  background-color: ${getTheme(theme, 'colors.primary')};

  &:hover {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.darkPrimary')};
  }

  &:active {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.darkPrimary')};
  }
`;

const successSolidTheme = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.white')};
  background-color: ${getTheme(theme, 'colors.success')};

  &:hover {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.darkSuccess')};
  }

  &:active {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.darkSuccess')};
  }
`;

const commonSolidTheme = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.main')};
  background-color: ${getTheme(theme, 'colors.lighterGray')};

  &:hover {
    color: ${getTheme(theme, 'colors.main')};
    background-color: ${getTheme(theme, 'colors.darkerGray')};
  }
  &:focus {
    color: ${getTheme(theme, 'colors.main')};
    background-color: ${getTheme(theme, 'colors.darkestGray')};
  }
  &:active {
    color: ${getTheme(theme, 'colors.main')};
    background-color: ${getTheme(theme, 'colors.darkerGray')};
  }
`;

const viewTextDisabled = props => css`
  pointer-events: none;
  /* color: rgba(74, 74, 74, 0.5) !important; */
  ${props.bordered &&
    `
    background-color: rgb(242, 243, 250) !important;
    box-shadow: none;
  `}
  color: rgb(205,205,205) !important;
  &:hover,
  &:active {
    color: rgba(74, 74, 74, 0.5) !important;
    background-color: transparent !important;
  }
  &:focus {
    color: rgba(74, 74, 74, 0.5) !important;
    background-color: rgba(155, 155, 155, 0.12) !important;
  }
`;

const defaultTextTheme = props => css`
  color: ${getTheme(props.theme, 'colors.main')};
  background-color: transparent;

  &:hover {
    color: ${getTheme(props.theme, 'colors.main')};
    background-color: rgba(130, 130, 139, 0.08);
  }

  &:active {
    color: ${getTheme(props.theme, 'colors.main')};
    background-color: rgba(130, 130, 139, 0.08);
  }
`;

const commonTextTheme = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.main')};
  background-color: transparent;

  &:hover {
    color: ${getTheme(theme, 'colors.main')};
    background-color: ${getTheme(theme, 'colors.lighterGray')};
  }
  &:focus {
    color: ${getTheme(theme, 'colors.main')};
    background-color: ${getTheme(theme, 'colors.darkerGray')};
  }
  &:active {
    color: ${getTheme(theme, 'colors.main')};
    background-color: ${getTheme(theme, 'colors.lighterGray')};
  }
`;

const primaryTextTheme = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.primary')};
  background-color: transparent;

  &:hover {
    color: ${getTheme(theme, 'colors.primary')};
    background-color: ${getTheme(theme, 'colors.lighterPrimary')};
  }

  &:focus {
    color: ${getTheme(theme, 'colors.primary')};
    background-color: ${getTheme(theme, 'colors.focusPrimaryText')};
  }

  &:active {
    color: ${getTheme(theme, 'colors.primary')};
    background-color: ${getTheme(theme, 'colors.lighterPrimary')};
  }
`;

const dangerTextTheme = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.danger')};
  background-color: ${getTheme(theme, 'colors.white')};

  &:hover {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.danger')};
  }

  &:active {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.danger')};
  }
`;

const warningTextTheme = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.warning')};
  background-color: transparent;

  &:hover {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.warning')};
  }

  &:active {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.warning')};
  }
`;

const infoTextTheme = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.primary')};
  background-color: transparent;

  &:hover {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.primary')};
  }

  &:active {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.primary')};
  }
`;

const successTextTheme = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.success')};
  background-color: transparent;

  &:hover {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.success')};
  }

  &:active {
    color: ${getTheme(theme, 'colors.white')};
    background-color: ${getTheme(theme, 'colors.success')};
  }
`;

const viewTransparentDisabled = css`
  pointer-events: none;
  color: rgba(255, 255, 255, 0.5) !important;
  background-color: transparent !important;
  &:hover,
  &:active {
    color: rgba(255, 255, 255, 0.5) !important;
    background-color: transparent !important;
  }
  &:focus {
    color: rgba(255, 255, 255, 0.5) !important;
    background-color: rgba(255, 255, 255, 0.16) !important;
  }
`;

const viewTransparentDisabledDark = css`
  pointer-events: none;
  color: rgba(0, 0, 0, 0.5) !important;
  background-color: transparent !important;
  &:hover,
  &:active {
    color: rgba(0, 0, 0, 0.5) !important;
    background-color: transparent !important;
  }
  &:focus {
    color: rgba(0, 0, 0, 0.5) !important;
    background-color: rgba(0, 0, 0, 0.16) !important;
  }
`;

const viewYoutubeDisabled = ({ theme }) => css`
  pointer-events: none;
  padding: 11px 8px;
  color: ${getTheme(theme, 'colors.gray')} !important;
  background-color: transparent !important;
  &:hover,
  &:active {
    color: rgba(0, 0, 0, 0.5) !important;
    background-color: transparent !important;
  }
  &:focus {
    color: rgba(0, 0, 0, 0.5) !important;
    background-color: rgba(0, 0, 0, 0.16) !important;
  }
`;

const viewEmptyDisabled = ({ theme }) => css`
  pointer-events: none;
  padding: 11px 0px;
  color: ${getTheme(theme, 'colors.gray')} !important;
  background-color: transparent !important;
  &:hover,
  &:active {
    color: rgba(0, 0, 0, 0.5) !important;
    background-color: transparent !important;
  }
  &:focus {
    color: rgba(0, 0, 0, 0.5) !important;
    background-color: rgba(0, 0, 0, 0.16) !important;
  }
`;

const shadowTheme = ({ theme }) => css`
  padding: 20px !important;
  color: ${getTheme(theme, 'colors.main')};
  box-shadow: 0 6px 8px 0 rgba(0, 0, 0, 0.16);

  &:hover {
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.2);
    background-color: ${getTheme(theme, 'colors.white')};
    color: ${getTheme(theme, 'colors.primary')};
  }

  &:focus {
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.2);
    background-color: ${getTheme(theme, 'colors.lighterPrimary')};
    color: ${getTheme(theme, 'colors.primary')};
  }
`;

const youtubeTheme = ({ theme }) => css`
  padding: 11px 8px;
  color: ${getTheme(theme, 'colors.main')};

  &:hover {
    background-color: ${getTheme(theme, 'colors.lighterGray')};
    color: ${getTheme(theme, 'colors.main')};
  }

  &:focus {
    background-color: ${getTheme(theme, 'colors.darkerGray')};
    color: ${getTheme(theme, 'colors.main')};
  }
`;

const emptyPrimaryTheme = ({ theme }) => css`
  padding: 11px 0;
  background-color: transparent;
  color: ${getTheme(theme, 'colors.primary')};

  &:hover {
    color: ${getTheme(theme, 'colors.darkestPrimary')};
  }

  &:focus {
    color: ${getTheme(theme, 'colors.focusPrimary')};
  }
`;

const emptyCommonTheme = ({ theme }) => css`
  padding: 11px 0;
  background-color: transparent;
  color: ${getTheme(theme, 'colors.main')};

  &:hover {
    color: ${getTheme(theme, 'colors.darkestPrimary')};
  }

  &:focus {
    color: ${getTheme(theme, 'colors.focusPrimary')};
  }
`;

const transparentTheme = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.white')};
  background-color: transparent;

  &:hover {
    color: ${getTheme(theme, 'colors.white')};
    background-color: rgba(255, 255, 255, 0.16);
  }

  &:active {
    color: ${getTheme(theme, 'colors.white')};
    background-color: rgba(255, 255, 255, 0.16);
  }
`;

const transparentThemeDark = ({ theme }) => css`
  color: ${getTheme(theme, 'colors.main')};
  background-color: transparent;

  &:hover {
    color: ${getTheme(theme, 'colors.main')};
    background-color: rgba(0, 0, 0, 0.16);
  }

  &:active {
    color: ${getTheme(theme, 'colors.main')};
    background-color: rgba(0, 0, 0, 0.16);
  }
`;

export const getStyles = props => {
  if (props.disabled) {
    switch (props.view) {
      case 'solid':
        return viewSolidDisabled;
      case 'text':
        return viewTextDisabled;
      case 'base':
        return viewBaseDisabled;
      case 'transparent':
        return viewTransparentDisabled;
      case 'transparentDark':
        return viewTransparentDisabledDark;
      case 'youtube':
        return viewYoutubeDisabled;
      case 'empty':
        return viewEmptyDisabled;
      default:
        return '';
    }
  } else if (props.view === 'solid') {
    switch (props.paint) {
      case 'primary':
        return primarySolidTheme;
      case 'info':
        return infoSolidTheme;
      case 'warning':
        return warningSolidTheme;
      case 'danger':
        return dangerSolidTheme;
      case 'success':
        return successSolidTheme;
      case 'common':
        return commonSolidTheme;
      case 'transparent':
        return transparentTheme;
      case 'transparentDark':
        return transparentThemeDark;
      case 'primaryText':
        return primaryTextSolidTheme;
      default:
        return defaultSolidTheme;
    }
  } else if (props.view === 'text') {
    switch (props.paint) {
      case 'primary':
        return primaryTextTheme;
      case 'info':
        return infoTextTheme;
      case 'warning':
        return warningTextTheme;
      case 'danger':
        return dangerTextTheme;
      case 'success':
        return successTextTheme;
      case 'common':
        return commonTextTheme;
      case 'transparent':
        return transparentTheme;
      case 'transparentDark':
        return transparentThemeDark;
      default:
        return defaultTextTheme;
    }
  } else if (props.view === 'base') {
    switch (props.paint) {
      // case 'primary': return primaryBaseTheme;
      // case 'info': return infoBaseTheme;
      case 'warning':
        return warningBaseTheme;
      case 'danger':
        return dangerBaseTheme;
      case 'success':
        return successBaseTheme;
      case 'transparent':
        return transparentTheme;
      case 'transparentDark':
        return transparentThemeDark;
      default:
        return '';
    }
  } else if (props.view === 'youtube') {
    return youtubeTheme;
  } else if (props.view === 'shadow') {
    return shadowTheme;
  } else if (props.view === 'empty') {
    switch (props.paint) {
      case 'primary':
        return emptyPrimaryTheme;
      case 'common':
        return emptyCommonTheme;
      default:
        return emptyPrimaryTheme;
    }
  } else if (props.view === 'transparent') {
    return transparentTheme;
  } else {
    return '';
  }
};

export const Btn = styled('button', {
  shouldForwardProp: prop =>
    ![
      'as',
      'new',
      'iconDirection',
      'paint',
      'view',
      'size',
      'block',
      'auto',
      'onlyIcon',
      'twoIcons',
      'bordered',
      'borderColor',
      'rounded',
      'mobileView',
      'title',
      'titlemobile',
    ].includes(prop),
})`
  background-color: ${p => getTheme(p.theme, 'colors.white')};
  border: none;
  box-shadow: ${p => (p.bordered && p.borderColor && `0 0 0 1px ${p.borderColor}`) || (p.bordered && '0 0 0 1px')};
  outline: none;
  border-radius: ${p => (p.rounded ? getTheme(p.theme, 'borderCircle') : getTheme(p.theme, 'borderSmall'))};
  overflow: hidden;
  position: relative;
  text-align: center;
  justify-content: center;
  -webkit-appearance: none !important;
  text-decoration: none !important;
  display: ${p => (p.block ? 'block' : 'inline-block')};

  ${props =>
    props.twoIcons &&
    `
    padding-top: 8.5px !important;
    padding-bottom: 8.5px !important;
  `}

  ${props => {
    if (props.auto) {
      return css`
        @media screen and (max-width: 768px) {
          ${Text} {
            display: none;
          }
          ${Icon} {
            margin-left: 0;
          }
          display: ${props.block ? 'flex' : 'inline-flex'};
          align-items: center;
          ${props.size === 'extraLarge' &&
            css`
              padding-top: 9px;
              padding-bottom: 9px;
              padding-right: 9px;
              padding-left: 9px;

              ${Icon} {
                font-size: 24px;
              }
            `}
          ${props.size === 'large' &&
            css`
              padding-top: 9px;
              padding-bottom: 9px;
              padding-right: 9px;
              padding-left: 9px;

              ${Icon} {
                font-size: 24px;
              }
            `}
          ${props.size === 'default' &&
            css`
              padding-top: 8px;
              padding-bottom: 8px;
              padding-right: 8px;
              padding-left: 8px;

              ${Icon} {
                font-size: 22px;
              }
            `}
          ${props.size === 'small' &&
            css`
              padding-top: 6px;
              padding-bottom: 6px;
              padding-right: 6px;
              padding-left: 6px;

              ${Icon} {
                font-size: 20px;
              }
            `}
          ${props.size === 'verySmall' &&
            css`
              padding-top: 5px;
              padding-bottom: 5px;
              padding-right: 5px;
              padding-left: 5px;

              ${Icon} {
                font-size: 18px;
              }
            `}
          ${props.size === 'extraSmall' &&
            css`
              padding-top: 3px;
              padding-bottom: 3px;
              padding-right: 3px;
              padding-left: 3px;

              ${Icon} {
                font-size: 16px;
              }
            `}
          padding: 11px 12px;
          min-width: auto;
          border-radius: 100px;
        }
      `;
    }
    return '';
  }}
  font-family: ${p => getTheme(p.theme, 'fontFamily')};

  transition: color .2s ease, background-color .2s ease;
  will-change: color, background-color;

  &:hover {
    cursor: pointer;
  }
  ${props => {
    switch (props.size) {
      case 'large':
        return largeSize;
      case 'small':
        return smallSize;
      case 'verySmall':
        return verySmallSize;
      case 'extraSmall':
        return xsmallSize;
      case 'extraLarge':
        return xlargeSize;
      case 'huge':
        return huge;
      default:
        return defaultSize;
    }
  }}
  ${props => {
    switch (props.iconDirection) {
      case 'left':
        return iconButtonLeft;
      case 'right':
        return iconButtonRight;
      case 'single':
        return iconButtonSingle;
      default:
        return '';
    }
  }}
  ${getStyles}
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed !important;
      pointer-events: none !important;
    `}
  ${props =>
    props.block &&
    `
    width: 100%;
  `}
  ${props =>
    props.block &&
    props.twoIcons &&
    css`
      ${Icon} {
        &:not(:last-child) {
          margin-right: auto !important;
        }
        &:last-child {
          margin-left: auto !important;
        }
      }
    `}
  ${props =>
    props.block &&
    props.iconDirection === 'right' &&
    css`
      margin-left: auto;
    `}
  ${props =>
    props.onlyIcon &&
    css`
      min-width: auto;
      border-radius: 50px;
      @media screen and (max-width: 767px) {
        cursor: default;
        border-radius: ${props.shape === 'square' && 4}px;
      }
    `}
  /* ${props =>
    props.view === 'transparent' &&
    props.state === 'processing' &&
    `
    color: transparent !important;
  `} */
  pointer-events: ${p => (p.state !== 'ready' ? 'none' : 'auto')};
  ${p => css`
    color: ${getTheme(p, 'colors.color')};
    background-color: ${getTheme(p, 'colors.background')};
    &:hover {
      color: ${getTheme(p, 'colors.hoverColor')};
      background-color: ${getTheme(p, 'colors.hoverBackground')};
    }
    &:active {
      color: ${getTheme(p, 'colors.activeColor')};
      background-color: ${getTheme(p, 'colors.activeBackground')};
    }
  `}
  ${p =>
    p.mobileView &&
    css`
      @media screen and (max-width: 767px) {
        ${Text} {
          display: none;
        }
        ${Icon} {
          margin-left: ${p.iconDirection === 'right' && '4px'};
          margin-right: ${p.iconDirection === 'left' && '4px'};
        }
        padding-right: 9px;
        padding-left: 9px;
        min-width: unset;
      }
    `}
`;

export const RippleCircle = styled('span')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  width: 0;
  height: 0;
  border-radius: ${p => getTheme(p.theme, 'borderCircle')};
  background: rgba(0, 0, 0, 0.1);
`;

const aRipple = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  100% {
    width: 200%;
    padding-bottom: 200%;
    opacity: 0;
  }
`;

export const Ripple = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
  ${props =>
    props.active &&
    css`
      ${RippleCircle} {
        animation: ${aRipple} 0.4s ease-in;
      }
    `}
`;

export const State = styled('div')`
  position: absolute;
  display: block;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  cursor: default !important;
  border-radius: ${p => (p.rounded ? getTheme(p.theme, 'borderCircle') : getTheme(p.theme, 'borderSmall'))};
  pointer-events: ${p => (p.state !== 'ready' ? 'none' : 'auto')};
  ${props => {
    if (props.bordered) {
      return css`
        box-shadow: inset 0 0 0 1px #fff;
      `;
    }
    return '';
  }}

  opacity: ${p => (p.visible ? 1 : 0)};
  visibility: ${p => (p.visible ? 'visible' : 'hidden')};

  transition: color .2s ease-in-out,
              background-color .2s ease-in-out,
              opacity .2s ease-in-out,
              visibility .2s ease-in-out;
  will-change: background-color, color, opacity, visibility;

  justify-content: center;
  ${props => {
    switch (props.iconDirection) {
      case 'left':
        return iconButtonLeft;
      case 'right':
        return iconButtonRight;
      case 'single':
        return iconButtonSingle;
      default:
        return '';
    }
  }}
  ${props => {
    switch (props.size) {
      case 'large':
        return largeSize;
      case 'small':
        return smallSize;
      case 'extraSmall':
        return xsmallSize;
      default:
        return defaultSize;
    }
  }}
  ${props => {
    switch (props.paint) {
      case 'primary':
        return primarySolidTheme;
      case 'info':
        return infoSolidTheme;
      case 'warning':
        return warningSolidTheme;
      case 'danger':
        return dangerSolidTheme;
      case 'common':
        return commonSolidTheme;
      case 'success':
        return successSolidTheme;
      case 'primaryText':
        return primaryTextSolidTheme;
      default:
        return defaultSolidTheme;
    }
  }}
  /* ${props =>
    props.view === 'transparent' &&
    props.state === 'processing' &&
    `
    background-color: transparent !important;
  `} */

`;

// РЕАЛИЗОВАТЬ
// https://github.com/twbs/bootstrap/blob/ff29c1224c20b8fcf2d1e7c28426470f1dc3e40d/scss/_button-group.scss
export const ButtonGroup = styled('div')`
  width: 100%;
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  flex-wrap: wrap;
  ${p =>
    p.padded &&
    css`
      ${Btn} {
        margin: 5px;
        flex: 1 1 auto;
      }
    `}
  @media screen and (max-width: 767px) {
    ${p =>
      p.block &&
      css`
        flex-direction: column;
      `}
    ${Btn} {
      margin: 8px 0 8px 0;
    }
  }
  ${p =>
    p.panel &&
    css`
    button {
      min-width: 72px;
      font-size: 11px;
      line-height: 1.41;
      /* box-shadow: 0 0 0 1px ${getTheme(p.theme, 'colors.border')}; */
      &:first-of-type {
        border-radius: 4px 0 0 4px;
      }
      &:last-child {
        border-radius: 0 4px 4px 0;
      }
      border-radius: 0;
    }
`}
  /* ${p =>
    !p.panel &&
    css`
      ${Btn} {
        margin: 0 4px;
        &:first-child {
          margin-left: 0;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    `} */

  & > * {
    position: relative;
    ${p =>
      p.block &&
      css`
        flex: 1 1 auto;
      `}

    /* @include hover {
      z-index: 1;
    } */
    &:focus,
    &:active,
    &.active {
      z-index: 1;
    }
  }
`;
