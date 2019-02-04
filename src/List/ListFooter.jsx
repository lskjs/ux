import React, { Component } from 'react';
import { inject } from 'mobx-react';
import DownloadIcon from 'react-icons2/mdi/download';
import If from 'react-if';
import T from '../T';

import { contextToProps } from './List.context';

@contextToProps('List', 'show')
@inject('listStore')
class ListFooter extends Component {
  render() {
    const {
      List, listStore, show = {},
    } = this.props;
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
        <If condition={show.paginator}>
          <List.FooterRightWrapper>
            <List.Paginator />
          </List.FooterRightWrapper>
        </If>
      </List.FooterWrapper>
    );
  }
}

export default ListFooter;
