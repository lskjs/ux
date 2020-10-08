import React from 'react';
import { observer, inject } from 'mobx-react';
import { Badge } from 'antd';
import theme from '@lskjs/theme';
import getTheme from '@lskjs/theme/getTheme';
import T from '@lskjs/t';
import withResponsive from '@lskjs/button/withResponsive';
import FilterIcon from './FilterIcon';
import { contextToProps } from './List.context';
import { FilterButtonWrapper } from './List.styles';

const FilterButton = ({ List, listStore }) => {
  // console.log('lsk-ux FilterButton', listStore.filter);
  const badge = +(listStore.hasFilter && listStore.getActiveFilter ? listStore.getActiveFilter : 0);
  // console.log({badge});
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
      {/*  className={isFilterModal ? 'd-none d-md-flex' : null} */}
      <Badge count={badge}>
        <Button
          size="small"
          // className={listStore.showFilter ? filterButtonStyle : null}
          style={listStore.showFilter ? { backgroundColor: getTheme(theme, 'colors.lighterPrimary') } : {}}
          onClick={listStore.toggleFilter}
        >
          <T name="lskList.filterButton" />
        </Button>
      </Badge>
    </FilterButtonWrapper>
  );
};

export default contextToProps('List', 'isFilterModal')(inject('listStore')(observer(FilterButton)));
