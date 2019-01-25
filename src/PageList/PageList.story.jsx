import React, { Component } from 'react';
import range from 'lodash/range';

import Story from '../Story';
// import repeat from 'lodash/repeat';
// import ListStore from '../stores/ListStore';
import ObserverDEV from '../DEV/ObserverDEV';
import ListStore from '../stores/PageListStore';
import { FormExample1 } from '../Form2/stories/examples/FormExample1.story';

import PageList from './PageList';

const api = {
  find(params, params2) {
    // console.log('api.find', params, params2);
    return {
      count: 1000,
      data: range(1, 6).map(id => ({ id })),
    };
  },
};

const listStore = new ListStore({ api });


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
      <Story>
        <PageList
          listStore={listStore}
          Form={FormExample1}
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
        >
          <PageList.Filter Form={FormExample1} />
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
    .add('PageList.Body', () => (
      <Story>
        <PageList
          listStore={listStore}
        >
          <PageList.Body />
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
    .add('ListItem', () => (
      <Story>
        <PageList
          ListItem={ListItem}
        />
      </Story>
    ))
    .add('HeaderItem', () => (
      <Story>
        <PageList
          HeaderItem={HeaderItem}
        />
      </Story>
    ))
    .add('ListItem + HeaderItem + columns', () => (
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
