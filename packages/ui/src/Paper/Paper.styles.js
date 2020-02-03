import styled from '@emotion/styled';
import { css } from '@emotion/core';
import getTheme from '@lskjs/theme/getTheme';
import createDynamicTag from '@lskjs/utils/createDynamicTag';
import removeProps from '@lskjs/utils/removeProps';

const radiusStyle = p => css`
  border-radius: ${getTheme(p.theme, 'borderRadius')};
`;

const borderedStyle = p => css`
  border: 1px solid ${getTheme(p.theme, 'colors.border')};
`;

const noBorderStyle = css`
  border: none;
`;

const overflowStyle = css`
  overflow: hidden;
`;

export const shadowStyle = css`
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.04),
              0 2px 3px 0 rgba(0, 0, 0, 0.04);
`;

const paddedStyle = css`
  padding: 24px 16px;
`;

const views = {
  translucent: p => css`
    color: ${getTheme(p.theme, 'colors.white')};
    background: rgba(0, 0, 0, 0.6);
  `,
  default: p => css`
    color: ${getTheme(p.theme, 'colors.main')};
    background: ${getTheme(p.theme, 'colors.white')};
  `,
};

const makeView = p => Object.keys(views).includes(p.view) ? views[p.view] : views.default; // eslint-disable-line no-confusing-arrow

const dynamicTag = createDynamicTag('div');
const filteredTag = removeProps(dynamicTag, ['radius', 'padded', 'shadow', 'overflow', 'bordered', 'view']);
export default styled(filteredTag)`
  font-size: 14px;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  ${p => p.radius && radiusStyle}
  ${p => p.padded && paddedStyle}
  ${p => p.shadow && shadowStyle}
  ${p => !p.overflow && overflowStyle}
  ${p => (p.bordered ? borderedStyle : noBorderStyle)}
  ${makeView}
`;
