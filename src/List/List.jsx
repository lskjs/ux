import React, { Component } from 'react';
import { Provider as MobxProvider } from 'mobx-react';

import ListStore from '../stores/ListStore';
import { Table } from '../Table';
import DEV from '../DEV';
import { ListPaper } from './List.styles';
import { Provider } from './ListContext';

import DefaultTags from './DefaultTags';
import DefaultTag from './DefaultTag';

const defaultShow = {
  sticky: true,
  search: true,
  filterButton: true,
  tags: true,
  more: true,
  infinity: true,
  footer: true,
  download: true,
  paginator: true,
};

class List extends Component {
  static Sticky = require('./ListSticky').default;
  static Header = require('./ListHeader').default;
  static Search = require('./ListSearch').default;
  static Filter = require('./ListFilter').default;
  static Tags = require('./ListTags').default;
  static Body = require('./ListBody').default;
  static HeaderItem = require('./ListHeaderItem').default;
  static Footer = require('./ListFooter').default;
  static Paginator = require('./ListPaginator').default;
  static FilterButton = require('./ListFilterButton').default;
  static Empty = require('./ListEmpty').default;

  static Button = ({ children }) => children; // Button
  static Search = ({ children }) => children; // import Search from '../UI/molecules/Search';
  // static DownloadButton = ({ children }) => children;

  static Wrapper = ({ children }) => children; // ListPaper
  static BodyWrapper = ({ children }) => children; // ListTableItems
  static FilterWrapper = ({ children }) => children; // FilterWrapper
  static TagsWrapper = ({ children }) => children; // TagsTableWrapper
  static HeaderItemWrapper = ({ children }) => children; // ListTableHeader
  static HeaderWrapper = ({ children }) => children; // ListHeader
  static FooterWrapper = ({ children }) => children; // Footer
  static FooterRightWrapper = ({ children }) => children; // FooterRight
  static PaginatorWrapper = ({ children }) => children; // PaginationWrapper
  static PaginatorGroupWrapper = ({ children }) => children; // PaginationGroup,
  static PaginatorPagesWrapper = ({ children }) => children; // PaginationPages,
  static PaginatorStepperWrapper = ({ children }) => children; // PaginationStepper,
  static PaginatorSelectWrapper = ({ children }) => children; // PaginationSelect,

  render() {
    const {
      columns, show = {},
      Item, FilterForm, HeaderItem, Tags = DefaultTags, Tag = DefaultTag, Body,
    } = this.props;

    let { listStore } = this.props;

    if (!listStore) {
      if (__DEV__) return <DEV json="!listStore" />;
      listStore = new ListStore();
    }

    const List = this.constructor;

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
    children = (
      // shadow={shadow}
      <List.Wrapper>
        {children}
      </List.Wrapper>
    );
    return (
      <Provider
        value={{
          List,
          show: {
            ...defaultShow,
            ...show,
          },
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

export default List;

