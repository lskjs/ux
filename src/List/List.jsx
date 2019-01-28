import React, { Component } from 'react';
import { Provider as MobxProvider } from 'mobx-react';

import ListStore from '../stores/ListStore';
import { Table } from '../Table';
import DEV from '../DEV';
import { ListPaper } from './List.styles';
import { Provider } from './ListContext';

import DefaultTags from './DefaultTags';
import DefaultTag from './DefaultTag';

class List extends Component {
  static Header = require('./ListHeader').default;
  static Search = require('./ListSearch').default;
  static Filter = require('./ListFilter').default;
  static Tags = require('./ListTags').default;
  static Body = require('./ListBody').default;
  static HeaderItem = require('./ListHeaderItem').default;
  static Footer = require('./ListFooter').default;
  static Paginator = require('./ListPaginator').default;
  static Blank = require('./ListBlank').default;


  // static StickyPanel = ListStickyPanel;
  static StickyPanel = ({ children }) => <div>{children}</div>;
  render() {
    const {
      shadow, columns,
      Item, FilterForm, HeaderItem, Tags = DefaultTags, Tag = DefaultTag, Body,
    } = this.props;

    let { listStore } = this.props;

    if (!listStore) {
      if (__DEV__) return <DEV json="!listStore" />;
      listStore = new ListStore();
    }

    let { children } = this.props;

    if (!children) {
      children = (
        <React.Fragment>
          <List.Header />
          <List.Body />
          <List.Footer />
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
    // if (container) {
    children = (
      <ListPaper shadow={shadow}>
        {children}
      </ListPaper>
    );
    // }
    return (
      <Provider
        value={{
          List: this,
          List: this.constructor,

          // Header: this.constructor.Header,
          // Body: this.constructor.Body,
          // Footer: this.constructor.Footer,
          // Search: this.constructor.Search,
          // Filter: this.constructor.Filter,
          // TagsWrapper: this.constructor.TagsWrapper,
          // HeaderItemWrapper: this.constructor.HeaderItemWrapper,
          // Paginator: this.constructor.Paginator,
          // Blank: this.constructor.Blank,

          Item,
          FilterForm,
          Tags,
          Tag,
          HeaderItem,
          Body,
        }}
      >
        <MobxProvider listStore={listStore}>
          <React.Fragment>
            {children}
          </React.Fragment>
        </MobxProvider>
      </Provider>
    );
  }
}


//   <List
// // listStore={pageStore.listStore}
//     columns={['minmax(180px, 1fr)', 108, 64, 64, 'minmax(84px, 1fr)']}
// // createTags={createTags}
//     Item={Item}
//     HeaderItem={HeaderItem}
//   />;
// <List.Header>
//   <List.Search />
//   <List.Filter
//     Form={FilterForm}
//   />
//   <List.Tags createTags={createChannelsTags} />
//   <List.StickyPanel>
//     <HeaderItem />
//     <List.TableHeader HeaderItem={HeaderItem} />
//   </List.StickyPanel>
// </List.Header>
// <List.Body Item={Item} />
// <List.Footer />
// </List>


export default List;

