import styled from 'react-emotion';
import Icon from 'antd/lib/icon';
import getTheme from '@lskjs/theme/getTheme';

export default styled(Icon)`
  font-size: 1rem;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  padding: 4px;
`;
