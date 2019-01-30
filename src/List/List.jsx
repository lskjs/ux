import React, { Component } from 'react';
import { Provider as MobxProvider } from 'mobx-react';
import Search from '../UI/molecules/Search';
import ListStore from '../stores/ListStore';
import Button from '../Button';
import { Table } from '../Table';
import DEV from '../DEV';
import {
  Wrapper,
  BodyWrapper,
  FilterWrapper,
  TagsWrapper,
  HeaderItemWrapper,
  HeaderWrapper,
  FooterWrapper,
  FooterRightWrapper,
  PaginatorWrapper,
  PaginatorGroupWrapper,
  PaginatorPagesWrapper,
  PaginatorStepperWrapper,
  PaginatorSelectWrapper,
} from './List.styles';
import { Provider } from './ListContext';

import ListSticky from './ListSticky';
import ListHeader from './ListHeader';
import ListSearch from './ListSearch';
import ListFilter from './ListFilter';
import ListTags from './ListTags';
import ListBody from './ListBody';
import ListHeaderItem from './ListHeaderItem';
import ListFooter from './ListFooter';
import ListPaginator from './ListPaginator';
import ListFilterButton from './ListFilterButton';
import ListEmpty from './ListEmpty';
import ListSortHeader from './ListSortHeader';


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
  static Sticky = ListSticky;
  static Header = ListHeader;
  static Search = ListSearch;
  static Filter = ListFilter;
  static Tags = ListTags;
  static Body = ListBody;
  static HeaderItem = ListHeaderItem;
  static Footer = ListFooter;
  static Paginator = ListPaginator;
  static FilterButton = ListFilterButton;
  static Empty = ListEmpty;
  static SortHeader = ListSortHeader;

  static Button = Button;
  static SearchWrapper = Search;
  // static DownloadButton = ({ children }) => children;

  static Wrapper = Wrapper;
  static BodyWrapper = BodyWrapper;
  static FilterWrapper = FilterWrapper;
  static TagsWrapper = TagsWrapper;
  static HeaderItemWrapper = HeaderItemWrapper;
  static HeaderWrapper = HeaderWrapper;
  static FooterWrapper = FooterWrapper;
  static FooterRightWrapper = FooterRightWrapper;
  static PaginatorWrapper = PaginatorWrapper;
  static PaginatorGroupWrapper = PaginatorGroupWrapper;
  static PaginatorPagesWrapper = PaginatorPagesWrapper;
  static PaginatorStepperWrapper = PaginatorStepperWrapper;
  static PaginatorSelectWrapper = PaginatorSelectWrapper;

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

    const List = this.constructor; // eslint-disable-line no-shadow

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

