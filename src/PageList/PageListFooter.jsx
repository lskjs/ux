import React, { Component } from 'react';
import { inject } from 'mobx-react';
import DownloadIcon from 'react-icons2/mdi/download';
import {
  Footer as FooterList,
  FooterRight,
} from './PageList.styles';

import PageListPaginator from './PageListPaginator';
import Button from '../Button';

@inject('pageStore')
class ListFooter extends Component {
  render() {
    const {
      pageStore,
    } = this.props;
    return (
      <FooterList>
        <Button
          view="text"
          iconLeft={<DownloadIcon />}
          onClick={pageStore.listStore.downloadExcel}
        >
          Скачть XLSX
        </Button>
        <FooterRight>
          <PageListPaginator
            options={[10, 20, 50, 100]}
          />
        </FooterRight>
      </FooterList>
    );
  }
}

export default ListFooter;
