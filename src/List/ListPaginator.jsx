import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Pagination from 'antd/lib/pagination';
import autobind from 'core-decorators/lib/autobind';
import Icon from 'antd/lib/icon';
import If from 'react-if';
import { contextToProps } from './List.context';
import { PaginatorGroupWrapper, ArrowButton, ArrowBlock } from './List.styles';
import scrollTo from '../utils/scrollTo';

@contextToProps('List', 'paginatorProps', 'id')
@inject('listStore')
@observer
class ListPaginator extends Component {
  @autobind
  handleChangePage(page) {
    const { listStore, id } = this.props;
    scrollTo(id ? `#${id}` : '#lsk-list-top');
    return listStore.setPage(page);
  }
  render() {
    const {
      List,
      listStore,
      paginatorProps = {},
    } = this.props;
    const page = listStore.getCurrentPage();
    return (
      <List.PaginatorWrapper>
        <If condition={listStore.count === null}>
          <ArrowBlock>
            <ArrowButton disabled={!(page > 1)} onClick={() => this.handleChangePage(page - 1)}>
              <Icon type="left" />
            </ArrowButton>
            <ArrowButton onClick={() => this.handleChangePage(page + 1)}>
              <Icon type="right" />
            </ArrowButton>
          </ArrowBlock>
        </If>
        <If condition={listStore.count > 0}>
          <PaginatorGroupWrapper>
            <Pagination
              onChange={this.handleChangePage}
              current={listStore.getCurrentPage()}
              pageSize={listStore.limit}
              total={listStore.count}
              showLessItems
              {...paginatorProps}
            />
          </PaginatorGroupWrapper>
        </If>
      </List.PaginatorWrapper>
    );
  }
}

export default ListPaginator;
