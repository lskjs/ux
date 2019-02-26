import React, { Component } from 'react';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import filter from 'lodash/filter';
import { Badge } from 'antd';
import If from 'react-if';
import TuneIcon from 'react-icons2/mdi/tune';
import isEmpty from '../utils/isEmpty';
import T from '../T';
import ListFilterModal from './ListFilterModal';
import { contextToProps } from './List.context';
import { filterButton } from './List.styles';

@contextToProps('List', 'isFilterModal')
@inject('listStore')
@observer
class FilterButton extends Component {
  render() {
    const {
      List, listStore, isFilterModal,
    } = this.props;
    const badge = listStore.hasFilter ? filter(toJS(listStore.filter), a => !isEmpty(a)).length : 0;
    const button = (
      <Badge count={badge}>
        <List.Button
          className={filterButton}
          iconLeft={<TuneIcon />}
          paint="primary"
          view="text"
          bordered
          style={{ backgroundColor: listStore.showFilter ? '#F0F0FF' : '' }}
          onClick={isFilterModal ? null : listStore.toggleFilter}
        >
          <T name="lskList.filterButton" />
        </List.Button>
      </Badge>
    );
    return (
      <React.Fragment>
        <If condition={isFilterModal}>
          <ListFilterModal>
            {button}
          </ListFilterModal>
        </If>
        <If condition={!isFilterModal}>
          {button}
        </If>
      </React.Fragment>
    );
  }
}

export default FilterButton;
