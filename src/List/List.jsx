import React, { Component } from 'react';
import { Provider as MobxProvider } from 'mobx-react';
import mapValues from 'lodash/mapValues';
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
import { Provider } from './List.context';

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
  header: true,
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
      columns, show: customShow = {},
      Item, FilterForm, HeaderItem, Tags = DefaultTags, Tag = DefaultTag, Body,
    } = this.props;

    let { listStore } = this.props;

    if (!listStore) {
      if (__DEV__) return <DEV json="!listStore" />;
      listStore = new ListStore();
    }

    const show = mapValues({
      ...defaultShow,
      ...customShow,
    }, Boolean);

    const List = {  //eslint-disable-line
      Sticky: this.constructor.Sticky || this.props.Sticky,
      Header: this.constructor.Header || this.props.Header,
      Search: this.constructor.Search || this.props.Search,
      Filter: this.constructor.Filter || this.props.Filter,
      Tags: this.constructor.Tags || this.props.Tags,
      Body: this.constructor.Body || this.props.Body,
      HeaderItem: this.constructor.HeaderItem || this.props.HeaderItem,
      Footer: this.constructor.Footer || this.props.Footer,
      Paginator: this.constructor.Paginator || this.props.Paginator,
      FilterButton: this.constructor.FilterButton || this.props.FilterButton,
      Empty: this.constructor.Empty || this.props.Empty,
      SortHeader: this.constructor.SortHeader || this.props.SortHeader,

      Button: this.constructor.Button || this.props.Button,
      SearchWrapper: this.constructor.SearchWrapper || this.props.SearchWrapper,

      Wrapper: this.constructor.Wrapper || this.props.Wrapper,
      BodyWrapper: this.constructor.BodyWrapper || this.props.BodyWrapper,
      FilterWrapper: this.constructor.FilterWrapper || this.props.FilterWrapper,
      TagsWrapper: this.constructor.TagsWrapper || this.props.TagsWrapper,
      HeaderItemWrapper: this.constructor.HeaderItemWrapper || this.props.HeaderItemWrapper,
      HeaderWrapper: this.constructor.HeaderWrapper || this.props.HeaderWrapper,
      FooterWrapper: this.constructor.FooterWrapper || this.props.FooterWrapper,
      FooterRightWrapper: this.constructor.FooterRightWrapper || this.props.FooterRightWrapper,
      PaginatorWrapper: this.constructor.PaginatorWrapper || this.props.PaginatorWrapper,
      PaginatorGroupWrapper: this.constructor.PaginatorGroupWrapper || this.props.PaginatorGroupWrapper,
      PaginatorPagesWrapper: this.constructor.PaginatorPagesWrapper || this.props.PaginatorPagesWrapper,
      PaginatorStepperWrapper: this.constructor.PaginatorStepperWrapper || this.props.PaginatorStepperWrapper,
      PaginatorSelectWrapper: this.constructor.PaginatorSelectWrapper || this.props.PaginatorSelectWrapper,
    };

    let { children } = this.props;

    if (!children) {
      children = (
        <React.Fragment>
          {show.header && <List.Header />}
          <List.Body />
          {show.footer && <List.Footer />}
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
          show,
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

