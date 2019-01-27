import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Pagination from 'antd/lib/pagination';

import {
  PaginationGroup,
  PaginationPages,
  PaginationStepper,
  PaginationSelect,
  PaginationWrapper,
} from './PageList.styles';

@inject('listStore')
@observer
class PageListPaginator extends Component {
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
        <PaginationPages>
          {from}—{to}
          {listStore.count !== null && ` / ${listStore.count}`}
        </PaginationPages>
        <PaginationGroup>
          <Pagination
            onChange={listStore.setPage}
            current={listStore.getCurrentPage()}
            total={listStore.count}
          />
        </PaginationGroup>
      </PaginationWrapper>
    );
  }
}

export default PageListPaginator;
