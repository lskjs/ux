import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Pagination from 'antd/lib/pagination';
import If from 'react-if';
import { contextToProps } from './List.context';

@contextToProps('List')
@inject('listStore')
@observer
class ListPaginator extends Component {
  render() {
    const {
      List,
      listStore,
      options = [10, 20, 50, 100],
    } = this.props;
    const from = listStore.skip + 1;
    const to = listStore.skip + listStore.items.length;
    return (
      <List.PaginatorWrapper>
        <List.PaginatorStepperWrapper>
          Показывать:
          <List.PaginatorSelectWrapper
            name="pagination-size"
            value={listStore.limit}
            onChange={e => listStore.setLimit(+e.target.value)}
          >
            {options.map(option => (<option key={option} value={option}>{option}</option>))}
          </List.PaginatorSelectWrapper>
        </List.PaginatorStepperWrapper>
        <If condition={listStore.items.length}>
          <List.PaginatorPagesWrapper>
            {from}—{to}
            {listStore.count !== null && ` / ${listStore.count}`}
          </List.PaginatorPagesWrapper>
        </If>
        <If condition={listStore.count > 0}>
          <List.PaginatorGroupWrapper>
            <Pagination
              onChange={listStore.setPage}
              current={listStore.getCurrentPage()}
              total={listStore.count}
            />
          </List.PaginatorGroupWrapper>
        </If>
      </List.PaginatorWrapper>
    );
  }
}

export default ListPaginator;
