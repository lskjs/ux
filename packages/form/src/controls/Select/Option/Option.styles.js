import styled, { css } from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';
import removeProps from '@lskjs/utils/removeProps';

export const OptionItem = styled('button')`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
  border: none;
  height: 48px;
  padding-left: 8px;
  z-index: 111111;

  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  background-color: ${p => (p.focused ? getTheme(p.theme, 'colors.lighterPrimary') : getTheme(p.theme, 'colors.white'))};
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 3.6;
  letter-spacing: -0.1px;
  color: ${p => getTheme(p.theme, 'colors.main')};
  &:focus{
    background-color: ${p => getTheme(p.theme, 'colors.lighterPrimary')} !important;
    color: ${p => getTheme(p.theme, 'colors.main')};
  }
  &:hover {
    background-color: ${p => getTheme(p.theme, 'colors.lighterPrimary')} !important;
    color: ${p => getTheme(p.theme, 'colors.main')};
  }
  ${p => (p.selected && css`
    background-color: ${getTheme(p.theme, 'colors.white')} !important;
    color: ${getTheme(p.theme, 'colors.primary')} !important;
  `)}
`;

export const Image = styled('img')`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  flex-shrink: 0;
`;


export const Title = styled('div')`
  margin-left: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const filteredTag = removeProps('div', ['color']);
export const IconWrapper = styled(filteredTag)`
  font-size: 24px;
  color: ${p => p.color};
  display: inline-flex;
  margin-left: 8px;
`;
