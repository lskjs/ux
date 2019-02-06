import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Pagination from 'antd/lib/pagination';
import Icon from 'antd/lib/icon';
import If from 'react-if';
import T from '../T';
import { contextToProps } from './List.context';
import { ArrowButton, ArrowBlock } from './List.styles';

@contextToProps('List', 'pageSize')
@inject('listStore')
@observer
class ListPaginator extends Component {
  render() {
    const {
      List,
      listStore,
      pageSize = 10,
    } = this.props;
    const { options = [1, 2, 5, 10].map(a => a * pageSize) } = this.props;

    const from = listStore.skip + 1;
    const to = listStore.skip + listStore.items.length;
    const page = listStore.getCurrentPage();
    return (
      <List.PaginatorWrapper>
        <List.PaginatorStepperWrapper>
          <T name="lskList.paginatorShow" />
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
        <If condition={listStore.count === null}>
          <ArrowBlock>
            <ArrowButton disabled={!(page > 1)} onClick={() => listStore.setPage(page - 1)}>
              <Icon type="left" />
            </ArrowButton>
            <ArrowButton onClick={() => listStore.setPage(page + 1)}>
              <Icon type="right" />
            </ArrowButton>
          </ArrowBlock>
        </If>
        <If condition={listStore.count > 0}>
          <List.PaginatorGroupWrapper>
            <Pagination
              onChange={listStore.setPage}
              current={listStore.getCurrentPage()}
              pageSize={listStore.limit}
              total={listStore.count}
            />
          </List.PaginatorGroupWrapper>
        </If>
      </List.PaginatorWrapper>
    );
  }
}

export default ListPaginator;
