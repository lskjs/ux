import React, { Component } from 'react';
import If from 'react-if';
import { inject, observer } from 'mobx-react';
import { contextToProps } from './List.context';

@contextToProps('List', 'show')
@inject('listStore')
@observer
class ListHeader extends Component {
  render() {
    const { List, children, listStore, show } = this.props;
    if (children) {
      return (
        <List.HeaderWrapper>
          {children}
        </List.HeaderWrapper>
      );
    }
    return (
      <React.Fragment>
        <If condition={!!show.search}>
          <List.HeaderWrapper>
            <List.Search />
          </List.HeaderWrapper>
        </If>
        <List.HeaderWrapper>
          <List.Filter />
        </List.HeaderWrapper>
        <If condition={!!show.tags}>
          <List.HeaderWrapper>
            <List.TagsPanel />
          </List.HeaderWrapper>
        </If>
        <If condition={!!show.searchResults && listStore.hasFilter}>
          <List.HeaderWrapper>
            <List.SearchResults />
          </List.HeaderWrapper>
        </If>
        <List.HeaderWrapper sticky={!!show.sticky}>
          <List.HeaderRow />
        </List.HeaderWrapper>
      </React.Fragment>
    );
  }
}

export default ListHeader;
