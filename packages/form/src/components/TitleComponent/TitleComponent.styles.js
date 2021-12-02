import { css } from '@emotion/core';
import styled from '@emotion/styled';
import getTheme from '@lskjs/theme/getTheme';

export const Title = styled('div')`
  ${(p) =>
    p.error &&
    css`
      color: ${getTheme(p.theme, 'colors.danger')};
    `}
`;

export const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${(p) =>
    p.infoLeft &&
    css`
      justify-content: flex-start;
      ${Title} {
        margin-right: 4px;
      }
    `}
`;

export const Info = styled('div')`
  display: flex;
`;

export const Required = styled('span')`
  color: ${(props) => getTheme(props.theme, 'form.requiredColor', getTheme(props.theme, 'colors.danger'))};
  padding-left: 4px;
`;
