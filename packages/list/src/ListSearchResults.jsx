import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import T from '@lskjs/t';
import { contextToProps } from './List.context';

@contextToProps('List')
@inject('listStore')
@observer
class ListSearchResults extends Component {
  static propTypes = {
    List: PropTypes.object.isRequired, 
    listStore: PropTypes.object.isRequired,
  }

  render() {
    const { List, listStore } = this.props;
    // lskList.searchResultsCount = Найдено {{count}} результатов
    if (listStore.count === null) return false;
    return (
      <List.SearchResultsWrapper>
        <T name="lskList.searchResultsCount" count={listStore.count} />
      </List.SearchResultsWrapper>
    );
  }
}

export default ListSearchResults;
