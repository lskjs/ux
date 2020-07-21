import React, { Component } from 'react';
import { Provider as MobxProvider } from 'mobx-react';
import mapValues from 'lodash/mapValues';
import ListStore from '@lskjs/mobx/stores/ListStore';
import collectProps from '@lskjs/utils/collectProps';
import collectProp from '@lskjs/utils/collectProp';
import Button from '@lskjs/button';
import scroll from '@lskjs/scroll';
import { Table } from '@lskjs/ui/Table';
import DEV from '@lskjs/dev/DEV';
import DefaultSearchComponent from './DefaultSearchComponent';
import {
  Wrapper,
  BodyWrapper,
  ItemsWrapper,
  FilterWrapper,
  TagsPanelWrapper,
  HeaderItemWrapper,
  SearchWrapper,
  SearchResultsWrapper,
  HeaderWrapper,
  FooterWrapper,
  PaginatorWrapper,
  PagesWrapper,
  StepperWrapper,
  SelectWrapper,
  SelectRowWrapper,
  HoverRowWrapper,
  globalStylesList,
} from './List.styles';
import { Provider } from './List.context';

import ListSearchResults from './ListSearchResults';
import ListSelectRow from './ListSelectRow';
import ListSticky from './ListSticky';
import ListHeader from './ListHeader';
import ListSearch from './ListSearch';
import ListFilter from './ListFilter';
import ListTagsPanel from './ListTagsPanel';
import ListBody from './ListBody';
import ListItems from './ListItems';
import ListHeaderRow from './ListHeaderRow';
import ListFooter from './ListFooter';
import ListFilterButton from './ListFilterButton';
import ListEmpty from './ListEmpty';
import ListSortHeader from './ListSortHeader';
import ListCheckbox from './ListCheckbox';
import ListPaginator from './ListPaginator';

import DefaultLoader from './DefaultLoader';
import DefaultTags from './DefaultTags';
import DefaultTag from './DefaultTag';

globalStylesList();

const defaultShow = {
  /** */ header: true,
  /** */ sticky: true,
  /** */ search: true,
  /** */ searchResults: true,
  /** */ filterButton: true,
  /** */ filterModal: true,
  /** */ tags: true,

  /** body */
  /** */ more: true,
  /** */ infinity: true,

  /** */ footer: true,
  /** */ download: true,
  /** */ pages: true,
  /** */ stepper: true,
  /** */ paginator: true,
};

const DEBUG = false;

class List extends Component {
  static Tag = DefaultTag;
  static Tags = DefaultTags;
  static LoaderIcon = DefaultLoader;
  static Sticky = ListSticky;
  static Header = ListHeader;
  static Search = ListSearch;
  static Filter = ListFilter;
  static TagsPanel = ListTagsPanel;
  static Body = ListBody;
  static Items = ListItems;
  static HeaderRow = ListHeaderRow;
  static Footer = ListFooter;
  static Paginator = ListPaginator;
  static FilterButton = ListFilterButton;
  static Empty = ListEmpty;
  static SortHeader = ListSortHeader;
  static Checkbox = ListCheckbox;
  static SelectRow = ListSelectRow;
  static HoverRow = HoverRowWrapper;
  static isFilterModal = true;
  static Button = Button;
  static SearchResults = ListSearchResults;
  static SearchWrapper = SearchWrapper;
  static SearchComponent = DefaultSearchComponent;
  static SearchResultsWrapper = SearchResultsWrapper;
  // static DownloadButton = ({ children }) => children;

  static Wrapper = Wrapper;
  static BodyWrapper = BodyWrapper;
  static ItemsWrapper = ItemsWrapper;
  static FilterWrapper = FilterWrapper;
  static TagsPanelWrapper = TagsPanelWrapper;
  static HeaderItemWrapper = HeaderItemWrapper;
  static HeaderWrapper = HeaderWrapper;
  static FooterWrapper = FooterWrapper;
  // download

  static PagesWrapper = PagesWrapper; // pages
  static StepperWrapper = StepperWrapper; // stepper
  static SelectWrapper = SelectWrapper;
  static SelectRowWrapper = SelectRowWrapper;
  static PaginatorWrapper = PaginatorWrapper;

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  componentDidMount() {
    const { listStore, scroll: scrollEnable = true } = this.props;
    if (listStore && listStore.subscribe) {
      this.unsubscribe = listStore.subscribe((before, after) => {
        if (DEBUG) console.log('listStore.subscribe', before, after); // eslint-disable-line no-console
        const el = this.listRef.current;
        if (scrollEnable && el && el.offsetTop < window.scrollY) {
          scroll(el, { offset: -10 });
        }
      });
    }
  }
  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }
  render() {
    const {
      debug,
      columns,
      show: customShow = {},
      pageSize = 10,
      pageOptions = [1, 2, 5, 10],
      paginatorProps = {},
      Item,
      FilterForm,
      HeaderItem,
      filterProps,
      innerProps,
      itemProps,
      footerProps,
    } = this.props;
    const isFilterModal = collectProp(this, 'isFilterModal');
    let { listStore } = this.props;

    if (!listStore) {
      if (__DEV__) return <DEV json="!listStore" />;
      listStore = new ListStore();
    }

    const { selectStore } = listStore;

    const show = mapValues(
      {
        ...defaultShow,
        ...customShow,
      },
      Boolean,
    );

    // eslint-disable-next-line no-shadow
    const List = collectProps(this, [
      'LoaderIcon',
      'Sticky',
      'Header',
      'Search',
      'Filter',
      'Tag',
      'Tags',
      'TagsPanel',
      'Body',
      'Items',
      'HeaderRow', // !!!!!!!!!!!!!!
      'Footer',
      'Paginator',
      'FilterButton',
      'Empty',
      'SortHeader',
      'Checkbox',
      'SelectRow',
      'HoverRow',

      'Button',
      'SearchResults',
      'SearchWrapper',
      'SearchComponent',
      'SearchResultsWrapper',

      'Wrapper',
      'BodyWrapper',
      'ItemsWrapper',
      'FilterWrapper',
      'TagsPanelWrapper',
      'HeaderItemWrapper',
      'HeaderWrapper',
      'FooterWrapper',

      'PaginatorWrapper',
      'PagesWrapper',
      'StepperWrapper',
      'SelectWrapper',
      'SelectRowWrapper',
    ]);

    let { children } = this.props;

    if (!children) {
      children = (
        <>
          {show.header && <List.Header />}
          <List.Body />
          {show.footer && <List.Footer />}
        </>
      );
    }

    if (columns) {
      children = <Table columns={columns}>{children}</Table>;
    }
    children = (
      // shadow={shadow}
      <List.Wrapper ref={this.listRef} style={{ width: '100%' }}>
        {children}
      </List.Wrapper>
    );
    return (
      <Provider
        value={{
          List,
          show,
          pageSize,
          pageOptions,
          Item,
          FilterForm,
          HeaderItem,
          isFilterModal,
          paginatorProps,
          debug,
          filterProps,
          innerProps,
          itemProps,
          footerProps,
        }}
      >
        <MobxProvider listStore={listStore} selectStore={selectStore}>
          <>{children}</>
        </MobxProvider>
      </Provider>
    );
  }
}

export default List;
