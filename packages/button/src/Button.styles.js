/* eslint import/no-extraneous-dependencies: 0 */
import styled, { css, keyframes } from 'react-emotion';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import removeProps from '@lskjs/utils/removeProps';
import getTheme from '@lskjs/theme/getTheme';

const iconLeft = css`
  margin-right: 10px;
`;

const iconRight = css`
  margin-left: 13px;
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

export const Text = styled('span')`

`;


export const Icon = styled('div')`
  display: flex;
  margin-top: 0;
  ${(props) => {
    switch (props.direction) {
      case 'left': return iconLeft;
      case 'right': return iconRight;
      case 'single': return iconSingle;
      default: return '';
    }
  }}

  ${props => (props.spin && `
    > svg {
      animation: ${rotate} .6s linear infinite;
    }
  `)}
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

const largeSize = props => css`
  ${props.new ? `
    padding: 15px 16px;
    font-size: 13px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.08;
    letter-spacing: -0.1px;
  ` : `
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
  padding: 13px 16px;
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.08;
  letter-spacing: -0.1px;
  min-width: 104px;
`;

const smallSize = css`
  padding: 10px 8px;
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
  ${props.size === 'large' && `
    padding-left: 9px;
    padding-top: 9px;
    padding-bottom: 9px;

    ${Icon} {
      font-size: 24px;
    }
  `}
  ${props.size === 'default' && `
    padding-top: 11px;
    padding-bottom: 11px;
    padding-left: 12px;

    ${Icon} {
      font-size: 18px;
    }
  `}
  ${props.size === 'small' && `
    padding-left: 5px;
    padding-top: 5px;
    padding-bottom: 5px;

    ${Icon} {
      font-size: 24px;
    }
  `}
`;

const iconButtonRight = props => css`
  display: ${props.block ? 'flex' : 'inline-flex'};
  align-items: center;
  ${props.size === 'large' && `
    padding-top: 9px;
    padding-bottom: 9px;
    padding-right: 9px;

    ${Icon} {
      font-size: 24px;
    }
  `}
  ${props.size === 'default' && `
    padding-right: 14px;
    padding-top: 13px;
    padding-bottom: 13px;

    ${Icon} {
      font-size: 12px;
    }
  `}
  ${props.size === 'small' && `
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
  ${props.size === 'large' && `
    padding-top: 6px !important;
    padding-bottom: 6px !important;
    padding-right: 6px !important;
    padding-left: 6px !important;

    ${Icon} {
      font-size: 26px;
    }
  `}
  ${props.size === 'default' && `
    padding-top: 12px !important;
    padding-bottom: 12px !important;
    padding-right: 12px !important;
    padding-left: 12px !important;

    ${Icon} {
      font-size: 16px;
    }
  `}
  ${props.size === 'small' && `
    padding-top: 8px !important;
    padding-bottom: 8px !important;
    padding-right: 8px !important;
    padding-left: 8px !important;

    ${Icon} {
      font-size: 20px;
    }
  `}
`;


const viewSolidDisabled = css`
  background-color: rgb(243, 243, 243) !important;
  color: rgb(158, 158, 158) !important;
  &:hover,
  &:active,
  &:focus {
    background-color: rgb(243, 243, 243) !important;
    color: rgb(158, 158, 158) !important;
  }
`;

const defaultSolidTheme = props => css`
  color: #4a4a4a;
  background-color: #fff;

  &:hover {
    color: #4a4a4a;
    background-color: #fff;
  }

  &:active {
    color: #4a4a4a;
    background-color: #f0f0f0;
  }

  ${props.disabled && `
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

const viewTextDisabled = css`
  pointer-events: none;
  color: rgba(74, 74, 74, 0.5) !important;
  background-color: transparent !important;
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

const defaultTextTheme = css`
  color: #4a4a4a;
  background-color: transparent;

  &:hover {
    color: #4a4a4a;
    background-color: rgba(130, 130, 139, 0.08);
  }

  &:active {
    color: #4a4a4a;
    background-color: rgba(130, 130, 139, 0.08);
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


const dynamicTag = createDynamicTag('button');
const filteredTag = removeProps(dynamicTag, [
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
]);

// Если убрать filteredTag, то появляются варнинги
export const Btn = styled(filteredTag)`
  background-color: #fff;
  border: none;
  box-shadow: ${p => ((p.bordered && p.borderColor && `0 0 0 1px ${p.borderColor}`) || (p.bordered && '0 0 0 1px'))};
  outline: none;
  border-radius: ${p => (p.rounded ? getTheme(p.theme, 'borderCircle') : getTheme(p.theme, 'borderSmall'))};
  overflow: hidden;
  position: relative;
  text-align: center;
  justify-content: center;
  -webkit-appearance: none !important;

  ${(props) => {
    if (props.auto) {
      return `
        @media screen and (max-width: 768px) {
          ${Text} {
            display: none;
          }
          ${Icon} {
            margin-left: 0;
          }
          display: ${props.block ? 'flex' : 'inline-flex'};
          align-items: center;
          ${props.size === 'extraLarge' && `
            padding-top: 9px;
            padding-bottom: 9px;
            padding-right: 9px;
            padding-left: 9px;

            ${Icon} {
              font-size: 24px;
            }
          `}
          ${props.size === 'large' && `
            padding-top: 9px;
            padding-bottom: 9px;
            padding-right: 9px;
            padding-left: 9px;

            ${Icon} {
              font-size: 24px;
            }
          `}
          ${props.size === 'default' && `
            padding-top: 8px;
            padding-bottom: 8px;
            padding-right: 8px;
            padding-left: 8px;

            ${Icon} {
              font-size: 22px;
            }
          `}
          ${props.size === 'small' && `
            padding-top: 6px;
            padding-bottom: 6px;
            padding-right: 6px;
            padding-left: 6px;

            ${Icon} {
              font-size: 20px;
            }

          `}
          ${props.size === 'extraSmall' && `
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
  ${(props) => {
    switch (props.size) {
      case 'large': return largeSize;
      case 'small': return smallSize;
      case 'extraSmall': return xsmallSize;
      case 'extraLarge': return xlargeSize;
      default: return defaultSize;
    }
  }}
  ${(props) => {
    switch (props.iconDirection) {
      case 'left': return iconButtonLeft;
      case 'right': return iconButtonRight;
      case 'single': return iconButtonSingle;
      default: return '';
    }
  }}
  ${(props) => {
    if (props.disabled) {
      switch (props.view) {
        case 'solid': return viewSolidDisabled;
        case 'text': return viewTextDisabled;
        case 'transparent': return viewTransparentDisabled;
        case 'transparentDark': return viewTransparentDisabledDark;
        default: return '';
      }
    } else if (props.view === 'solid') {
      switch (props.paint) {
        case 'primary': return primarySolidTheme;
        case 'info': return infoSolidTheme;
        case 'warning': return warningSolidTheme;
        case 'danger': return dangerSolidTheme;
        case 'success': return successSolidTheme;
        case 'transparent': return transparentTheme;
        case 'transparentDark': return transparentThemeDark;
        default: return defaultSolidTheme;
      }
    } else if (props.view === 'text') {
      switch (props.paint) {
        case 'primary': return primaryTextTheme;
        case 'info': return infoTextTheme;
        case 'warning': return warningTextTheme;
        case 'danger': return dangerTextTheme;
        case 'success': return successTextTheme;
        case 'transparent': return transparentTheme;
        case 'transparentDark': return transparentThemeDark;
        default: return defaultTextTheme;
      }
    } else if (props.view === 'transparent') {
      return transparentTheme;
    } else {
      return '';
    }
  }}
  ${props => (props.disabled && `
    cursor: not-allowed !important;
    pointer-events: none !important;
  `)}
  ${props => (props.block && `
    width: 100%;
  `)}
  ${props => ((props.block && props.twoIcons) && `
    ${Icon} {
      &:not(:last-child) {
        margin-right: auto !important;
      }
      &:last-child {
        margin-left: auto !important;
      }
    }
  `)}
  ${props => ((props.block && props.iconDirection === 'right') && `
    margin-left: auto;
  `)}
  ${props => (props.onlyIcon && `
    min-width: auto;
    border-radius: 50px;
  `)}
  /* ${props => ((props.view === 'transparent' && props.state === 'processing') && `
    color: transparent !important;
  `)} */
  pointer-events: ${p => (p.state !== 'ready' ? 'none' : 'auto')};
  ${p => `
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
  background: rgba(0, 0, 0, .10);
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
  ${props => (props.active && `
    ${RippleCircle} {
      animation: ${aRipple} .4s ease-in;
    }`
  )}
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
  ${(props) => {
    if (props.bordered) {
      return `
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
  ${(props) => {
    switch (props.iconDirection) {
      case 'left': return iconButtonLeft;
      case 'right': return iconButtonRight;
      case 'single': return iconButtonSingle;
      default: return '';
    }
  }}
  ${(props) => {
    switch (props.size) {
      case 'large': return largeSize;
      case 'small': return smallSize;
      case 'extraSmall': return xsmallSize;
      default: return defaultSize;
    }
  }}
  ${(props) => {
    switch (props.paint) {
      case 'primary': return primarySolidTheme;
      case 'info': return infoSolidTheme;
      case 'warning': return warningSolidTheme;
      case 'danger': return dangerSolidTheme;
      case 'success': return successSolidTheme;
      default: return defaultSolidTheme;
    }
  }}
  /* ${props => ((props.view === 'transparent' && props.state === 'processing') && `
    background-color: transparent !important;
  `)} */
`;


// РЕАЛИЗОВАТЬ
// https://github.com/twbs/bootstrap/blob/ff29c1224c20b8fcf2d1e7c28426470f1dc3e40d/scss/_button-group.scss
export const ButtonGroup = styled('div')`
  width: 100%;
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  flex-wrap: wrap;
  ${p => p.padded && css`
    ${Btn} {
      margin: 5px;
    }`}
  @media screen and (max-width: 768px) {
    ${p => p.block && css`
      flex-direction: column;`}
    ${Btn} {
      margin: 8px 0 8px 0;
    }
  }
  ${p => p.panel && css`
    button {
      &:first-child {
        border-radius: 3px 0 0 3px;
      }
      &:last-child {
        border-radius: 0 3px 3px 0;
      }
      border-radius: 0;
    }
  `}
  /* ${p => !p.panel && css`
    ${Btn} {
      margin: 0 4px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }`} */

  & > * {
    position: relative;
    ${p => p.block && css`
      flex: 1 1 auto;`}

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
