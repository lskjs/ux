import { inject, observer } from 'mobx-react';
import React from 'react';

import { contextToProps } from './List.context';

const ListHeader = ({ List, children, listStore, show }) => {
  if (children) return <List.HeaderWrapper>{children}</List.HeaderWrapper>;
  return (
    <>
      {!!show.search && (
        <List.HeaderWrapper>
          <List.Search />
        </List.HeaderWrapper>
      )}
      <List.HeaderWrapper>
        <List.Filter />
      </List.HeaderWrapper>
      {!!show.tags && (
        <List.HeaderWrapper>
          <List.TagsPanel />
        </List.HeaderWrapper>
      )}
      {!!show.searchResults && listStore.hasFilter && (
        <List.HeaderWrapper>
          <List.SearchResults />
        </List.HeaderWrapper>
      )}
      <List.HeaderWrapper sticky={!!show.sticky}>
        <List.HeaderRow />
      </List.HeaderWrapper>
    </>
  );
};

export default contextToProps('List', 'show')(inject('listStore')(observer(ListHeader)));
