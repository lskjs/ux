import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Button from '../Button';
import { TagsTableWrapper } from './List.styles';
import { contextToProps } from './ListContext';

@contextToProps('List', 'Tags', 'Tag')
@inject('listStore')
@observer
class ListTags extends Component {
  render() {
    const {
      Tags,
      Tag,
      listStore,
    } = this.props;
    if (!listStore.hasFilter) return null;
    return (
      <List.TagsWrapper >
        <Tags listStore={listStore} Tag={Tag} />
        <List.Button
          size="small"
          paint="primary"
          view="text"
          bordered
          rounded
          onClick={listStore.clearFilter}
        >
          Снять все фильтры
        </List.Button>
      <List.TagsWrapper >
    );
  }
}

export default ListTags;
