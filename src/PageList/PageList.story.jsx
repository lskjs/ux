import React, { Component } from 'react';
import range from 'lodash/range';
import { observer } from 'mobx-react';
import Promise from 'bluebird';
import axios from 'axios';

import Story from '../Story';
import { Row, Col } from '../Table';
import ObserverDEV from '../DEV/ObserverDEV';
import ListStore from '../stores/PageListStore';
import { FormExample2 as FilterForm } from '../Form2/stories/examples/FormExample2.story';

import PageList from './PageList';

Promise.config({ cancellation: true });
const api = {
  async find2({ skip, limit } = {}) {
    await Promise.delay(2000);
    return {
      count: 1000,
      items: range(skip, skip + limit).map(id => ({ id, title: `User ${id + 1}` })),
    };
  },

  async find({ skip, limit, cancelToken } = {}) {
    const promise = Promise.delay(2000); // это типа гет запрос
    cancelToken.token.promise.then(() => promise.cancel());
    await promise;

    return {
      count: 1000,
      items: range(skip, skip + limit).map(id => ({ id, title: `User ${id + 1}` })),
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

const listStore = new ListStore({ api });
setTimeout(() => {
  listStore.fetch();
}, 2000);

const columns = [60, '1fr'];

const ListItem = observer(({ item = {} }) => (
  <Row>
    <Col index={0}>
      {item.id}
    </Col>
    <Col index={1}>
      {item.title}
    </Col>
  </Row>
));

const HeaderItem = () => (
  <Row>
    <Col index={0}>id</Col>
    <Col index={1}>name</Col>
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
        <ObserverDEV json={store} />
      </div>
    );
  }
}

export default ({ storiesOf }) => {
  return storiesOf('PageList', module)
    .add('default', () => (
      <Story devtools>
        <PageList
          listStore={listStore}
          HeaderItem={HeaderItem}
          ListItem={ListItem}
          FilterForm={FilterForm}
          columns={columns}
        />
        <Debug store={listStore} />
      </Story>
    ))
    .add('children', () => (
      <Story>
        <PageList>
          PageList content
        </PageList>
      </Story>
    ))
    .add('PageList.Header', () => (
      <Story>
        <PageList
          listStore={listStore}
          HeaderItem={HeaderItem}
          FilterForm={FilterForm}
          columns={columns}
        >
          <PageList.Header />
          <Debug store={listStore} />
        </PageList>
      </Story>
    ))
  //   <React.Fragment>
  //   <PageList.Search />
  //   <PageList.Filter
  //     Form={FilterForm}
  //   />
  //   <PageList.Tags createTags={createTags} />
  //   <PageList.StickyPanel>
  //     <PageList.TableHeader HeaderItem={HeaderItem} />
  //   </PageList.StickyPanel>
  // </React.Fragment>
    .add('PageList.Search', () => (
      <Story>
        <PageList
          listStore={listStore}
        >
          <PageList.Search />
          <Debug store={listStore} />
        </PageList>
      </Story>
    ))
    .add('PageList.Filter', () => (
      <Story>
        <PageList
          listStore={listStore}
          FilterForm={FilterForm}
        >
          <PageList.Filter />
          <Debug store={listStore} />
        </PageList>
      </Story>
    ))
    .add('PageList.Tags', () => (
      <Story>
        <PageList
          listStore={listStore}
        >
          <PageList.Tags />
          <Debug store={listStore} />
        </PageList>
      </Story>
    ))
    .add('PageList.HeaderItemWrapper', () => (
      <Story>
        <PageList
          listStore={listStore}
          HeaderItem={HeaderItem}
          columns={columns}
        >
          <PageList.HeaderItemWrapper />
          <Debug store={listStore} />
        </PageList>
      </Story>
    ))
    .add('PageList.Body', () => (
      <Story>
        <PageList
          listStore={listStore}
          ListItem={ListItem}
          columns={columns}
        >
          <PageList.Body ListItem={ListItem} />
        </PageList>
        <Debug store={listStore} />
      </Story>
    ))
    .add('PageList.Footer', () => (
      <Story>
        <PageList
          listStore={listStore}
        >
          <PageList.Footer />
        </PageList>
        <Debug store={listStore} />
      </Story>
    ))
    .add('PageList.Paginator', () => (
      <Story>
        <PageList
          listStore={listStore}
        >
          <PageList.Paginator />
        </PageList>
        <Debug store={listStore} />
      </Story>
    ))
    .add('props ListItem', () => (
      <Story>
        <PageList
          ListItem={ListItem}
        />
      </Story>
    ))
    .add('props HeaderItem', () => (
      <Story>
        <PageList
          HeaderItem={HeaderItem}
        />
      </Story>
    ))
    .add('props ListItem + HeaderItem + columns', () => (
      <Story>
        <PageList
          columns={['minmax(180px, 1fr)', 108, 64, 64, 'minmax(84px, 1fr)']}
          HeaderItem={HeaderItem}
          ListItem={ListItem}
        />
      </Story>
    ))
    .add('children - without footer', () => (
      <Story>
        <PageList
          columns={['minmax(180px, 1fr)', 108, 64, 64, 'minmax(84px, 1fr)']}
          ListItem={ListItem}
          HeaderItem={HeaderItem}
        >
          <PageList.Header />
          <PageList.Body />
        </PageList>
      </Story>
    ))
    .add('custome Header', () => (
      <Story>
        <PageList
          columns={['minmax(180px, 1fr)', 108, 64, 64, 'minmax(84px, 1fr)']}
          ListItem={ListItem}
          HeaderItem={HeaderItem}
        >
          <PageList.Header>
            Custom header
          </PageList.Header>
          <PageList.Body />
          <PageList.Footer />
        </PageList>
      </Story>
    ))
    .add('custom Header', () => (
      <Story>
        <PageList
          columns={['minmax(180px, 1fr)', 108, 64, 64, 'minmax(84px, 1fr)']}
          ListItem={ListItem}
          HeaderItem={HeaderItem}
        >
          <PageList.Header>
            Custom header
          </PageList.Header>
          <PageList.Body />
          <PageList.Footer />
        </PageList>
      </Story>
    ))
    .add('custom Body table', () => (
      <Story>
        <PageList
          columns={['minmax(180px, 1fr)', 108, 64, 64, 'minmax(84px, 1fr)']}
          ListItem={ListItem}
          HeaderItem={HeaderItem}
        >
          <PageList.Header />
          <PageList.Body>
            Custom Body
          </PageList.Body>
          <PageList.Footer />
        </PageList>
      </Story>
    ));
};
