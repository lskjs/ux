import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Search from '../UI/molecules/Search';
import { contextToProps } from './ListContext';

@contextToProps('List', 'show')
@inject('listStore')
@observer
class ListSearch extends Component {
  render() {
    const {
      List,
      listStore,
      show,
      ...props
    } = this.props;
    return (
      <Search
        current={10}
        max={listStore.count}
        debounceTimeout={100}
        onChange={e => listStore.setSearch(e.target.value)}
        value={listStore.search}
        canClear={!!listStore.search}
        onClear={() => listStore.setSearch('')}
        actions={show.filterButton && <List.FilterButton />}
        {...props}
      />
    );
  }
}


export default ListSearch;

