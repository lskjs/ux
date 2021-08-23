import T from '@lskjs/t';
import { formatter } from '@lskjs/utils/formatter';
import get from 'lodash/get';
import { inject, observer } from 'mobx-react';
import React from 'react';

import { contextToProps } from './List.context';

const ListPreSearch = ({ i18, List, listStore, show, actions, ...props }) => (
  <List.PreSearchWrapper>
    <List.Button
      size="extraSmall"
      paint="primary"
      view="text"
      bordered
      // rounded
      onClick={listStore.clearFilter}
    >
      <T name="lskList.resetFilterButton" />
    </List.Button>
    <List.Button
      size="extraSmall"
      paint="primary"
      view="text"
      bordered
      // rounded
      onClick={listStore.search}
    >
      SEARCH
    </List.Button>
  </List.PreSearchWrapper>
);

export default contextToProps(
  'List',
  'show',
  'FilterForm',
  'actions',
)(inject('listStore', 'i18')(observer(ListPreSearch)));
