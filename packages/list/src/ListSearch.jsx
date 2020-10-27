import React from 'react';
import get from 'lodash/get';
import { observer, inject } from 'mobx-react';
import { formatter } from '@lskjs/utils/formatter';
import { contextToProps } from './List.context';

const ListSearch = ({ i18, List, listStore, show, ...props }) => (
  <List.SearchWrapper>
    <List.SearchComponent
      current={listStore.items.length}
      max={formatter(listStore.count)}
      debounceTimeout={100}
      onChange={(e) => listStore.setSearch(get(e, 'target.value', e))}
      value={listStore.search || ''}
      canClear={!!listStore.search}
      onClear={() => listStore.setSearch(null)}
      actions={show.filterButton && <List.FilterButton />}
      placeholder={i18.t('lskList.searchPlaceholder')}
      {...props}
    />
  </List.SearchWrapper>
);

export default contextToProps('List', 'show', 'FilterForm')(inject('listStore', 'i18')(observer(ListSearch)));
