import Story from '@lskjs/dev/Story/UappStory';
import { observer } from 'mobx-react';
import React from 'react';

import List from '../src/List';
import { createIndex, HeaderCol, HeaderRow, ItemCol, ItemRow } from '../src/Table';
import DebugListStore from './DebugListStore';
import FilterForm from './FilterForm';
import listStore from './listStore';

const columns = [60, '1fr', '1fr', 60];
const HeaderItem = ({ toggleSort, sort = {}, index = createIndex() }) => (
  <HeaderRow>
    <HeaderCol index={index()}>
      <List.SortHeader value={sort.id} onClick={() => toggleSort('id')}>
        id
      </List.SortHeader>
    </HeaderCol>
    <HeaderCol index={index()}>name</HeaderCol>
    <HeaderCol index={index()}>
      <List.SortHeader value={sort.role} onClick={() => toggleSort('role')}>
        role
      </List.SortHeader>
    </HeaderCol>
    <HeaderCol index={index()}>
      <List.SortHeader value={sort.rating} onClick={() => toggleSort('rating')}>
        rating
      </List.SortHeader>
    </HeaderCol>
  </HeaderRow>
);

const Item = observer(({ item = {}, index = createIndex() }) => (
  <ItemRow>
    <ItemCol index={index()}>{item.id}</ItemCol>
    <ItemCol index={index()}>{item.title}</ItemCol>
    <ItemCol index={index()}>{item.role}</ItemCol>
    <ItemCol index={index()}>{item.rating}</ItemCol>
  </ItemRow>
));

export default {
  title: 'List/case3',
  component: List,
};

export const CustomWrappers = () => (
  <Story devtools style={{ padding: 24 }}>
    <List
      container
      listStore={listStore}
      HeaderItem={HeaderItem}
      Item={Item}
      FilterForm={FilterForm}
      columns={columns}
      Wrapper={({ children }) => <div style={{ background: 'red' }}>{children}</div>}
    />
    <DebugListStore store={listStore} />
  </Story>
);
