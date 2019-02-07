import styled, { css } from 'react-emotion';
import Col from '../Col';
import removeProps from '../../../utils/removeProps';

const filter = removeProps('div', ['vertical', 'gap']);
export default styled(filter)`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin-right: -${p => (p.gap || 15)}px;
  margin-left: -${p => (p.gap || 15)}px;
  
  ${p => (p.vertical && css`
    margin-top: -${p.gap || 15}px;
    margin-bottom: -${p.gap || 15}px;
    > ${Col} {
      padding-top: ${p.gap || 15}px;
      padding-bottom: ${p.gap || 15}px;
      ${p.gap && css`
        padding-left: ${p.gap || 15}px;
        padding-right: ${p.gap || 15}px;
      `}
    }
  `)}
`;
