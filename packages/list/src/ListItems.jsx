import { css, Global } from '@emotion/core';
import Button from '@lskjs/button';
import DEV from '@lskjs/dev/DEV';
import Performance from '@lskjs/dev/Performance';
import T from '@lskjs/t';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import If from 'react-if';

import { contextToProps } from './List.context';

@contextToProps('List', 'Item', 'itemProps')
@inject('listStore')
@observer
class ListItems extends Component {
  render() {
    const { List, listStore, Item, itemProps } = this.props;
    return (
      <List.ItemsWrapper>
        <>
          <Global
            styles={css`
              .buttoncss {
                border-radius: 0;
                box-shadow: 0 0 0 1px #e3e3e3;
                width: 100%;
              }
            `}
          />
          <Performance name="List.Items" disabled={!__DEV__}>
            {listStore.map((item, index) => {
              if (item === null) {
                return (
                  <Button
                    bordered
                    size="large"
                    paint="default"
                    onClick={() => listStore.fetch({ skip: listStore.skip + index, limit: 1, cache: 1 })}
                    disabled={listStore.loading}
                    className="buttoncss"
                    block
                  >
                    <If condition={!!listStore.loading}>
                      <T name="lskList.bodyLoadingButton" />
                    </If>
                    <If condition={!listStore.loading}>
                      <T name="lskList.bodyLoadMoreButton" />
                    </If>
                  </Button>
                );
              }
              if (!Item) return <DEV json="!Item" />;
              return <Item {...itemProps} item={item} key={item._id || item.id || index} />;
            })}
          </Performance>
        </>
      </List.ItemsWrapper>
    );
  }
}

export default ListItems;
