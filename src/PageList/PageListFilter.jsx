import React, { Component } from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import { UnmountClosed } from 'react-collapse';
import DEV from '../DEV';
import { contextToProps } from './PageListContext';

@contextToProps('FilterForm')
@inject('listStore')
@observer
class PageListFilter extends Component {
  render() {
    const {
      FilterForm,
      listStore,
      container,
    } = this.props;

    if (!FilterForm) return <DEV json="!FilterForm" />;
    let children = (
      <FilterForm
        initialValues={toJS(listStore.filter)}
        onChange={listStore.setFilter}
      />
    );

    if (container) {
      children = (
        <UnmountClosed show={listStore.filterShow}>
          {children}
        </UnmountClosed>
      );
    }
    return children;
  }
}

export default PageListFilter;
