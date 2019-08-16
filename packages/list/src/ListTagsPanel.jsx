import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import T from '@lskjs/ui/T';
import { contextToProps } from './List.context';

@contextToProps('List', 'filterProps')
@inject('listStore')
@observer
class ListTagsPanel extends Component {
  render() {
    const {
      List,
      form,
      listStore,
      filterProps,
    } = this.props;
    if (!listStore.getActiveFilter) return null;
    return (
      <List.TagsPanelWrapper>
        <List.Tags listStore={listStore} Tag={List.Tag} form={form} {...filterProps} />
        <List.Button
          size="extraSmall"
          paint="primary"
          view="text"
          bordered
          // rounded
          onClick={listStore.clearFilter}
        >
          <T name="lskList.resetFilterButton" />
        </List.Button>
      </List.TagsPanelWrapper>
    );
  }
}

export default ListTagsPanel;
