import styled from '@emotion/styled';
import { css } from '@emotion/core';
import getTheme from '@lskjs/theme/getTheme';
import removeProps from '@lskjs/utils/removeProps';
import GridCol from '../GridCol';

const filter = removeProps('div', ['vertical', 'gap']);
export default styled(filter)`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-right: -${p => (p.gap || getTheme(p.theme, 'gridGap'))}px;
  margin-left: -${p => (p.gap || getTheme(p.theme, 'gridGap'))}px;

  ${p => p.gap && css`
    > div {
        padding-left: ${p.gap || getTheme(p.theme, 'gridGap')}px;
        padding-right: ${p.gap || getTheme(p.theme, 'gridGap')}px;
    }
  `}

  ${p => (p.vertical && css`
    margin-top: -${p.gap || getTheme(p.theme, 'gridGap')}px;
    margin-bottom: -${p.gap || getTheme(p.theme, 'gridGap')}px;
    > div {
      padding-top: ${p.gap || getTheme(p.theme, 'gridGap')}px;
      padding-bottom: ${p.gap || getTheme(p.theme, 'gridGap')}px;
    }
  `)}
`;
