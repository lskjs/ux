import styled from '@emotion/styled';
import { css } from '@emotion/core';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div', { shouldForwardProp: prop => !['fluid'].includes(prop) })`
  box-sizing: border-box;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 575px) and (min-width: 360px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  @media print {
    min-width: 992px !important;
  }
  ${p =>
    !p.fluid &&
    css`
      @media (min-width: 576px) {
        max-width: ${getTheme(p.theme, 'layout.phone')}px;
      }
      @media (min-width: 768px) {
        max-width: ${getTheme(p.theme, 'layout.tablet')}px;
      }
      @media (min-width: 992px) {
        max-width: ${getTheme(p.theme, 'layout.smallDesktop')}px;
      }
      @media (min-width: 1200px) {
        max-width: ${getTheme(p.theme, 'layout.largeDesktop')}px;
      }
    `}
`;
