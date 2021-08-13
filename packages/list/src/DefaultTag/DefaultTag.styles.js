import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export const Base = styled('div')`
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  box-sizing: border-box;
  display: inline-block;
  font-feature-settings: 'tnum';
  font-size: 12px;
  font-variant: tabular-nums;
  height: auto;
  line-height: 24px;
  list-style: none;
  margin: 0 8px 0 0;
  opacity: 1;
  padding: 0 7px;
  transition: all 0.3s;
  white-space: nowrap;
  font-family: ${(p) => getTheme(p.theme, 'fontFamily')};

  color: rgba(0, 0, 0, 0.85);
`;

export const Close = styled('span')`
  color: rgba(0, 0, 0, 0.45);
  cursor: pointer;
  font-size: 10px;
  margin-left: 3px;
  transition: all 0.3s;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-rendering: optimizeLegibility;
  text-transform: none;
  vertical-align: -0.125em;

  > svg {
    display: inline-block;
  }
`;
