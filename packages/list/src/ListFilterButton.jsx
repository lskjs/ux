import T from '@lskjs/t';
import { inject, observer } from 'mobx-react';
import React from 'react';

import FilterButton from './FilterButton';
import FilterIcon from './FilterIcon';

const ListFilterButton = ({ listStore }) => {
  const badge = +(listStore.hasFilter && listStore.getActiveFilter ? listStore.getActiveFilter : 0);
  return (
    <FilterButton icon={<FilterIcon />} badge={badge} active={listStore.showFilter} onClick={listStore.toggleFilter}>
      <T name="lskList.filterButton" />
    </FilterButton>
  );
};

export default inject('listStore')(observer(ListFilterButton));
