import styled, { css } from 'react-emotion';
import removeProps from '@lskjs/utils/removeProps';
import getTheme from '@lskjs/theme/getTheme';

export const Wrapper = styled('div')`
  padding: 12px;
`;

export const Values = styled('div')`
  margin: 12px -13px;
`;

export const ValueItem = styled(removeProps('button', ['align']))`
  border: none;
  outline: none;
  padding: 0 12px;
  color: ${p => (p.disabled ? getTheme(p.theme, 'colors.secondary') : getTheme(p.theme, 'colors.main'))};
  background-color: ${p => getTheme(p.theme, 'colors.white')};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${p => p.align};
  text-align: left;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  height: 48px;

  font-size: 13px;
  letter-spacing: -0.1px;

  ${p => (!p.disabled && css`
    transition: color .2s ease, background-color .2s ease;
    will-change: color, background-color;
    &:hover {
      color: ${getTheme(p.theme, 'colors.primary')};
      background-color: ${getTheme(p.theme, 'colors.lighterPrimary')};
    }
  `)}
`;

export const outsideWrapperStyle = css`
  position: relative;
`;
