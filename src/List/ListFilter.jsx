import React, { Component } from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import Collapse from '../Collapse';
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
      // container,
    } = this.props;
    if (!FilterForm) return null; // <DEV json="!FilterForm" />;

    return (
      <Collapse show={listStore.showFilter} type="collapse">
        <List.FilterWrapper>
          <FilterForm
            enableReinitialize
          // initialValues={listStore.filter}
            initialValues={toJS(listStore.filter)}
            onChange={listStore.setFilter}
          />
        </List.FilterWrapper>
      </Collapse>
    );
  }
}

export default ListFilter;
