import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import If from 'react-if';
import DownloadIcon from 'react-icons2/mdi/download';
import T from '@lskjs/t';
import Button from '@lskjs/button';
import withResponsive from '@lskjs/button/withResponsive';
import { contextToProps } from './List.context';
import { SelectWrapper } from './List.styles';
import { Container, Item, Left } from './AlignLayout';

const ResponsiveButton = withResponsive(Button);

@contextToProps('List', 'pageSize', 'pageOptions', 'show', 'footerProps')
@inject('listStore')
@observer
class ListFooter extends Component {
  render() {
    const {
      List,
      listStore,
      show,
      pageSize = 10,
      pageOptions,
      footerProps,
    } = this.props;
    if (listStore.count <= 0) return false;
    const { options = pageOptions.map(a => a * pageSize) } = this.props;
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
            <If condition={!!show.download}>
              <Item>
                <ResponsiveButton
                  view="text"
                  icon={<DownloadIcon />}
                  onClick={listStore.download}
                  disabled={disabled}
                >
                  <T name="lskList.downloadButton" />
                </ResponsiveButton>
                {/* <List.Button
                  view="text"
                  iconLeft={<DownloadIcon />}
                  onClick={listStore.download}
                >
                  <T name="lskList.downloadButton" />
                </List.Button> */}
              </Item>
            </If>
          </Left>

          <If condition={!!show.stepper}>
            <Item>
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
            </Item>
          </If>
          <If condition={show.pages && !!listStore.items.length}>
            <Item>
              <List.PagesWrapper>
                {from}
                —
                {to}
                {listStore.count !== null && ` / ${listStore.count}`}
              </List.PagesWrapper>
            </Item>
          </If>
          <If condition={!!show.paginator}>
            <Item>
              <List.Paginator />
            </Item>
          </If>
        </Container>

      </List.FooterWrapper>
    );
  }
}

export default ListFooter;
