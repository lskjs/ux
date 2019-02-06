import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import If from 'react-if';
import DownloadIcon from 'react-icons2/mdi/download';
import T from '../T';
import { contextToProps } from './List.context';
import { FooterRightWrapper, SelectWrapper } from './List.styles';

@contextToProps('List', 'pageSize', 'show')
@inject('listStore')
@observer
class ListPaginator extends Component {
  render() {
    const {
      List,
      listStore,
      show,
      pageSize = 10,
    } = this.props;
    const { options = [1, 2, 5, 10].map(a => a * pageSize) } = this.props;

    const from = listStore.skip + 1;
    const to = listStore.skip + listStore.items.length;
    return (
      <List.FooterWrapper>
        <If condition={show.download}>
          <List.Button
            view="text"
            iconLeft={<DownloadIcon />}
            onClick={listStore.download}
          >
            <T name="lskList.downloadButton" />
          </List.Button>
        </If>
        <FooterRightWrapper>
          <If condition={show.stepper}>
            <List.StepperWrapper>
              <T name="lskList.paginatorShow" />
              <SelectWrapper
                name="pagination-size"
                value={listStore.limit}
                onChange={e => listStore.setLimit(+e.target.value)}
              >
                {options.map(option => (<option key={option} value={option}>{option}</option>))}
              </SelectWrapper>
            </List.StepperWrapper>
          </If>
          <If condition={show.pages && listStore.items.length}>
            <List.PagesWrapper>
              {from}—{to}
              {listStore.count !== null && ` / ${listStore.count}`}
            </List.PagesWrapper>
          </If>
          <If condition={show.paginator}>
            <List.Paginator />
          </If>
        </FooterRightWrapper>
      </List.FooterWrapper>
    );
  }
}

export default ListPaginator;
