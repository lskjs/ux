import React, { Component } from 'react';
import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import filter from 'lodash/filter';
import { Badge } from 'antd';
// import If from 'react-if';
import TuneIcon from 'react-icons2/mdi/tune';
import isEmpty from '@lskjs/utils/isEmpty';
import T from '@lskjs/ui/T';
import withResponsive from '@lskjs/button/withResponsive';
import { contextToProps } from './List.context';

@contextToProps('List', 'isFilterModal')
@inject('listStore')
@observer
class FilterButton extends Component {
  render() {
    const {
      List, listStore,
    } = this.props;
    const badge = listStore.hasFilter ? filter(listStore.filter, a => !isEmpty(a)).length : 0;
    const ResponsiveButton = withResponsive(List.Button);
    const Button = props => (
      <ResponsiveButton
        icon={<TuneIcon />}
        paint="primary"
        size="small"
        view="text"
        bordered
        {...props}
      />
    );
    return (
      <React.Fragment>
        {/*  className={isFilterModal ? 'd-none d-md-flex' : null} */}
        <Badge count={badge}>
          <Button
            size="small"
            onClick={listStore.toggleFilter}
          >
            <T name="lskList.filterButton" />
          </Button>
        </Badge>
      </React.Fragment>
    );
  }
}

export default FilterButton;
