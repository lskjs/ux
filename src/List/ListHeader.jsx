import React, { Component } from 'react';

import DEV from '../DEV';
import { ListHeader as Container } from './List.styles';
import { contextToProps } from './ListContext';

@contextToProps('List')
class ListHeader extends Component {
  render() {
    const { children, List } = this.props;
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
        <List.Search />
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

