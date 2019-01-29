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
        <List.HeaderWrapper>
          {children}
        </List.HeaderWrapper>
      );
    }
    return (
      <List.HeaderWrapper>
        <If condition={show.search}>
          <List.Search />
        </If>
        <List.Filter />
        <If condition={show.tags}>
          <List.Tags />
        </If>
        <If condition={show.sticky}>
          <List.Sticky>
            <List.HeaderItem />
          </List.Sticky>
        </If>
        <If condition={!show.sticky}>
          <List.HeaderItem />
        </If>
      </List.HeaderWrapper>
    );
  }
}

export default ListHeader;

