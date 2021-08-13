import DEV from '@lskjs/dev/DEV';
import Performance from '@lskjs/dev/Performance';
import T from '@lskjs/t';
import { inject, observer } from 'mobx-react';
import React from 'react';

import { contextToProps } from './List.context';
import { ListRowButton } from './List.styles';

const ListItems = ({ List, listStore, Item, itemProps }) => (
  <List.ItemsWrapper>
    <Performance name="List.Items" disabled={!__DEV__}>
      {listStore.map((item, index) => {
        if (item === null) {
          return (
            <ListRowButton
              onClick={() => listStore.fetch({ skip: listStore.skip + index, limit: 1, cache: 1 })}
              disabled={listStore.loading}
            >
              {listStore.loading ? <T name="lskList.bodyLoadingButton" /> : <T name="lskList.bodyLoadMoreButton" />}
            </ListRowButton>
          );
        }
        if (!Item) return <DEV json="!Item" />;
        return <Item {...itemProps} item={item} key={item._id || item.id || index} />;
      })}
    </Performance>
  </List.ItemsWrapper>
);

export default contextToProps('List', 'Item', 'itemProps')(inject('listStore')(observer(ListItems)));
