import DEV from '@lskjs/dev/DEV';
import Collapse from '@lskjs/ui/Collapse';
import { inject, observer } from 'mobx-react';
import React from 'react';

import { contextToProps } from './List.context';

const ListFilter = ({ List, FilterForm, listStore, debug, filterProps }) => {
  if (!FilterForm) return null;
  const { showFilter } = listStore;
  return (
    <Collapse show={showFilter} type="collapse">
      <List.FilterWrapper>
        <FilterForm
          {...filterProps}
          enableReinitialize
          initialValues={listStore.filter}
          hash={listStore.filter}
          onChange={listStore.setFilter}
        />
        {debug && <DEV json={listStore.filter} />}
      </List.FilterWrapper>
    </Collapse>
  );
};

export default contextToProps('List', 'FilterForm', 'debug', 'filterProps')(inject('listStore')(observer(ListFilter)));
