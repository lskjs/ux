import styled from 'react-emotion';
import BsButton from 'antd/lib/button';
import getTheme from '@lskjs/theme/getTheme';

export default styled(BsButton)`
  height: auto;
  padding: .6em 3.5em;
  text-transform: uppercase;
  letter-spacing: .5px;
  line-height: 2;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  font-size: .75rem;
`;
