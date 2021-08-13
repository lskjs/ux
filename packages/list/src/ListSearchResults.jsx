import T from '@lskjs/t';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React from 'react';

import { contextToProps } from './List.context';

const ListSearchResults = ({ List, listStore }) => {
  if (listStore.count === null) return false;
  return (
    <List.SearchResultsWrapper>
      <T name="lskList.searchResultsCount" count={listStore.count} />
    </List.SearchResultsWrapper>
  );
};

ListSearchResults.propTypes = {
  List: PropTypes.objectOf(Object).isRequired,
  listStore: PropTypes.objectOf(Object).isRequired,
};

export default contextToProps('List')(inject('listStore')(observer(ListSearchResults)));
