import withResponsive from '@lskjs/button/withResponsive';
import T from '@lskjs/t';
import getTheme from '@lskjs/theme/getTheme';
import { inject, observer } from 'mobx-react';
import React from 'react';

import FilterIcon from './FilterIcon';
import { contextToProps } from './List.context';
import { FilterButtonWrapper } from './List.styles';

const FilterButton = ({ List, listStore }) => {
  const badge = +(listStore.hasFilter && listStore.getActiveFilter ? listStore.getActiveFilter : 0);
  const ResponsiveButton = withResponsive(List.Button);
  const Button = (props) => (
    <ResponsiveButton
      icon={<FilterIcon />}
      paint="primary"
      size="small"
      view="text"
      bordered
      shape="square"
      {...props}
    />
  );
  return (
    <FilterButtonWrapper>
      {/* <Badge count={badge}> */}
      <Button
        size="small"
        // className={listStore.showFilter ? filterButtonStyle : null}
        style={listStore.showFilter ? { backgroundColor: getTheme(theme, 'colors.lighterPrimary') } : {}}
        onClick={listStore.toggleFilter}
      >
        <T name="lskList.filterButton" />
      </Button>
      {/* </Badge> */}
    </FilterButtonWrapper>
  );
};

export default contextToProps('List', 'isFilterModal')(inject('listStore')(observer(FilterButton)));
