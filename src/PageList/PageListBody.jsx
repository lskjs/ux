import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Spin from 'antd/lib/spin';
import Progress from '../utils/Progress';
import { ListTableItems } from './PageList.styles';
import { contextToProps } from './PageListContext';

@contextToProps('ListItem', 'Body')
@inject('listStore')
@observer
class PageListBody extends Component {
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
            <button onClick={() => listStore.fetchMore(-1)}>
              fetchPrev
            </button>
          )}
          <Body style={{ minHeight: 200 }}>
            {/* 1) совсем пусто, первый раз заходим
            2) пусто после фетча, фильры выключены
            3) пусто после фетча, фильтры включены, скип не стоит
            4) пусто после фетча, фильтры включены, скип стоит */}
            {listStore.map((item, index) => {
              if (item === null) {
                return (
                  <button onClick={() => listStore.fetch({ skip: listStore.skip + index, limit: 1, cache: 1 })}>
                    load
                  </button>
                );
              }
              return <ListItem key={item._id || item.id || index} item={item} />;
            })}
          </Body>
          {listStore.canFetchMore(1) && (
            <button onClick={() => listStore.fetchMore(1)}>
              fetchNext
            </button>
          )}
        </Spin>
      </ListTableItems>

    );
  }
}

export default PageListBody;
