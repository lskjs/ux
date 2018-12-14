import styled, { css } from 'react-emotion';
import { Button as AntButton } from 'antd';

export default styled(AntButton)`
  border: none !important;
  box-shadow: none !important;
  ${p => (p.transparent && css`
    background: transparent !important;
  `)}
  i {
    font-size: 18px !important;
  }
`;
