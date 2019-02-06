import React, { Component } from 'react';
import { css } from 'react-emotion';
import { observer, inject } from 'mobx-react';
import If from 'react-if';
import Spin from 'antd/lib/spin';
import DEV from '../DEV';
import T from '../T';
import Button from '../Button';
import Progress from '../utils/Progress';
import { contextToProps } from './List.context';

const buttonStyles = css`
  border-radius: 0;
  box-shadow: 0 0 0 1px #e3e3e3;
  width: 100%;
`;
@contextToProps('List', 'Item', 'show')
@inject('listStore')
@observer
class ListBody extends Component {
  render() {
    const {
      List,
      listStore,
      Item,
      show = {},
      ...props
    } = this.props;

    return (
      <List.BodyWrapper {...props} className={Progress.parentClassName}>
        <Progress.Bar id="progress" />
        {/* 1) загружаем первый раз
        2) загружаем второй раз, меняя фильтры
        3) загружаем второй раз, меняя skip, фильтры не меняются
        4) до загружаем второй раз, используя fetch next / fetch prev
        */}
        <Spin
          size="large"
          spinning={listStore.loading}
        >
          <If condition={show.more && listStore.canFetchMore(-1)}>
            <Button
              bordered
              size="large"
              paint="default"
              onClick={() => listStore.fetchMore(-1)}
              disabled={listStore.loading}
              className={buttonStyles}
              block
            >
              <If condition={listStore.loading}>
                <T name="lskList.bodyLoadingButton" />
              </If>
              <If condition={!listStore.loading}>
                <T name="lskList.bodyLoadMoreButton" />
              </If>
            </Button>
          </If>
          <If condition={listStore.items.length === 0}>
            <List.Empty />
          </If>
          <List.ItemsWrapper>
            {listStore.map((item, index) => {
              if (item === null) {
                return (
                  <Button
                    bordered
                    size="large"
                    paint="default"
                    onClick={() => listStore.fetch({ skip: listStore.skip + index, limit: 1, cache: 1 })}
                    disabled={listStore.loading}
                    className={buttonStyles}
                    block
                  >
                    <If condition={listStore.loading}>
                      <T name="lskList.bodyLoadingButton" />
                    </If>
                    <If condition={!listStore.loading}>
                      <T name="lskList.bodyLoadMoreButton" />
                    </If>
                  </Button>
                );
              }
              if (!Item) return <DEV json="!Item" />;
              return <Item key={item._id || item.id || index} item={item} />;
            })}
          </List.ItemsWrapper>
          <If condition={show.more && listStore.canFetchMore(1)}>
            <Button
              bordered
              size="large"
              paint="default"
              onClick={() => listStore.fetchMore(1)}
              disabled={listStore.loading}
              className={buttonStyles}
              block
            >
              <If condition={listStore.loading}>
                <T name="lskList.bodyLoadingButton" />
              </If>
              <If condition={!listStore.loading}>
                <T name="lskList.loadMoreButton" />
              </If>
            </Button>
          </If>
        </Spin>
      </List.BodyWrapper>
    );
  }
}

export default ListBody;
