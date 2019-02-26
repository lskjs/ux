import React, { Component } from 'react';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import filter from 'lodash/filter';
import { Badge } from 'antd';
import If from 'react-if';
import TuneIcon from 'react-icons2/mdi/tune';
import isEmpty from '../utils/isEmpty';
import T from '../T';
// import withResponsive from '../Button/withResponsive';
import ListFilterModal from './ListFilterModal';
import { contextToProps } from './List.context';

@contextToProps('List', 'isFilterModal')
@inject('listStore')
@observer
class FilterButton extends Component {
  render() {
    const {
      List, listStore, isFilterModal,
    } = this.props;
    const badge = listStore.hasFilter ? filter(toJS(listStore.filter), a => !isEmpty(a)).length : 0;
    // const Button = withResponsive(List.Button);

    return (
      <React.Fragment>
        <If condition={isFilterModal}>
          <ListFilterModal>
            <Badge count={badge} className="d-md-none">
              <List.Button
                icon={<TuneIcon />}
                paint="primary"
                view="text"
                bordered
                style={{ backgroundColor: listStore.showFilter ? '#F0F0FF' : '' }}
                onClick={listStore.showFilter ? listStore.toggleFilter : null}
              />
            </Badge>
          </ListFilterModal>
        </If>
        <Badge count={badge} className={isFilterModal ? 'd-none d-md-flex' : null}>
          <List.Button
            iconLeft={<TuneIcon />}
            paint="primary"
            view="text"
            bordered
            style={{ backgroundColor: listStore.showFilter ? '#F0F0FF' : '' }}
            onClick={listStore.toggleFilter}
          >
            <T name="lskList.filterButton" />
          </List.Button>
        </Badge>
      </React.Fragment>
    );
  }
}

export default FilterButton;
