import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Story from '../Story';
import PageList from './PageList';
import range from 'lodash/range';
// import repeat from 'lodash/repeat';
// import ListStore from '../stores/ListStore';
import DEV from '../DEV';
import ProtoListStore from '../stores/PageListStore';
import { toJS } from 'mobx';

class ListStore extends ProtoListStore {
  static getList() {
    return range(1, 5).map(id => ({ id }));
  }
}
const listStore = new ListStore();

@observer
class ODEV extends Component {
  render() {
    const { listStore } = this.props;
    return (
      <DEV json={toJS(listStore)} />
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
        <PageList>
          <PageList.Header />
        </PageList>
      </Story>
    ))
    .add('PageList.Body', () => (
      <Story>
        <PageList>
          <PageList.Body />
        </PageList>
      </Story>
    ))
    .add('PageList.Footer', () => (
      <Story>
        <PageList>
          <PageList.Footer />
        </PageList>
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
