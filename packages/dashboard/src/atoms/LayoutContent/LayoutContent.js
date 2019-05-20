import styled from 'react-emotion';
import Layout from 'antd/lib/layout';
import getTheme from '@lskjs/theme/getTheme';

const { Content } = Layout;

export default styled(Content)`
  background-color: #f5f5f5;
  min-height: auto;
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
`;
