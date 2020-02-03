/** @jsx jsx */
import React, { Component } from 'react';
import { jsx } from '@emotion/core';
import { observer, inject } from 'mobx-react';
import If from 'react-if';
import VisibilitySensor from 'react-visibility-sensor';
import Loading from '@lskjs/ui/Loading';
import Progress from '@lskjs/ui/Progress';
import T from '@lskjs/ui/T';
import Button from '@lskjs/button';
import { contextToProps } from './List.context';
import { loadMoreButton } from './List.styles';

@contextToProps('List', 'show')
@inject('listStore')
@observer
class ListBody extends Component {
  render() {
    const {
      List,
      listStore,
      show = {},
      ...props
    } = this.props;
    const ButtonWrapper = show.autoload ? VisibilitySensor : 'div';
    return (
      <List.BodyWrapper {...props} style={{ position: 'relative' }}>
        {__DEV__ && <Progress isLoading={listStore.loading} value={30} shadow={false} />}
        {/* {__DEV__ && <Progress value={listStore.loading ? 60 : null} />} */}
        {/* <Progress.Bar id="progress" /> */}
        {/* 1) загружаем первый раз
        2) загружаем второй раз, меняя фильтры
        3) загружаем второй раз, меняя skip, фильтры не меняются
        4) до загружаем второй раз, используя fetch next / fetch prev
        */}
        <Loading
          text={null}
          icon={<List.LoaderIcon />}
          disabled={!listStore.loading}
        >
          <If condition={Boolean(show.more && listStore.canFetchMore(-1))}>
            <Button
              bordered
              size="large"
              paint="default"
              onClick={() => listStore.fetchMore(-1)}
              disabled={listStore.loading}
              css={loadMoreButton}
              block
            >
              <If condition={!!listStore.loading}>
                <T name="lskList.bodyLoadingButton" />
              </If>
              <If condition={!listStore.loading}>
                <T name="lskList.bodyLoadMoreButton" />
              </If>
            </Button>
          </If>
          <If condition={Boolean(listStore.items.length === 0)}>
            <List.Empty />
          </If>
          <List.Items />
          <If condition={Boolean(show.more && listStore.canFetchMore(1))}>
            <ButtonWrapper
              onChange={() => listStore.fetchMore(1)}
              offset={{ direction: 'bottom', value: -200 }}
            >
              <Button
                bordered
                size="large"
                paint="default"
                onClick={() => listStore.fetchMore(1)}
                disabled={listStore.loading}
                css={loadMoreButton}
                block
              >
                <If condition={!!listStore.loading}>
                  <T name="lskList.bodyLoadingButton" />
                </If>
                <If condition={!listStore.loading}>
                  <T name="lskList.loadMoreButton" />
                </If>
              </Button>
            </ButtonWrapper>
          </If>
        </Loading>
      </List.BodyWrapper>
    );
  }
}

export default ListBody;
