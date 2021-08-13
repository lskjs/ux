import { css } from '@emotion/core';
import Story from '@lskjs/dev/Story/UappStory';
import { Col as BsCol, Row as BsRow } from '@lskjs/grid';
import ListStore from '@lskjs/mobx/mobxStores/ListStore';
import { Col, Row } from '@lskjs/ui/Table';
import Promise from 'bluebird';
import random from 'lodash/random';
import range from 'lodash/range';
import sample from 'lodash/sample';
import { observer } from 'mobx-react';
import React from 'react';

import List from '../src/List';
import FilterForm from './FilterForm';

Promise.config({ cancellation: true });
const api = {
  async find({ skip, limit, __cancelToken } = {}) {
    const promise = Promise.delay(200); // это типа гет запрос
    __cancelToken.token.promise.then(() => promise.cancel());
    await promise;
    const count = 1000;
    const roles = () => sample(['Director', 'Manager', 'Stuff', 'Salesman', 'Driver', 'Tester', 'Designer']);
    return {
      count,
      items: range(skip, skip + limit).map((id) => ({
        id,
        title: `User ${id + 1}`,
        rating: random(id, count, true).toFixed(2),
        role: roles(),
      })),
    };
  },
};

const listStore = new ListStore({ api });
setTimeout(() => {
  listStore.fetch();
}, 2000);

const columns = [60, '1fr', '1fr', 60];

const styleHeight = css`
  height: 100%;
  min-height: 48px;
  align-items: center;
`;

const itemStyle = css`
  padding: 5 12px;
  text-align: center;
  background: #eee;
`;

const ListItem = observer(({ item = {} }) => (
  <BsCol lg={2} md={3} sm={4} xs={6}>
    <div className={itemStyle}>
      <h2>{item.title}</h2>
      <p>{item.role}</p>
      <p>{item.rating}</p>
    </div>
  </BsCol>
));

const Body = BsRow;

const SortDirection = ({ value }) => (value === 1 ? '⬆' : value === -1 ? '⬇' : '⚬'); //eslint-disable-line

const HeaderItem = ({ toggleSort, sort = {} }) => (
  <Row className={styleHeight}>
    <Col index={0} onClick={() => toggleSort('id')}>
      id
      <SortDirection value={sort.id} />
    </Col>
    <Col index={1}>name</Col>
    <Col index={2} onClick={() => toggleSort('role')}>
      role
      <SortDirection value={sort.role} />
    </Col>
    <Col index={3} onClick={() => toggleSort('rating')}>
      rating
      <SortDirection value={sort.rating} />
    </Col>
  </Row>
);

export default {
  title: 'List/case2',
  component: List,
};

export const CustomHeaderWithSortdirection = () => (
  <Story devtools style={{ padding: 24 }}>
    <List
      listStore={listStore}
      HeaderItem={HeaderItem}
      Body={Body}
      ListItem={ListItem}
      FilterForm={FilterForm}
      columns={columns}
    />
  </Story>
);
