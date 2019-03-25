import styled from 'react-emotion';
import Layout from 'antd/lib/layout';

const { Content } = Layout;

export default styled(Content)`
  background-color: #f5f5f5;
  min-height: auto;
  font-family: ${p => p.theme.fontFamily};
`;
