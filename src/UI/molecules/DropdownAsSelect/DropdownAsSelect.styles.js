import styled, { css } from 'react-emotion';

export const popperDisabledStyle = css`
  pointer-events: none;
`;

export const Content = styled('div')`
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.24);
  background-color: ${p => p.theme.colors.white};
  z-index: 1;
  height: ${p => p.height}px;
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
  width: 100%;
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
  
  ${p => (p.disabled && css`
    opacity: .5;
    pointer-events: none;
    cursor: not-allowed;
  `)}
  
  ${p => (p.open && css`
    ${Triangle} {
      transform: rotate(180deg);
    }
  `)}
`;
