import React, { Component } from 'react';
import { Provider as MobxProvider } from 'mobx-react';

import ListStore from '../stores/ListStore';
import { Table } from '../Table';
import { ListPaper } from './PageList.styles';
import { Provider } from './PageListContext';


class PageList extends Component {
  static Header = require('./PageListHeader').default;
  static Search = require('./PageListSearch').default;
  static Filter = require('./PageListFilter').default;
  static Tags = require('./PageListTags').default;
  static Body = require('./PageListBody').default;
  static HeaderItemWrapper = require('./PageListHeaderItemWrapper').default;
  static Footer = require('./PageListFooter').default;
  static Paginator = require('./PageListPaginator').default;
  static Blank = require('./PageListBlank').default;
  // static StickyPanel = PageListStickyPanel;
  static StickyPanel = ({ children }) => <div>{children}</div>;
  render() {
    const {
      shadow, columns, container, listStore = new ListStore(),
      ListItem, FilterForm, createTags, HeaderItem,
    } = this.props;

    // if (!listStore) return <DEV json='!listStore' />

    let { children } = this.props;

    if (!children) {
      children = (
        <React.Fragment>
          <PageList.Header />
          <PageList.Body />
          <PageList.Footer />
        </React.Fragment>
      );
    }

    if (columns) {
      children = (
        <Table
          columns={columns}
        >
          {children}
        </Table>
      );
    }
    if (container) {
      children = (
        <ListPaper shadow={shadow}>
          {children}
        </ListPaper>
      );
    }
    return (
      <Provider
        value={{
          pageList: this,
          PageList: this.constructor,

          Header: this.constructor.Header,
          Body: this.constructor.Body,
          Footer: this.constructor.Footer,
          Search: this.constructor.Search,
          Filter: this.constructor.Filter,
          Tags: this.constructor.Tags,
          HeaderItemWrapper: this.constructor.HeaderItemWrapper,
          Paginator: this.constructor.Paginator,
          Blank: this.constructor.Blank,

          ListItem,
          FilterForm,
          createTags,
          HeaderItem,
        }}
      >
        <MobxProvider listStore={listStore}>
          {children}
        </MobxProvider>
      </Provider>
    );
  }
}


//   <PageList
// // listStore={pageStore.listStore}
//     columns={['minmax(180px, 1fr)', 108, 64, 64, 'minmax(84px, 1fr)']}
// // createTags={createTags}
//     ListItem={ListItem}
//     HeaderItem={HeaderItem}
//   />;
// <PageList.Header>
//   <PageList.Search />
//   <PageList.Filter
//     Form={FilterForm}
//   />
//   <PageList.Tags createTags={createChannelsTags} />
//   <PageList.StickyPanel>
//     <HeaderItem />
//     <PageList.TableHeader HeaderItem={HeaderItem} />
//   </PageList.StickyPanel>
// </PageList.Header>
// <PageList.Body ListItem={ListItem} />
// <PageList.Footer />
// </PageList>


export default PageList;

