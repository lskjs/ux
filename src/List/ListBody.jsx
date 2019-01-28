import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import If from 'react-if';
import Spin from 'antd/lib/spin';
import Button from '../Button';
import Progress from '../utils/Progress';
import { ListTableItems } from './List.styles';
import { contextToProps } from './ListContext';

@contextToProps('ListItem', 'Body')
@inject('listStore')
@observer
class ListBody extends Component {
  render() {
    const {
      listStore,
      ListItem,
      Body = 'div',
      ...props
    } = this.props;
    return (
      <ListTableItems {...props} className={Progress.parentClassName}>
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
          {listStore.canFetchMore(-1) && (
            <Button size="large" paint="default" onClick={() => listStore.fetchMore(-1)} disabled={listStore.loading}>
              <If condition={listStore.loading}>
                Loading
              </If>
              <If condition={!listStore.loading}>
                fetchPrev
              </If>
            </Button>
          )}
          <Body style={{ minHeight: 200 }}>
            {/* 1) совсем пусто, первый раз заходим
            2) пусто после фетча, фильры выключены
            3) пусто после фетча, фильтры включены, скип не стоит
            4) пусто после фетча, фильтры включены, скип стоит */}
            {listStore.map((item, index) => {
              if (item === null) {
                return (
                  <Button onClick={() => listStore.fetch({ skip: listStore.skip + index, limit: 1, cache: 1 })}>
                    load
                  </Button>
                );
              }
              return <ListItem key={item._id || item.id || index} item={item} />;
            })}
          </Body>
          {listStore.canFetchMore(1) && (
            <Button size="large" paint="default" onClick={() => listStore.fetchMore(1)} disabled={listStore.loading}>
              <If condition={listStore.loading}>
                Loading
              </If>
              <If condition={!listStore.loading}>
                fetchNext
              </If>
            </Button>
          )}
        </Spin>
      </ListTableItems>

    );
  }
}

export default ListBody;
