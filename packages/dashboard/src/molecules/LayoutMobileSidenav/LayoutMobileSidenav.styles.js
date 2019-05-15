import styled from 'react-emotion';
import AntDrawer from 'antd/lib/drawer';
import getTheme from '@lskjs/theme/getTheme';
import LayoutSidenav from '../LayoutSidenav/LayoutSidenav.styles';

export default styled(AntDrawer)`
  font-family: ${p => getTheme(p.theme, 'fontFamily')};
  .ant-drawer-body {
    padding: 0;
  }

  ${LayoutSidenav} {
    height: 100vh;
    display: block;
  }
  
  @media screen and (min-width: 768px) {
    display: none !important;
  }
`;
