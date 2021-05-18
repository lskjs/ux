import Story from '@lskjs/dev/Story/UappStory';
import Link from '@lskjs/link';
import { observer } from 'mobx-react';
import React from 'react';

import List from '../src/List';
import { Col, HeaderCol, HeaderRow, ItemCol, ItemRow, Row } from '../src/Table';
import DebugListStore from './DebugListStore';
import listStore from './listStore';

const columns = [60, '1fr', '1fr', 60];
const SelectHeaderItem = observer(({ toggleSort, sort = {} }) => (
  <HeaderRow>
    <HeaderCol index={0}>
      <List.Checkbox global />
    </HeaderCol>
    <HeaderCol index={1}>
      <List.SortHeader style={{ background: '#eee' }} value={sort.id} onClick={() => toggleSort('id')}>
        id
      </List.SortHeader>
    </HeaderCol>
    <HeaderCol index={2}>name</HeaderCol>
    <List.SortHeader value={sort.role} onClick={() => toggleSort('role')}>
      <HeaderCol index={3} style={{ background: '#eee' }}>
        role
      </HeaderCol>
    </List.SortHeader>
  </HeaderRow>
));

const SelectItem = observer(({ item = {} }) => (
  <ItemRow>
    <ItemCol index={0}>
      <List.Checkbox item={item} />
    </ItemCol>
    <ItemCol index={1}>
      {item.id} - {Math.random()}
    </ItemCol>
    <ItemCol index={2}>{item.title}</ItemCol>
    <ItemCol index={3}>{item.role}</ItemCol>
  </ItemRow>
));

const SelectLinkItem = observer(({ item = {} }) => (
  <List.SelectRow item={item} componentClass={Link} href="https://google.com">
    <ItemRow clickable>
      <ItemCol index={0}>
        <List.Checkbox item={item} />
      </ItemCol>
      <ItemCol index={1}>
        {item.id} - {Math.random()}
      </ItemCol>
      <ItemCol index={2}>{item.title}</ItemCol>
      <ItemCol index={3}>{item.role}</ItemCol>
    </ItemRow>
  </List.SelectRow>
));

const SelectLinkItem2 = observer(({ item = {} }) => (
  <Link href="https://google.com">
    <Row>
      <Col index={0}>{/* <List.Checkbox item={item} /> */}</Col>
      <Col index={1}>
        {item.id} - {Math.random()}
      </Col>
      <Col index={2}>{item.title}</Col>
      <Col index={3}>{item.role}</Col>
    </Row>
  </Link>
));

const SelectLinkItem3 = observer(({ item = {} }) => (
  <List.SelectRow item={item}>
    <Row>
      <Col index={0}>
        <List.Checkbox item={item} />
      </Col>
      <Col index={1}>
        {item.id} - {Math.random()}
      </Col>
      <Col index={2}>{item.title}</Col>
      <Col index={3}>{item.role}</Col>
    </Row>
  </List.SelectRow>
));

export default {
  title: 'List/Select',
  component: List,
};

export const withSelect = () => (
  <Story>
    <List listStore={listStore} Item={SelectItem} HeaderItem={SelectHeaderItem} columns={columns} />
    <DebugListStore store={listStore} />
  </Story>
);

export const withSelectLinkItem = () => (
  <Story>
    <List
      listStore={listStore}
      Item={SelectLinkItem}
      // HeaderItem={SelectHeaderItem}
      columns={columns}
    />
    <DebugListStore store={listStore} />
  </Story>
);
export const withSelectLinkItem2 = () => (
  <Story>
    <List listStore={listStore} Item={SelectLinkItem2} HeaderItem={SelectHeaderItem} columns={columns} />
    <DebugListStore store={listStore} />
  </Story>
);
export const withSelectLinkItem3 = () => (
  <Story>
    <List listStore={listStore} Item={SelectLinkItem3} HeaderItem={SelectHeaderItem} columns={columns} />
    <DebugListStore store={listStore} />
  </Story>
);
