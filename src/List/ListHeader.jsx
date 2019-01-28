import React, { Component } from 'react';
import If from 'react-if';

import DEV from '../DEV';
import { ListHeader as Container } from './List.styles';
import { contextToProps } from './ListContext';

@contextToProps('List', 'show')
class ListHeader extends Component {
  render() {
    const { children, List, show } = this.props;
    if (!List) return <DEV json="!List" />;
    if (children) {
      return (
        <Container>
          {children}
        </Container>
      );
    }
    return (
      <Container>
        <If condition={show.search}>
          <List.Search />
        </If>
        <List.Filter />
        <List.Tags />
        <List.StickyPanel>
          <List.HeaderItem />
        </List.StickyPanel>
      </Container>
    );
  }
}

export default ListHeader;

