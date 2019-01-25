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

const api = {
  getList(params) {
    console.log('api', params);
    return {
      count: 1000,
      data: range(1, 5).map(id => ({ id })),
    };
  },
};
const listStore = new ListStore({ api });

@observer
class ODEV extends Component {
  render() {
    const { listStore } = this.props;
    return (
      <div>
        <button onClick={() => listStore.fetch()}>
          fetch
        </button>
        <DEV json={toJS(listStore)} />
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
  return storiesOf('PageList', module)
    .add('default', () => (
      <Story>
        <PageList
          listStore={listStore}
        />
        <ODEV listStore={listStore} />
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
          <ODEV listStore={listStore} />
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
          <ODEV listStore={listStore} />
        </PageList>
      </Story>
    ))
    .add('PageList.Filter', () => (
      <Story>
        <PageList
          listStore={listStore}
        >
          <PageList.Filter />
          <ODEV listStore={listStore} />
        </PageList>
      </Story>
    ))
    .add('PageList.Tags', () => (
      <Story>
        <PageList
          listStore={listStore}
        >
          <PageList.Tags />
          <ODEV listStore={listStore} />
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
        <ODEV listStore={listStore} />
      </Story>
    ))
    .add('PageList.Footer', () => (
      <Story>
        <PageList
          listStore={listStore}
        >
          <PageList.Footer />
        </PageList>
        <ODEV listStore={listStore} />
      </Story>
    ))
    .add('PageList.Paginator', () => (
      <Story>
        <PageList
          listStore={listStore}
        >
          <PageList.Paginator />
        </PageList>
        <ODEV listStore={listStore} />
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
