import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export const CheckboxView = styled('div')`
  display: flex;
  height: 24px;
  width: 24px;
  color: ${(p) =>
    p.isChecked ? `${getTheme(p.theme, 'colors.primary')} !important` : getTheme(p.theme, 'colors.veryLightGrey')};
  pointer-events: auto;

  will-change: color;
  transition: color 0.2s ease;

  > svg {
    display: flex;
  }
`;

export const Base = styled('div')`
  display: block;
  cursor: pointer;
  pointer-events: auto;
  user-select: none;
  min-width: 24px;
  min-height: 24px;
  padding: 15px 7px;

  &:hover ${CheckboxView} {
    color: ${(p) => getTheme(p.theme, 'colors.primary')};
  }
`;
