import React, { Component } from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import FilterCollapse from '../UI/organisms/FilterCollapse';
import DEV from '../DEV';
import { contextToProps } from './List.context';

@contextToProps('List', 'FilterForm')
@inject('listStore')
@observer
class ListFilter extends Component {
  render() {
    const {
      List,
      FilterForm,
      listStore,
      visible,
      // container,
    } = this.props;
    if (!FilterForm) return null; // <DEV json="!FilterForm" />;
    let children = (
      <List.FilterWrapper>
        <FilterForm
          enableReinitialize
          initialValues={toJS(listStore.filter)}
          onChange={listStore.setFilter}
        />
      </List.FilterWrapper>
    );
    if (!visible) {
      children = (
        <FilterCollapse show={listStore.showFilter}>
          {children}
        </FilterCollapse>
      );
    }
    return children;
  }
}

export default ListFilter;
