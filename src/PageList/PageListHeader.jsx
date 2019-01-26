import React, { Component } from 'react';

import DEV from '../DEV';
import { ListHeader as Container } from './PageList.styles';
import { contextToProps } from './PageListContext';

@contextToProps('PageList')
class PageListHeader extends Component {
  render() {
    const { children, PageList } = this.props;
    if (!PageList) return <DEV json="!PageList" />;
    if (children) {
      return (
        <Container>
          {children}
        </Container>
      );
    }
    return (
      <Container>
        <PageList.Search />
        <PageList.Filter />
        <PageList.Tags />
        <PageList.StickyPanel>
          <PageList.HeaderItemWrapper />
        </PageList.StickyPanel>
      </Container>
    );
  }
}

export default PageListHeader;

