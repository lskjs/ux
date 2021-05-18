import Story from '@lskjs/dev/Story/UappStory';
import { Col, Row } from '@lskjs/grid';
import { observer } from 'mobx-react';
import QueueAnim from 'rc-queue-anim';
import React from 'react';

import List from '../src/List';
import { createIndex, HeaderCol, HeaderRow, ItemCol, ItemRow } from '../src/Table';
import DebugListStore from './DebugListStore';
import FilterForm from './FilterForm';
import listStore from './listStore';

const BlogCard = () => 'BlogCard';

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

const GridItemsWrapper = (props) => <Row {...props} vertical style={{ marginTop: 0, marginBottom: 0 }} />;

const AnimatedGridItemsWrapper = (props) => (
  <QueueAnim
    type="bottom"
    delay={100}
    duration={300}
    component={Row}
    componentProps={{ vertical: true, style: { marginTop: 0, marginBottom: 0 } }}
    {...props}
  />
);
// const index = createIndex();
//  key={index()}>

const GridItem = observer(({ item = {} }) => (
  <Col xl={3} lg={4} md={6} key={item._id}>
    <BlogCard
      {...{
        img: 'http://iarouse.com/dist-react-ant-design/v1.1.4/assets/images-demo/assets/600_400-1.jpg',
        date: 'May 1st',
        title: item.title,
        content: 'Be yourself; everyone else is already taken.',
        tag: 'Quotes',
        author: 'Oscar Wilde',
      }}
    />
    {/* {item.id}
      {item.title}
      {item.role}
      {item.rating} */}
  </Col>
));

export default {
  title: 'List/Item',
  component: List,
};

export const Table = () => (
  <Story devtools style={{ padding: 24 }}>
    <List
      container
      listStore={listStore}
      HeaderItem={HeaderItem}
      Item={Item}
      FilterForm={FilterForm}
      columns={columns}
    />
    <DebugListStore store={listStore} />
  </Story>
);
export const Grid = () => (
  <Story devtools style={{ padding: 24 }}>
    <List
      container
      listStore={listStore}
      HeaderItem={HeaderItem}
      ItemsWrapper={GridItemsWrapper}
      Item={GridItem}
      FilterForm={FilterForm}
      columns={columns}
    />
    <DebugListStore store={listStore} />
  </Story>
);
export const AnimatedGrid = () => (
  <Story devtools style={{ padding: 24 }}>
    <List
      container
      listStore={listStore}
      HeaderItem={HeaderItem}
      ItemsWrapper={AnimatedGridItemsWrapper}
      Item={GridItem}
      FilterForm={FilterForm}
      columns={columns}
    />
    <DebugListStore store={listStore} />
  </Story>
);
