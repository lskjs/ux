import styled, { css } from 'react-emotion';
import removeProps from '@lskjs/utils/removeProps';
import getTheme from '@lskjs/theme/getTheme';

const filter = removeProps('div', ['fluid']);
export default styled(filter)`
    box-sizing: border-box;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media print {
      min-width: 992px !important;
    }
    ${p => (!p.fluid && css`
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
    `)}
`;
