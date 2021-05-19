import { css } from '@emotion/core';
import Story from '@lskjs/dev/Story/UappStory';
import cx from 'classnames';
import { observer } from 'mobx-react';
import React from 'react';

import List from '../src/List';
import { Col, createIndex, ItemCol, ItemRow, Row } from '../src/Table';
import DebugListStore from './DebugListStore';
import FilterForm from './FilterForm';
import listStore from './listStoreMock';

const columns = [60, '1fr', '1fr', 60];

const styleHeight = css`
  height: 100%;
  min-height: 48px;
  align-items: center;
`;

const itemStyle = css`
  padding: 0 12px;
`;

const Item = observer(({ item = {}, index = createIndex() }) => (
  <Row className={cx([styleHeight, itemStyle])}>
    <Col index={index()}>{item.id}</Col>
    <Col index={index()}>{item.title}</Col>
    <Col index={index()}>{item.role}</Col>
    <Col index={index()}>{item.rating}</Col>
  </Row>
));

const SelectItem = observer(({ item = {}, index = createIndex() }) => (
  <ItemRow>
    <ItemCol index={index()}>
      <List.Checkbox item={item} />
    </ItemCol>
    <ItemCol index={index()}>
      {item.id} - {Math.random()}
    </ItemCol>
    <ItemCol index={index()}>{item.title}</ItemCol>
    <ItemCol index={index()}>{item.role}</ItemCol>
  </ItemRow>
));

const HeaderItem = ({ toggleSort, sort = {} }) => (
  <Row className={styleHeight}>
    <Col index={0}>
      <List.SortHeader value={sort.id} onClick={() => toggleSort('id')}>
        id
      </List.SortHeader>
    </Col>
    <Col index={1}>name</Col>
    <Col index={2}>
      <List.SortHeader value={sort.role} onClick={() => toggleSort('role')}>
        role
      </List.SortHeader>
    </Col>
    <Col index={3}>
      <List.SortHeader value={sort.rating} onClick={() => toggleSort('rating')}>
        rating
      </List.SortHeader>
    </Col>
  </Row>
);

export default {
  title: 'List/Parts',
  component: List,
};

export const ListHeader = () => (
  <Story>
    <List listStore={listStore} HeaderItem={HeaderItem} FilterForm={FilterForm} columns={columns}>
      <List.Header />
      <DebugListStore store={listStore} />
    </List>
  </Story>
);
export const ListSearch = () => (
  <Story>
    <List listStore={listStore}>
      <List.Search />
      <DebugListStore store={listStore} />
    </List>
  </Story>
);
export const ListFilter = () => (
  <Story>
    <List listStore={listStore} FilterForm={FilterForm}>
      <List.Filter visible />
      <DebugListStore store={listStore} />
    </List>
  </Story>
);
export const ListFilterX2 = () => (
  <Story>
    <List listStore={listStore} FilterForm={FilterForm}>
      <List.Filter visible />
      <List.Filter visible />
      <List.Tags visible />
      <DebugListStore store={listStore} />
    </List>
  </Story>
);
export const ListTags = () => (
  <Story>
    <List listStore={listStore}>
      <List.Tags />
      <DebugListStore store={listStore} />
    </List>
  </Story>
);
export const ListHeaderRow = () => (
  <Story>
    <List listStore={listStore} HeaderItem={HeaderItem} columns={columns}>
      <List.HeaderRow />
      <DebugListStore store={listStore} />
    </List>
  </Story>
);
export const ListBody = () => (
  <Story>
    <List listStore={listStore} Item={Item} columns={columns}>
      <List.Body Item={Item} />
    </List>
    <DebugListStore store={listStore} />
  </Story>
);
export const ListCheckbox = () => (
  <Story>
    <List listStore={listStore} Item={SelectItem} columns={columns} />
    <DebugListStore store={listStore} />
  </Story>
);
export const ListFooter = () => (
  <Story>
    <List listStore={listStore}>
      <List.Footer />
    </List>
    <DebugListStore store={listStore} />
  </Story>
);
export const ListFooterX2 = () => (
  <Story>
    <List listStore={listStore}>
      <List.Footer />
      <List.Footer />
    </List>
    <DebugListStore store={listStore} />
  </Story>
);
export const ListPaginator = () => (
  <Story>
    <List listStore={listStore}>
      <List.Paginator />
    </List>
    <DebugListStore store={listStore} />
  </Story>
);
export const ListEmpty = () => (
  <Story>
    <List listStore={listStore}>
      <List.Empty type={1} />
    </List>
    <DebugListStore store={listStore} />
  </Story>
);
