import styled from 'react-emotion';
import getTheme from '@lskjs/theme/getTheme';

export default styled('div')`
  width: 100%;
  height: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  padding: 0 46px 0 12px;
  color: ${p => (!p.selected ? getTheme(p.theme, 'colors.secondary') : getTheme(p.theme, 'colors.main'))};
`;
