import styled, { css } from 'react-emotion';
import { Tag } from 'antd/lib';
import removeProps from '@lskjs/utils/removeProps';

export default styled(removeProps(Tag, ['isHref']))`
  pointer-events: none;
  ${p => (p.isHref && css`
    pointer-events: auto;
    cursor: pointer;
    > a {
      text-decoration: none;
    }
  `)}
  > i {
    pointer-events: auto;
  }
`;
