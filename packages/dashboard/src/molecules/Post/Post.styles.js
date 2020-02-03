import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Card from 'antd/lib/card';
import removeProps from '@lskjs/utils/removeProps';
import getTheme from '@lskjs/theme/getTheme';
import PostActions from '../../atoms/PostActions';

const filteredTag = removeProps(Card, ['withActions']);
export default styled(filteredTag)`
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  border-radius: ${p => getTheme(p.theme, 'borderRadius')};

  ${p => (p.withActions && css`
    ${PostActions} {
      transition: opacity .2s ease-out;
      will-change: opacity;
    }
    &:hover {
      ${PostActions} {
        opacity: 1;
      }
    }
  `)}

  .ant-card-head {
    border-bottom: none;

    .ant-card-head-title,
    .ant-card-extra {
      padding: 16px 0 6px;
    }
  }
`;
