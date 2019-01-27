import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withTheme } from 'emotion-theming';
import Pagination from 'antd/lib/pagination';
import DEV from '../DEV';

import ChevronRightIcon from 'react-icons2/mdi/chevron-right';
import ChevronLeftIcon from 'react-icons2/mdi/chevron-left';
import If from 'react-if';


import Button from '../Button';
import {
  paginationButtonStyle,
  PaginationGroup,
  PaginationPages,
  PaginationStepper,
  PaginationSelect,
  PaginationWrapper,
} from './PageList.styles';

// @withTheme
@inject('listStore')
@observer
class PageListPaginator extends Component {
  render() {
    const {
      listStore,
      options = [10, 20, 50, 100],
      // theme,
    } = this.props;
    const from = listStore.skip + 1;
    const to = listStore.skip + listStore.limit;

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
          <If condition={listStore.count !== null}>
           / {listStore.count}
          </If>
        </PaginationPages>
        <PaginationGroup>
          <Pagination
            // hideOnSinglePage={true}
            onChange={listStore.setPage}
            current={listStore.getCurrentPage()}
            total={listStore.count}
            // pageSizeOptions={options}
          />
        </PaginationGroup>

        {/* <PaginationGroup>
          <Button
            disabled={!listStore.canPrevPage()}
            view="text"
            className={paginationButtonStyle(theme)}
            icon={<ChevronLeftIcon />}
            onClick={listStore.prevPage}
          />
          (1)
          (2)
          (3)
          (4)
          ...
          <Button
            disabled={!listStore.canNextPage()}
            view="text"
            className={paginationButtonStyle(theme)}
            icon={<ChevronRightIcon />}
            onClick={listStore.nextPage}
          />
        </PaginationGroup> */}
      </PaginationWrapper>
    );
  }
}

export default PageListPaginator;
