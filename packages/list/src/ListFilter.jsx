import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import If from 'react-if';
import isTouchDevice from '@lskjs/utils/isTouchDevice';
import DEV from '@lskjs/dev/DEV';
import Collapse from '@lskjs/ui/Collapse';
import { contextToProps } from './List.context';
import ListFilterModal from './ListFilterModal';

@contextToProps('List', 'FilterForm', 'debug', 'filterProps')
@inject('listStore')
@observer
class ListFilter extends Component {
  render() {
    const {
      List,
      FilterForm,
      listStore,
      debug,
      filterProps,
      isFilterModal,
      // container,
    } = this.props;
    if (!FilterForm) return null; // <DEV json="!FilterForm" />;
    const { showFilter } = listStore;
    return (
      <React.Fragment>
        <If condition={isFilterModal && isTouchDevice()}>
          <ListFilterModal
            className="d-md-none"
            overlayClassName="d-md-none"
            visible={showFilter}
            onClose={listStore.toggleFilter}
          />
        </If>
        <div className={(isFilterModal && isTouchDevice()) ? 'd-none d-md-block' : ''}>
          <Collapse
            show={showFilter}
            type="collapse"
          >
            <List.FilterWrapper>
              <FilterForm
                {...filterProps}
                enableReinitialize
                initialValues={listStore.filter}
                hash={listStore.filter}
                onChange={listStore.setFilter}
              />
              <If condition={debug}>
                <DEV json={listStore.filter} />
              </If>
            </List.FilterWrapper>
          </Collapse>
        </div>
      </React.Fragment>
    );
  }
}

export default ListFilter;
