import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import If from 'react-if';


@inject('listStore')
@observer
class ListEmpty extends Component {
  getType() { //eslint-disable-line
    const { listStore } = this.props;
    if (!listStore.fetchedAt) {
      return 1;
      // 1) совсем пусто, первый раз заходим
    }
    if (!listStore.hasFilter) {
      // 2) пусто после фетча, фильры выключены
      return 2;
    }
    if (!listStore.skip) {
      // 3) пусто после фетча, фильтры включены, скип не стоит
      return 3;
    }
    // 4) пусто после фетча, фильтры включены, скип стоит */}

    return 4;
  }
  render() {
    const { listStore } = this.props;
    const type = this.getType();
    return (
      <div>
        {/* 1) загружаем первый раз
        2) загружаем второй раз, меняя фильтры
        3) загружаем второй раз, меняя skip, фильтры не меняются
        4) до загружаем второй раз, используя fetch next / fetch prev
        */}
        {/* Loading! */}
        {/* {listStore.hasFilter ? 'hasFilter' : '!hasFilter'} */}
        <If condition={type === 1}>
          совсем пусто, первый раз заходим


          <button onClick={() => listStore.fetch()}>Попробовать загрузить</button>
        </If>
        <If condition={type === 2}>
          пусто после фетча, фильры выключены

          Сорян нет данных
          Возможно ошибка и нужно перезагрузить, а возможно и нет
        </If>
        <If condition={type === 3}>
          пусто после фетча, фильтры включены

          <button onClick={() => listStore.clearFilter()}>Сбросить фильтры</button>
        </If>
        <If condition={type === 4}>
          пусто после фетча, фильтры включены, скип стоит

          Страница почему-то пуста, переключиться на первую

          <button onClick={() => listStore.setSkip(0)}>На первую страницу</button>
        </If>
      </div>
    );
  }
}

export default ListEmpty;
