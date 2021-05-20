import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export const Label = styled('div')`
  display: block;
  text-align: left;
  line-height: 1.71429;
  font-size: 12px;
  font-weight: 500;
  padding-bottom: 2px;
  color: ${(props) => getTheme(props.theme, props.hasError ? 'colors.danger' : 'colors.main')};
`;

export const Control = styled('div')`
  position: relative;
`;

export const Help = styled('div')`
  line-height: 1.5;
  font-size: 12px;
  padding-top: 4px;
  color: ${(props) => getTheme(props.theme, props.hasError ? 'colors.danger' : 'colors.main')};
`;

export const Required = styled('span')`
  padding-left: 4px;
  color: ${(props) => getTheme(props.theme, 'colors.danger')};
`;

export const Wrapper = styled('div')`
  font-size: 14px;
  font-variant: tabular-nums;
  color: ${(props) => getTheme(props.theme, 'colors.main')};
  box-sizing: border-box;
  margin: 0 0 24px;
  padding: 0px;
  list-style: none;
  display: block;
`;
