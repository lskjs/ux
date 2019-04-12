
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
// import DEV from '@lskjs/dev/DEV';
import { contextToProps } from './List.context';

@contextToProps('List', 'HeaderItem')
@inject('listStore')
@observer
class ListHeaderRow extends Component {
  render() {
    const { List, listStore } = this.props;
    let { children } = this.props;

    if (!children) {
      const { HeaderItem } = this.props;
      if (!HeaderItem) return null; // <DEV json="!HeaderItem" />;
      children = (
        <HeaderItem
          toggleSort={listStore.toggleSort}
          sort={listStore.sort}
        />
      );
    }
    return (
      <List.HeaderItemWrapper>
        {children}
      </List.HeaderItemWrapper>
    );
  }
}

export default ListHeaderRow;
