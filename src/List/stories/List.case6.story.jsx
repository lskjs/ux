import React from 'react';
import { observer } from 'mobx-react';
import Story from '../../Story';
import { ItemRow, ItemCol, HeaderRow, HeaderCol } from '../Table';
import { FormExample2 as FilterForm } from '../../Form2/stories/examples/FormExample2.story';

import List from '../List';
import listStore from './listStore';
import { createIndex } from '../../GridTable/index';
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

const LargeItem = observer(({ item = {}, index = createIndex() }) => (
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

export default ({ storiesOf }) => {
  return storiesOf('List', module)
    .add('case6: Grid items', () => (
      <Story devtools style={{ padding: 24 }}>
        <List
          container
          listStore={listStore}
          HeaderItem={HeaderItem}
          Item={LargeItem}
          FilterForm={FilterForm}
          columns={columns}
        />
        <DebugListStore store={listStore} />
      </Story>
    ));
};
