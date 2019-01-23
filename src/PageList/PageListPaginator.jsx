import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import ChevronRightIcon from 'react-icons2/mdi/chevron-right';
import ChevronLeftIcon from 'react-icons2/mdi/chevron-left';


import Button from '../Button';
import {
  paginationButtonStyle,
  PaginationGroup,
  PaginationPages,
  PaginationStepper,
  PaginationSelect,
} from './_List.styles';

@inject('pageStore')
@observer
class PageListPaginator extends Component {
  render() {
    const {
      pageStore,
      options,
    } = this.props;
    const { count } = pageStore.listStore;
    const from = pageStore.getSkip() + 1;
    let to = pageStore.getSkip() + pageStore.limit;
    if (to > count) to = count;
    return (
      <React.Fragment>

        <PaginationStepper>
              Показывать:
          <PaginationSelect
            name="pagination-size"
            value={pageStore.limit}
            onChange={(e) => {
            pageStore.handleChangeLimit(+e.target.value);
          }}
          >
            {options.map(option => (<option value={option}>{option}</option>))}
            {/* <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option> */}
          </PaginationSelect>
        </PaginationStepper>
        <PaginationPages>
          {/* {pageStore.listFromTo} / {pageStore.listCount} */}
          {from}-{to} / {count}
        </PaginationPages>
        <PaginationGroup>
          <Button
            disabled={!pageStore.canPrevPage()}
            view="text"
            className={paginationButtonStyle}
            icon={<ChevronLeftIcon />}
            onClick={pageStore.prevPage}
          />
          <Button
            disabled={!pageStore.canNextPage()}
            view="text"
            className={paginationButtonStyle}
            icon={<ChevronRightIcon />}
            onClick={pageStore.nextPage}
          />
        </PaginationGroup>
      </React.Fragment>
    );
  }
}

export default PageListPaginator;
