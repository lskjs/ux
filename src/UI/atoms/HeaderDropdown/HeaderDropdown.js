import styled from 'react-emotion';
import { Menu } from 'antd';

export default styled(Menu)`
  font-family: ${p => p.theme.fontFamily};
  .ant-dropdown-menu-item {
    i {
      margin-right: .5rem;
    }
  }
`;
