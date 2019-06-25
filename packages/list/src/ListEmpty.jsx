import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import If from 'react-if';
import Button from '@lskjs/button';
import T from '@lskjs/ui/T';
import Error404 from '@lskjs/ui/SlideContent/icons/error404';
import EmptyContainer from '@lskjs/ui/EmptyContainer';


@inject('listStore', 't')
@observer
class ListEmpty extends Component {
  getType() { //eslint-disable-line
    const { listStore, type } = this.props;
    if (type) return type;
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
  renderTitle() {
    return <T name="lskList.emptyDataTitle" />;
  }
  renderSubtitle(type) {
    return (
      <Fragment>
        <If condition={type === 1}>
          <T name="lskList.emptyDataErrorOne" />
        </If>
        <If condition={type === 2}>
          <T name="lskList.emptyDataErrorTwo" />
        </If>
        <If condition={type === 3}>
          <T name="lskList.emptyDataErrorThree" />
        </If>
        <If condition={type === 4}>
          <T name="lskList.emptyDataErrorFour" />
        </If>
      </Fragment>
    );
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
            title={this.renderTitle()}
            icon={
              <Error404 height="200" width="100%" />
            }
            subtitle={this.renderSubtitle(type)}
            actions={(
              <Button
                paint="primary"
                onClick={() => listStore.fetch()}
              >
                <T name="common.refresh" />
              </Button>
            )}
          />
        </If>
        <If condition={type === 2}>
          <EmptyContainer
            title={this.renderTitle()}
            icon={
              <Error404 height="200" width="100%" />
            }
            subtitle={this.renderSubtitle(type)}
          />
          {/* пусто после фетча, фильры выключены

          Сорян нет данных
          Возможно ошибка и нужно перезагрузить, а возможно и нет */}
        </If>
        <If condition={type === 3}>
          <EmptyContainer
            title={this.renderTitle()}
            icon={
              <Error404 height="200" width="100%" />
            }
            subtitle={this.renderSubtitle(type)}
            actions={(
              <Button
                paint="primary"
                onClick={() => listStore.clearFilter()}
              >
                <T name="lskList.emptyDataResetButton" />
              </Button>
            )}
          />
          {/* пусто после фетча, фильтры включены */}
        </If>
        <If condition={type === 4}>
          <EmptyContainer
            title={this.renderTitle()}
            icon={
              <Error404 height="200" width="100%" />
            }
            subtitle={this.renderSubtitle(type)}
            actions={(
              <Button
                paint="primary"
                onClick={() => listStore.setSkip(0)}
              >
                <T name="lskList.emptyDataToFirstPage" />
              </Button>
            )}
          />
          {/* пусто после фетча, фильтры включены, скип стоит
          Страница почему-то пуста, переключиться на первую */}
        </If>
      </div>
    );
  }
}

export default ListEmpty;
