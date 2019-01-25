import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withTheme } from 'emotion-theming';

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
} from './PageList.styles';
import { list } from 'postcss';

@withTheme
@inject('listStore')
@observer
class PageListPaginator extends Component {
  render() {
    const {
      listStore,
      options = [10, 20, 50, 100],
      theme,
    } = this.props;
    const { count } = listStore;
    const { from, to } = listStore.getFromTo();

    return (
      <React.Fragment>
        <PaginationStepper>
          Показывать:
          <PaginationSelect
            name="pagination-size"
            value={listStore.limit}
            onChange={(e) => {
              listStore.handleChangeLimit(+e.target.value);
            }}
          >
            {options.map(option => (<option key={option} value={option}>{option}</option>))}
          </PaginationSelect>
        </PaginationStepper>
        <PaginationPages>
          {from}—{to}
          <If condition={count !== null}>
           / {count}
          </If>
        </PaginationPages>
        <PaginationGroup>
          Page: {listStore.getPage()}
          <If condition={listStore.getLastPage() !== null}>
           / {listStore.getLastPage()}
          </If>


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
        </PaginationGroup>
      </React.Fragment>
    );
  }
}

export default PageListPaginator;
