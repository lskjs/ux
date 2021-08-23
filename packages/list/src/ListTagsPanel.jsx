import T from '@lskjs/t';
import { inject, observer } from 'mobx-react';
import React from 'react';

import { contextToProps } from './List.context';

const ListTagsPanel = ({ List, form, listStore, filterProps }) => {
  // if (!listStore.getActiveFilter) return null;
  return (
    <List.TagsPanelWrapper>
      <List.Tags listStore={listStore} Tag={List.Tag} form={form} {...filterProps} />
      <List.PreSearch />
      {/* <List.Button
        size="extraSmall"
        paint="primary"
        view="text"
        bordered
        // rounded
        onClick={listStore.clearFilter}
      >
        <T name="lskList.resetFilterButton" />
      </List.Button> */}
    </List.TagsPanelWrapper>
  );
};

export default contextToProps('List', 'filterProps')(inject('listStore')(observer(ListTagsPanel)));
