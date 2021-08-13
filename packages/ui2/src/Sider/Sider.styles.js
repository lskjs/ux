import styled from '@emotion/styled';

export const Wrapper = styled('div')`
  display: flex;
  align-items: ${(p) => p.verticalAlign};
  ${(p) => p.isOverflow && 'overflow: hidden;'}
  ${(p) => p.verticalView && 'flex-direction: column; align-items: center;'}
  ${(p) =>
    p.mobile &&
    `
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    `}
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const Left = styled('div')`
  width: auto;
  ${(p) =>
    p.centeringLeftBlock &&
    `
    display: flex;
    align-items: center;
  `}
  white-space: nowrap;
  margin-bottom: ${(p) => `${p.verticalGap}px`};
  margin-right: ${(p) => `${p.gap}px`};
  height: ${(p) => {
    if (p.height && typeof p.height === 'number') {
      return `${p.height}px`;
    }
    if (p.height && typeof p.height === 'string') {
      if (p.height === 'auto') {
        return 'auto';
      }
      return p.height;
    }
    return '100%';
  }};
`;

export const Right = styled('div')`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  ${(p) =>
    p.centeringRightBlock &&
    `
    display: flex;
    align-items: center;
  `}
  ${(p) =>
    p.isOverflow &&
    `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
  ${(p) =>
    p.mobile &&
    `
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 10px;
    }
  `}
`;
