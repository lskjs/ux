import React, { Component } from 'react';
import Table from '../Table';

import PageListBody from './PageListBody';
import PageListFooter from './PageListFooter';
import PageListSearch from './PageListSearch';
import PageListTags from './PageListTags';
import PageListTableHeader from './PageListTableHeader';
import PageListFilter from './PageListFilter';

import {
  ListPaper,
  ListHeader,
} from './_List.styles';

class List extends Component {
  static Header = ({ children }) => (<ListHeader>{children}</ListHeader>);
  static Body = PageListBody;
  static Footer = PageListFooter;
  static Search = PageListSearch;
  static Filter = PageListFilter;
  static Tags = PageListTags;
  static TableHeader = PageListTableHeader;
  // static StickyPanel = PageListStickyPanel;
  static StickyPanel = ({ children }) => <div>{children}</div>;
  render() {
    const { columns, children } = this.props;
    return (
      <ListPaper>
        <Table
          columns={columns}
        >
          {children}
        </Table>
      </ListPaper>
    );
  }
}

export default List;

