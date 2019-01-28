import React, { Component } from 'react';
import { inject } from 'mobx-react';
import DownloadIcon from 'react-icons2/mdi/download';
import If from 'react-if';
import {
  Footer as FooterList,
  FooterRight,
} from './List.styles';

import ListPaginator from './ListPaginator';
import Button from '../Button';
import { contextToProps } from './ListContext';

@contextToProps('show')
@inject('listStore')
class ListFooter extends Component {
  render() {
    const {
      listStore, show = {},
    } = this.props;
    if (!show.footer) return false;
    return (
      <FooterList>
        <If condition={show.download}>
          <Button
            view="text"
            iconLeft={<DownloadIcon />}
            onClick={listStore.download}
          >
            Скачть XLSX
          </Button>
        </If>
        <If condition={show.paginator}>
          <FooterRight>
            <ListPaginator />
          </FooterRight>
        </If>
      </FooterList>
    );
  }
}

export default ListFooter;
