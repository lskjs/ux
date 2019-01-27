import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Button from '../Button';
import { TagsTableWrapper } from './PageList.styles';
import { contextToProps } from './PageListContext';

@contextToProps('Tags', 'Tag')
@inject('listStore')
@observer
class PageListTags extends Component {
  render() {
    const {
      Tags,
      Tag,
      listStore,
    } = this.props;
    if (!listStore.hasFilter()) return null;
    return (
      <TagsTableWrapper >
        <Tags listStore={listStore} Tag={Tag} />
        <Button
          size="small"
          paint="primary"
          view="text"
          bordered
          rounded
          onClick={listStore.clearFilter}
        >
          Снять все фильтры
        </Button>
      </TagsTableWrapper>
    );
  }
}

export default PageListTags;
