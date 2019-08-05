import styled, { css } from 'react-emotion';

export const flickityStyle = css`
  &:focus {
    outline: none !important;
  }
`;

export const Control = styled('div')`
  top: 0;
  bottom: 0;
  padding: 0 0px;
  ${p => (p.position === 'left' && css`
    left: 0;
    transform: rotate(180deg);
  `)}
  ${p => (p.position === 'right' && css`right: 0;`)}
  opacity: ${p => (p.visible ? 1 : 0.5)};
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 1;
`;

export const Wrapper = styled('div')`
  position: relative;
`;
