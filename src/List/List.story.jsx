import React, { Component } from 'react';
import range from 'lodash/range';
import random from 'lodash/random';
import sample from 'lodash/sample';
import { observer } from 'mobx-react';
import { css } from 'emotion';
import cx from 'classnames';
import Promise from 'bluebird';
import axios from 'axios';

import DEV from '../DEV';
import Story from '../Story';
import { Row, Col } from '../Table';
import ObserverDEV from '../DEV/ObserverDEV';
import ListStore from '../stores/ListStore';
import { FormExample2 as FilterForm } from '../Form2/stories/examples/FormExample2.story';

import List from './List';

Promise.config({ cancellation: true });
const api = {
  async find2({ skip, limit } = {}) {
    await Promise.delay(200);
    return {
      count: 1000,
      items: range(skip, skip + limit).map(id => ({ id, title: `User ${id + 1}` })),
    };
  },

  async find({ skip, limit, cancelToken } = {}) {
    const promise = Promise.delay(200); // это типа гет запрос
    cancelToken.token.promise.then(() => promise.cancel());
    await promise;
    const count = 1000;
    const roles = () => sample([
      'Director',
      'Manager',
      'Stuff',
      'Salesman',
      'Driver',
      'Tester',
      'Designer',
    ]);
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


  async find3({ skip, limit, cancelToken } = {}) {
    await axios.get('/user/12345', { cancelToken: cancelToken.token });
    await axios.get('/user/12345', { cancelToken: cancelToken.token });
    await axios.get('/user/12345', { cancelToken: cancelToken.token });
    return {
      count: 1000,
      items: range(skip, skip + limit).map(id => ({ id, title: `User ${id + 1}` })),
    };
    // });
  },

  find4({ skip, limit } = {}) {
    return Promise(async (resolve, reject, onCancel) => {
      const promise = Promise.delay(2000); // это типа гет запрос
      onCancel(promise.cancel);
      await promise;

      const promise2 = Promise.delay(2000); // это типа гет запрос
      onCancel(promise2.cancel);
      await promise2;

      const promise3 = Promise.delay(2000); // это типа гет запрос
      onCancel(promise3.cancel);
      await promise3;

      resolve({
        count: 1000,
        items: range(skip, skip + limit).map(id => ({ id, title: `User ${id + 1}` })),
      });
    });
  },
};

const listStore = new ListStore({ api, skip: 20 });
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


const SortDirection = ({ value }) => (value === 1 ? '⬆' : value === -1 ? '⬇' : '⚬');

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

class Debug extends Component {
  render() {
    const { store } = this.props;
    return (
      <div>
        <button onClick={() => store.fetch()}>
          fetch
        </button>
        <button onClick={() => store.fetch({ skip: 5, limit: 5, cache: true })}>
          fetch 5-10 cache
        </button>
        <button onClick={() => store.fetch({ skip: 40, limit: 5, cache: true })}>
          fetch 40-45 cache
        </button>
        <ObserverDEV json={store} />
      </div>
    );
  }
}

export default ({ storiesOf }) => {
  return storiesOf('List', module)
    .add('default', () => (
      <Story devtools style={{ padding: 24 }}>
        <List
          container
          listStore={listStore}
          HeaderItem={HeaderItem}
          ListItem={ListItem}
          FilterForm={FilterForm}
          columns={columns}
        />
        <Debug store={listStore} />
      </Story>
    ))
    // .add('children', () => (
    //   <Story>
    //     <List>
    //       List content
    //     </List>
    //   </Story>
    // ))
    .add('List.Header', () => (
      <Story>
        <List
          listStore={listStore}
          HeaderItem={HeaderItem}
          FilterForm={FilterForm}
          columns={columns}
        >
          <List.Header />
          <Debug store={listStore} />
        </List>
      </Story>
    ))
    .add('List.Search', () => (
      <Story>
        <List
          listStore={listStore}
        >
          <List.Search />
          <Debug store={listStore} />
        </List>
      </Story>
    ))
    .add('List.Filter', () => (
      <Story>
        <List
          listStore={listStore}
          FilterForm={FilterForm}
        >
          <List.Filter visible />
          <Debug store={listStore} />
        </List>
      </Story>
    ))
    .add('List.Filter x2', () => (
      <Story>
        <List
          listStore={listStore}
          FilterForm={FilterForm}
        >
          <List.Filter visible />
          <List.Filter visible />
          <List.Tags visible />
          <Debug store={listStore} />
        </List>
      </Story>
    ))
    .add('List.Tags', () => (
      <Story>
        <List
          listStore={listStore}
        >
          <List.Tags />
          <Debug store={listStore} />
        </List>
      </Story>
    ))
    .add('List.HeaderItem', () => (
      <Story>
        <List
          listStore={listStore}
          HeaderItem={HeaderItem}
          columns={columns}
        >
          <List.HeaderItem />
          <Debug store={listStore} />
        </List>
      </Story>
    ))
    .add('List.Body', () => (
      <Story>
        <List
          listStore={listStore}
          ListItem={ListItem}
          columns={columns}
        >
          <List.Body ListItem={ListItem} />
        </List>
        <Debug store={listStore} />
      </Story>
    ))
    .add('List.Footer', () => (
      <Story>
        <List
          listStore={listStore}
        >
          <List.Footer />
        </List>
        <Debug store={listStore} />
      </Story>
    ))
    .add('List.Footer x2', () => (
      <Story>
        <List
          listStore={listStore}
        >
          <List.Footer />
          <List.Footer />
        </List>
        <Debug store={listStore} />
      </Story>
    ))
    .add('List.Paginator', () => (
      <Story>
        <List
          listStore={listStore}
        >
          <List.Paginator />
        </List>
        <Debug store={listStore} />
      </Story>
    ));
  // .add('props ListItem', () => (
  //   <Story>
  //     <List
  //       ListItem={ListItem}
  //     />
  //   </Story>
  // ))
  // .add('props HeaderItem', () => (
  //   <Story>
  //     <List
  //       HeaderItem={HeaderItem}
  //     />
  //   </Story>
  // ))
  // .add('props ListItem + HeaderItem + columns', () => (
  //   <Story>
  //     <List
  //       columns={['minmax(180px, 1fr)', 108, 64, 64, 'minmax(84px, 1fr)']}
  //       HeaderItem={HeaderItem}
  //       ListItem={ListItem}
  //     />
  //   </Story>
  // ))
  // .add('children - without footer', () => (
  //   <Story>
  //     <List
  //       columns={['minmax(180px, 1fr)', 108, 64, 64, 'minmax(84px, 1fr)']}
  //       ListItem={ListItem}
  //       HeaderItem={HeaderItem}
  //     >
  //       <List.Header />
  //       <List.Body />
  //     </List>
  //   </Story>
  // ))
  // .add('custome Header', () => (
  //   <Story>
  //     <List
  //       columns={['minmax(180px, 1fr)', 108, 64, 64, 'minmax(84px, 1fr)']}
  //       ListItem={ListItem}
  //       HeaderItem={HeaderItem}
  //     >
  //       <List.Header>
  //         Custom header
  //       </List.Header>
  //       <List.Body />
  //       <List.Footer />
  //     </List>
  //   </Story>
  // ))
  // .add('custom Header', () => (
  //   <Story>
  //     <List
  //       columns={['minmax(180px, 1fr)', 108, 64, 64, 'minmax(84px, 1fr)']}
  //       ListItem={ListItem}
  //       HeaderItem={HeaderItem}
  //     >
  //       <List.Header>
  //         Custom header
  //       </List.Header>
  //       <List.Body />
  //       <List.Footer />
  //     </List>
  //   </Story>
  // ))
  // .add('custom Body table', () => (
  //   <Story>
  //     <List
  //       columns={['minmax(180px, 1fr)', 108, 64, 64, 'minmax(84px, 1fr)']}
  //       ListItem={ListItem}
  //       HeaderItem={HeaderItem}
  //     >
  //       <List.Header />
  //       <List.Body>
  //         Custom Body
  //       </List.Body>
  //       <List.Footer />
  //     </List>
  //   </Story>
  // ));
};
