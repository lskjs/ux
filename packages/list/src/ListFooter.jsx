import T from '@lskjs/t';
import { inject, observer } from 'mobx-react';
import React from 'react';

import { Container, Item, Left } from './AlignLayout';
import FilterButton from './FilterButton';
import DownloadIcon from './icons/DownloadIcon';
import { contextToProps } from './List.context';
import { SelectWrapper } from './List.styles';

const ListFooter = ({
  List,
  listStore,
  show,
  pageSize = 10,
  pageOptions,
  footerProps,
  options = pageOptions.map((a) => a * pageSize),
}) => {
  if (listStore.count <= 0) return false;
  const from = listStore.skip + 1;
  const to = listStore.skip + listStore.items.length;
  let disabled = false;
  if (footerProps && footerProps.downloadDisabled) {
    disabled = footerProps.downloadDisabled;
  }
  return (
    <List.FooterWrapper>
      <Container>
        <Left>
          {Boolean(show.download) && (
            <Item>
              <FilterButton view="shadow" icon={<DownloadIcon />} onClick={listStore.download} disabled={disabled}>
                <T name="lskList.downloadButton" />
              </FilterButton>
            </Item>
          )}
        </Left>

        {Boolean(show.stepper) && (
          <Item>
            <List.StepperWrapper>
              <T name="lskList.paginatorShow" />
              <SelectWrapper
                name="pagination-size"
                value={listStore.limit}
                onChange={(e) => listStore.setLimit(+e.target.value)}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </SelectWrapper>
            </List.StepperWrapper>
          </Item>
        )}
        {Boolean(show.pages && !!listStore.items.length) && (
          <Item>
            <List.PagesWrapper>
              {from}—{to}
              {listStore.count !== null && ` / ${listStore.count}`}
            </List.PagesWrapper>
          </Item>
        )}
        {Boolean(show.paginator) && (
          <Item>
            <List.Paginator />
          </Item>
        )}
      </Container>
    </List.FooterWrapper>
  );
};

export default contextToProps(
  'List',
  'pageSize',
  'pageOptions',
  'show',
  'footerProps',
)(inject('listStore')(observer(ListFooter)));
