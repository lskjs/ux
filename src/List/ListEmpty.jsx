import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import If from 'react-if';
import Button from '../Button';
import Error404 from '../UI/molecules/ErrorComponent/svg/error404';
import EmptyContainer from '../UI/molecules/EmptyContainer';


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
          <EmptyContainer
            title="Нет данных"
            icon={
              <Error404 height="200" width="100%" />
            }
            subtitle="Не удалось автоматически загрузить данные."
            actions={
              <Button
                paint="primary"
                onClick={() => listStore.fetch()}
              >
                Обновить
              </Button>
            }
          />
        </If>
        <If condition={type === 2}>
          <EmptyContainer
            title="Нет данных"
            icon={
              <Error404 height="200" width="100%" />
            }
            subtitle="Возможно нужно перезагрузить страницу"
          />
          {/* пусто после фетча, фильры выключены

          Сорян нет данных
          Возможно ошибка и нужно перезагрузить, а возможно и нет */}
        </If>
        <If condition={type === 3}>
          <EmptyContainer
            title="Ничего не найдено"
            icon={
              <Error404 height="200" width="100%" />
            }
            subtitle="По вашим критериям ничего не нашлось"
            actions={
              <Button
                paint="primary"
                onClick={() => listStore.clearFilter()}
              >
                Сбросить фильтры
              </Button>
            }
          />
          {/* пусто после фетча, фильтры включены */}
        </If>
        <If condition={type === 4}>
          <EmptyContainer
            title="Нет данных"
            icon={
              <Error404 height="200" width="100%" />
            }
            subtitle="По вашим критериям ничего не нашлось, перейдите на первую страницу"
            actions={
              <Button
                paint="primary"
                onClick={() => listStore.setSkip(0)}
              >
                На первую страницу
              </Button>
            }
          />
          {/* пусто после фетча, фильтры включены, скип стоит
          Страница почему-то пуста, переключиться на первую */}
        </If>
      </div>
    );
  }
}

export default ListEmpty;
