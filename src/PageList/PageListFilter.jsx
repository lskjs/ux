import React, { Component } from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import FilterCollapse from '../UI/organisms/FilterCollapse';
import DEV from '../DEV';
import { FilterWrapper } from './PageList.styles';
import { contextToProps } from './PageListContext';

@contextToProps('FilterForm')
@inject('listStore')
@observer
class PageListFilter extends Component {
  render() {
    const {
      FilterForm,
      listStore,
      // container,
    } = this.props;
    if (!FilterForm) return <DEV json="!FilterForm" />;
    return (
      <FilterCollapse show={listStore.showFilter}>
        <FilterWrapper>
          <FilterForm
            initialValues={toJS(listStore.filter)}
            onChange={listStore.setFilter}
          />
        </FilterWrapper>
      </FilterCollapse>
    );
  }
}

export default PageListFilter;
