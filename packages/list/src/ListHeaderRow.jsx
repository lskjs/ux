import { inject, observer } from 'mobx-react';
import React from 'react';

// import DEV from '@lskjs/dev/DEV';
import { contextToProps } from './List.context';

const ListHeaderRow = ({ List, listStore, children, HeaderItem }) => {
  let content = children;
  if (!content) {
    if (!HeaderItem) return null;
    content = <HeaderItem toggleSort={listStore.toggleSort} sort={listStore.sort} />;
  }
  return <List.HeaderItemWrapper>{content}</List.HeaderItemWrapper>;
};

export default contextToProps('List', 'HeaderItem')(inject('listStore')(observer(ListHeaderRow)));
