import React, { Component } from 'react';
import { Provider as MobxProvider } from 'mobx-react';

import ListStore from '../stores/ListStore';
import Table from '../Table';

import PageListHeader from './PageListHeader';
import PageListBody from './PageListBody';
import PageListFooter from './PageListFooter';
import PageListSearch from './PageListSearch';
import PageListTags from './PageListTags';
import PageListTableHeader from './PageListTableHeader';
import PageListFilter from './PageListFilter';

import { ListPaper } from './PageList.styles';
import { Provider } from './PageListContext';


class PageList extends Component {
  static Header = PageListHeader;
  static Body = PageListBody;
  static Footer = PageListFooter;
  static Search = PageListSearch;
  static Filter = PageListFilter;
  static Tags = PageListTags;
  static TableHeader = PageListTableHeader;
  static Paginator = require('./PageListPaginator').default;
  // static StickyPanel = PageListStickyPanel;
  static StickyPanel = ({ children }) => <div>{children}</div>;
  render() {
    const {
      columns, container,
      ListItem, FilterForm, createTags, HeaderItem, listStore,
    } = this.props;

    if (!listStore) return <div>!listStore</div>;


    let { children } = this.props;

    if (!children) {
      children = (
        <React.Fragment>
          <PageList.Header
            FilterForm={FilterForm}
            HeaderItem={HeaderItem}
            createTags={createTags}
          />
          <PageList.Body ListItem={ListItem} />
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
        <ListPaper>
          {children}
        </ListPaper>
      );
    }

    // return <MobxProvider listStore={listStore}>
    // <div>
    //   PageList
    //   </div>
    // </MobxProvider>
    return (
      <MobxProvider listStore={listStore} pageList={this}>
        <Provider value={this.constructor}>
          {children}
        </Provider>
      </MobxProvider>
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

