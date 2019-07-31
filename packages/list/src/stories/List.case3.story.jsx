import React from 'react';
import { observer } from 'mobx-react';
import Story from '@lskjs/dev/Story';
import { ItemRow, ItemCol, HeaderRow, HeaderCol, createIndex } from '../Table';
import FilterForm from './FilterForm';

import List from '../List';
import listStore from './listStore';
import DebugListStore from './DebugListStore';

const columns = [60, '1fr', '1fr', 60];
const HeaderItem = ({ toggleSort, sort = {}, index = createIndex() }) => (
  <HeaderRow>
    <HeaderCol index={index()}>
      <List.SortHeader value={sort.id} onClick={() => toggleSort('id')}>
       id
      </List.SortHeader>
    </HeaderCol>
    <HeaderCol index={index()}>
      name
    </HeaderCol>
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
    <ItemCol index={index()}>
      {item.id}
    </ItemCol>
    <ItemCol index={index()}>
      {item.title}
    </ItemCol>
    <ItemCol index={index()}>
      {item.role}
    </ItemCol>
    <ItemCol index={index()}>
      {item.rating}
    </ItemCol>
  </ItemRow>
));

export default ({ storiesOf }) => storiesOf('list/List', module)
  .add('case3: custom wrappers', () => (
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
  ));
