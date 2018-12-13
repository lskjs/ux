import styled, { css } from 'react-emotion';
import { Layout } from 'antd';
import Sider from '../../molecules/LayoutSidenav/LayoutSidenav.styles';
import LayoutSidebarContainer from '../LayoutSidebarContainer';
import removeProps from '../../../utils/removeProps';

const filteredTag = removeProps(Layout, ['boxed', 'fixed']);

const boxedStyle = css`
  @media only screen and (min-width: 992px) {
    max-width: 1200px;
    box-shadow: 0 0 1px rgba(0,0,0,.2);
  }
`;

const sideBarFixedStyle = css`
  ${LayoutSidebarContainer},
  ${Sider} {
    height: 100vh;
  
    & + .ant-layout {
      height: 100vh;
    }
  }
`;

const headerFixedStyle = css`
  .ant-layout { // apply to all .ant-layout Class
    overflow: auto;
  }
`;

export default styled(filteredTag)`
  max-width: 100%;
  margin: auto;
  transition: max-width .35s ease;

  &.ant-layout {
    align-items: stretch; 
    min-height: 100vh;
    ${p => p.boxed && boxedStyle}
  }
  
  ${(p) => {
    if (!p.fixed) return '';
    if (
      p.fixed.includes('header')
      && p.fixed.includes('sidebar')
    ) {
      return `${sideBarFixedStyle} ${headerFixedStyle}`;
    } else if (p.fixed.includes('sidebar')) {
      return sideBarFixedStyle;
    }
    return '';
  }}
`;
