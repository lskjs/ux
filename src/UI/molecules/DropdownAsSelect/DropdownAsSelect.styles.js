import styled, { css } from 'react-emotion';
import Popover from 'react-bootstrap/lib/Popover'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';

export const Overlay = styled(OverlayTrigger)`
  width: ${p => (p.witdth || 198)}px;
`;

export const Content = styled(Popover)`
  width: ${p => (p.witdth || 198)}px;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.24);
  background-color: ${p => p.theme.colors.white};
  border: none;
  margin-top: 0 !important;
  
  &.fade {
    &:not(.show) {
      opacity: 1 !important;
    }
  }
  
  > .arrow {
    display: none;
  }
  
  > .popover-content {
    padding: 0;
  }
`;

export const Triangle = styled('div')`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid ${p => p.theme.colors.primary};
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto 19px;
`;


export const Trigger = styled('button')`
  width: ${p => (p.witdth || 198)}px;
  height: 48px;
  border-radius: 4px;
  font-size: 13px;
  text-align: left;
  letter-spacing: -0.1px;
  font-family: ${p => p.theme.fontFamily};
  background-color: ${p => p.theme.colors.white};
  border: 1px solid ${p => (p.open ? p.theme.colors.primary : p.theme.colors.border)};
  padding: 0;
  outline: none;
  position: relative;
  
  ${p => (p.open && css`
    ${Triangle} {
      transform: rotate(180deg);
    }
  `)}
`;
