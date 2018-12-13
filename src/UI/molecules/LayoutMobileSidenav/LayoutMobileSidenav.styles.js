import styled from 'react-emotion';
import { Drawer as AntDrawer } from 'antd';
import LayoutSidenav from '../LayoutSidenav/LayoutSidenav.styles';

export default styled(AntDrawer)`
  .ant-drawer-body {
    padding: 0;
  }

  ${LayoutSidenav} {
    height: 100vh;
  }
  
  @media screen and (min-width: 768px) {
    display: none !important;
  }
`;
