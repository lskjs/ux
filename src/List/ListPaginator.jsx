import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Pagination from 'antd/lib/pagination';
import If from 'react-if';

import {
  PaginationGroup,
  PaginationPages,
  PaginationStepper,
  PaginationSelect,
  PaginationWrapper,
} from './List.styles';

@inject('listStore')
@observer
class ListPaginator extends Component {
  render() {
    const {
      listStore,
      options = [10, 20, 50, 100],
    } = this.props;
    const from = listStore.skip + 1;
    const to = listStore.skip + listStore.items.length;

    return (
      <PaginationWrapper>
        <PaginationStepper>
          Показывать:
          <PaginationSelect
            name="pagination-size"
            value={listStore.limit}
            onChange={e => listStore.setLimit(+e.target.value)}
          >
            {options.map(option => (<option key={option} value={option}>{option}</option>))}
          </PaginationSelect>
        </PaginationStepper>
        <If condition={listStore.items.length}>
          <PaginationPages>
            {from}—{to}
            {listStore.count !== null && ` / ${listStore.count}`}
          </PaginationPages>
        </If>
        <If condition={listStore.count > 0}>
          <PaginationGroup>
            <Pagination
              onChange={listStore.setPage}
              current={listStore.getCurrentPage()}
              total={listStore.count}
            />
          </PaginationGroup>
        </If>
      </PaginationWrapper>
    );
  }
}

export default ListPaginator;
