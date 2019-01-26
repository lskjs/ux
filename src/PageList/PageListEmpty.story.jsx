import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Story from '../Story';
import PageList from './PageList';
import range from 'lodash/range';
// import repeat from 'lodash/repeat';
// import ListStore from '../stores/ListStore';
import DEV from '../DEV';
import ListStore from '../stores/PageListStore';
import { toJS } from 'mobx';
import ObserverDEV from '../DEV/ObserverDEV';

const api = {
  getList(params) {
    console.log('api', params);
    return {
      count: 1000,
      // data: range(1, 5).map(id => ({ id })),
      data: [],
    };
  },
};
const listStore = new ListStore({ api });

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

const ListItem = () => (
  <div>
    ListItem
  </div>
);

const HeaderItem = () => (
  <div>
    HeaderItem
  </div>
);

module.exports = ({ storiesOf }) => {
  return storiesOf('PageList/Blank', module)
    .add('no fetch', () => (
      <Story>
        <PageList
          listStore={listStore}
        >
          <PageList.Body />
          <Debug store={listStore} />
        </PageList>
      </Story>
    ))
    .add('no data after fetch', () => (
      <Story>
        <PageList
          listStore={listStore}
        >
          <PageList.Body />
          <Debug store={listStore} />
        </PageList>
      </Story>
    ))
    .add('no filtered data', () => (
      <Story>
        <PageList
          listStore={listStore}
        >
          <PageList.Body />
          <Debug store={listStore} />
        </PageList>
      </Story>
    ));
};
