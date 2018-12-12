import React, { Component } from 'react';
import LayoutSidebarContainer from '../../atoms/LayoutSidebarContainer';
import LayoutSidenav from '../LayoutSidenav';
import LayoutMobileSidenav from '../LayoutMobileSidenav';

class LayoutSidebar extends Component {
  render() {
    return (
      <LayoutSidebarContainer>
        <LayoutMobileSidenav {...this.props} />
        <LayoutSidenav {...this.props} />
      </LayoutSidebarContainer>
    );
  }
}

export default LayoutSidebar;
