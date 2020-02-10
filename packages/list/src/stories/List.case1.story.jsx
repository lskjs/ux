import React from 'react';
import range from 'lodash/range';
import random from 'lodash/random';
import sample from 'lodash/sample';
import { observer } from 'mobx-react';
import { css } from '@emotion/core';
import cx from 'classnames';
import Promise from 'bluebird';

// import polyfill from '@lskjs/utils/polyfill';
import Story from '@lskjs/dev/Story';
import { Row, Col } from '@lskjs/ui/Table';
import ListStore from '@lskjs/mobx/stores/ListStore';
import FilterForm from './FilterForm';

import List from '../List';

// polyfill();

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
      items: range(skip, skip + limit).map(id => ({
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
  padding: 0 12px;
`;

const ListItem = observer(({ item = {} }) => (
  <Row className={cx([styleHeight, itemStyle])}>
    <Col index={0}>
      {item.id}
    </Col>
    <Col index={1}>
      {item.title}
    </Col>
    <Col index={2}>
      {item.role}
    </Col>
    <Col index={3}>
      {item.rating}
    </Col>
  </Row>
));


const SortDirection = ({ value }) => (value === 1 ? '⬆' : value === -1 ? '⬇' : '⚬'); // eslint-disable-line no-nested-ternary

const HeaderItem = ({ toggleSort, sort = {} }) => (
  <Row className={styleHeight}>
    <Col index={0} onClick={() => toggleSort('id')}>
      id
      <SortDirection value={sort.id} />
    </Col>
    <Col index={1}>
      name
    </Col>
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


export default ({ storiesOf }) => storiesOf('list/List/cases', module)
  .add('case1', () => (
    <Story devtools style={{ padding: 24 }}>
      <List
        listStore={listStore}
        HeaderItem={HeaderItem}
        ListItem={ListItem}
        FilterForm={FilterForm}
        columns={columns}
      />
    </Story>
  ));
