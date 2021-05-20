import get from 'lodash/get';
import { inject, observer } from 'mobx-react';
import React from 'react';

import NavigateNextIcon from './icons/NavigateNextIcon';
import NavigatePrevIcon from './icons/NavigatePrevIcon';
import { contextToProps } from './List.context';
import Paginator from './Paginator';

const ListPaginator = ({ List, listStore, paginatorProps = {} }) => (
  <List.PaginatorWrapper>
    <Paginator
      onChange={({ selected }) => listStore.setPage(selected + 1)}
      initialPage={listStore.getCurrentPage() - 1}
      showLessPages
      pageRangeDisplayed={4}
      pageCount={listStore.count / listStore.limit}
      customStyles={get(paginatorProps, 'styles')}
      nextLabel={<NavigateNextIcon style={{ marginLeft: 14, color: '#9b9b9b' }} />}
      prevLabel={<NavigatePrevIcon style={{ marginRight: 14, color: '#9b9b9b' }} />}
      {...paginatorProps}
    />
  </List.PaginatorWrapper>
);

export default contextToProps('List', 'paginatorProps')(inject('listStore')(observer(ListPaginator)));
