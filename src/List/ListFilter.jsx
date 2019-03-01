import React, { Component } from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import If from 'react-if';
import Collapse from '../Collapse';
import { contextToProps } from './List.context';
import ListFilterModal from './ListFilterModal';
import DEV from '../DEV';

@contextToProps('List', 'FilterForm', 'debug')
@inject('listStore')
@observer
class ListFilter extends Component {
  // constructor() {
  //   super();
  //   this.form = React.createRef();
  //   setTimeout(() => {

  //     __DEV__ && console.log('this.form', this.form);
  //   }, 1000);
  // }
  render() {
    const {
      List,
      FilterForm,
      listStore,
      debug,
      // container,
    } = this.props;
    if (!FilterForm) return null; // <DEV json="!FilterForm" />;
    const isFilterModal = 0;
    const { showFilter } = listStore;
    // const showFilter = 1;
    return (
      <React.Fragment>
        <If condition={isFilterModal}>
          <ListFilterModal
            className="d-md-none"
            overlayClassName="d-md-none"
            visible={showFilter}
            onClose={listStore.toggleFilter}
          />
        </If>
        <div className={isFilterModal ? 'd-none d-md-block' : null}>
          <Collapse
            show={showFilter}
            type="collapse"
          >
            <List.FilterWrapper>
              <FilterForm
                ref={this.form}
                enableReinitialize
              // initialValues={listStore.filter}
                initialValues={toJS(listStore.filter)}
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
