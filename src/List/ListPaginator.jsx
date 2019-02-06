import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Pagination from 'antd/lib/pagination';
import If from 'react-if';
import { contextToProps } from './List.context';
import { PaginatorGroupWrapper } from './List.styles';

@contextToProps('List', 'pageSize', 'show')
@inject('listStore')
@observer
class ListPaginator extends Component {
  render() {
    const {
      List,
      listStore,
    } = this.props;
    const page = listStore.getCurrentPage();
    return (
      <List.PaginatorWrapper>
        <If condition={listStore.count === null}>
          <button disabled={!(page > 1)} onClick={() => listStore.setPage(page - 1)}>
            {'<'}
          </button>
          <button onClick={() => listStore.setPage(page + 1)}>
            {'>'}
          </button>
        </If>
        <If condition={listStore.count > 0}>
          <PaginatorGroupWrapper>
            <Pagination
              onChange={listStore.setPage}
              current={listStore.getCurrentPage()}
              pageSize={listStore.limit}
              total={listStore.count}
            />
          </PaginatorGroupWrapper>
        </If>
      </List.PaginatorWrapper>
    );
  }
}

export default ListPaginator;
