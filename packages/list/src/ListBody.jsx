/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import T from '@lskjs/t';
import Loading from '@lskjs/ui/Loading';
import Progress from '@lskjs/ui/Progress';
import { inject, observer } from 'mobx-react';
import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import { contextToProps } from './List.context';
import { LoadMoreButton } from './List.styles';

const ListBody = ({ List, listStore, show = {}, ...props }) => {
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
      <Loading text={null} icon={<List.LoaderIcon />} disabled={!listStore.loading}>
        {Boolean(show.more && listStore.canFetchMore(-1)) && (
          <LoadMoreButton onClick={() => listStore.fetchMore(-1)} disabled={listStore.loading}>
            {listStore.loading ? <T name="lskList.bodyLoadingButton" /> : <T name="lskList.bodyLoadMoreButton" />}
          </LoadMoreButton>
        )}
        {Boolean(listStore.items.length === 0) && <List.Empty />}
        <List.Items />
        {Boolean(show.more && listStore.canFetchMore(1)) && (
          <ButtonWrapper onChange={() => listStore.fetchMore(1)} offset={{ direction: 'bottom', value: -200 }}>
            <LoadMoreButton onClick={() => listStore.fetchMore(1)} disabled={listStore.loading}>
              {listStore.loading ? <T name="lskList.bodyLoadingButton" /> : <T name="lskList.loadMoreButton" />}
            </LoadMoreButton>
          </ButtonWrapper>
        )}
      </Loading>
    </List.BodyWrapper>
  );
};

export default contextToProps('List', 'show')(inject('listStore')(observer(ListBody)));
