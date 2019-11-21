import styled, { css } from 'react-emotion';

export const flickityStyle = css`
  &:focus {
    outline: none !important;
  }
`;

export const Control = styled('div')`
  top: 0;
  /* bottom: 0; */
  padding: 0 0px;
  ${p => (p.position === 'left' && css`
    left: 20px;
    transform: rotate(180deg);
  `)}
  ${p => (p.position === 'right' && css`right: 20px;`)}
  opacity: ${p => (p.visible ? 1 : 0.5)};
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 1;
  bottom: ${p => (p.vertical ? css`${p.vertical}%` : 0)}
`;

export const Wrapper = styled('div')`
  position: relative;
`;

export const shadowStyle = css`
  box-shadow: 0 6px 8px -2px rgba(0, 0, 0, 0.16);

`;

export const ButtonsWrapper = styled('div')``;
