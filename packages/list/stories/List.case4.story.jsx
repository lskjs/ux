import Button from '@lskjs/button';
import Story from '@lskjs/dev/Story/UappStory';
import { observer } from 'mobx-react';
import React from 'react';

import List from '../src/List';
import { createIndex, HeaderCol, HeaderRow, ItemCol, ItemRow } from '../src/Table';
import DebugListStore from './DebugListStore';
import FilterForm from './FilterForm';
import listStore from './listStore';

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

const EditItem = observer(({ item = {}, index = createIndex() }) => (
  <ItemRow>
    <ItemCol index={index()}>{item.title}</ItemCol>
    <ItemCol index={index()}>
      <input
        onChange={(title) => {
          // eslint-disable-next-line no-param-reassign
          item.title = title;
        }}
      />
      {/* <Input
        value={item.title}
        onChange={(title) => {
          item.title = title;
        }}
      /> */}
    </ItemCol>
    <ItemCol index={index()}>
      <Button
        paint="danger"
        onClick={() => {
          listStore.items = listStore.items.filter(({ id }) => id !== item.id);
        }}
      >
        Удалить
      </Button>
    </ItemCol>
    <ItemCol index={index()}>
      <Button
        paint="success"
        onClick={() => {
          const { id } = listStore.items[listStore.items.length - 1];
          listStore.items.push({ id: id + 1, title: `New ${id + 1}` });
        }}
      >
        Добавить
      </Button>
    </ItemCol>
  </ItemRow>
));

export default {
  title: 'List/case4',
  component: List,
};

export const ListAddRemoveEdit = () => (
  <Story devtools style={{ padding: 24 }}>
    <List
      container
      listStore={listStore}
      HeaderItem={HeaderItem}
      Item={EditItem}
      FilterForm={FilterForm}
      columns={['1fr', '1fr', '1fr', '1fr']}
    />
    <DebugListStore store={listStore} />
  </Story>
);
