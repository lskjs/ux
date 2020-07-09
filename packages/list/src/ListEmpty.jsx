import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import If from 'react-if';
import Button from '@lskjs/button';
import T from '@lskjs/t';
import Error404 from '@lskjs/ui/SlideContent/icons/error404';
import EmptyContainer from '@lskjs/ui/EmptyContainer';

export class ListEmptyPure extends Component {
  static propTypes = {
    listStore: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    type: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  }

  static defaultProps = {
    type: null,
  }

  getType() {
    const { listStore, type } = this.props;
    if (type) return type;
    if (!listStore.fetchedAt) {
      return 1;
      // 1) совсем пусто, первый раз заходим
    }
    if (!listStore.hasFilter) {
      // 2) пусто после фетча, фильры выключены
      if (listStore.paywall) {
        return 5;
      }
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
    switch (type) {
      case 1: return <T name="lskList.emptyDataErrorOne" />;
      case 2: return <T name="lskList.emptyDataErrorTwo" />;
      case 3: return <T name="lskList.emptyDataErrorThree" />;
      case 4: return <T name="lskList.emptyDataErrorFour" />;
      default: return '';
    }
  }

  renderAction(type) {
    const { listStore } = this.props;
    if (!listStore) return null;
    switch (type) {
      case 1:
        return (
          <Button
            paint="primary"
            onClick={() => listStore.fetch()}
            block
            style={{ maxWidth: 214, margin: 'auto' }}
          >
            <T name="buttons.refresh" />
          </Button>
        );
      case 3:
        return (
          <Button
            paint="primary"
            onClick={() => listStore.clearFilter()}
            block
            style={{ maxWidth: 214, margin: 'auto' }}
          >
            <T name="lskList.emptyDataResetButton" />
          </Button>
        );
      case 4:
        return (
          <Button
            paint="primary"
            onClick={() => listStore.setSkip(0)}
            block
            style={{ maxWidth: 214, margin: 'auto' }}
          >
            <T name="lskList.emptyDataToFirstPage" />
          </Button>
        );
      default:
        return null;
    }
  }

  render() {
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
            actions={this.renderAction(type)}
          />
        </If>
        <If condition={type === 2}>
          <EmptyContainer
            title={this.renderTitle()}
            icon={
              <Error404 height="200" width="100%" />
            }
            subtitle={this.renderSubtitle(type)}
            actions={this.renderAction(type)}
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
            actions={this.renderAction(type)}
          />
          {/* пусто после фетча, фильтры включены */}
        </If>
        <If condition={type === 4}>
          <EmptyContainer
            title={<T name="lskList.emptyDataTitle" />}
            icon={
              <Error404 height="200" width="100%" />
            }
            subtitle={this.renderSubtitle(type)}
            actions={this.renderAction(type)}
          />
          {/* пусто после фетча, фильтры включены, скип стоит
          Страница почему-то пуста, переключиться на первую */}
        </If>
      </div>
    );
  }
}

export default inject('listStore')(observer(ListEmptyPure));
