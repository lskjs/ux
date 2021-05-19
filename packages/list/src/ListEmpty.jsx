import T from '@lskjs/t';
import EmptyContainer from '@lskjs/ui/EmptyContainer';
import Error404 from '@lskjs/ui/SlideContent';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { CommonButton } from './List.styles';

export class ListEmptyPure extends Component {
  static propTypes = {
    listStore: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    type: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  };

  static defaultProps = {
    type: null,
  };

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
      case 1:
        return <T name="lskList.emptyDataErrorOne" />;
      case 2:
        return <T name="lskList.emptyDataErrorTwo" />;
      case 3:
        return <T name="lskList.emptyDataErrorThree" />;
      case 4:
        return <T name="lskList.emptyDataErrorFour" />;
      default:
        return '';
    }
  }

  renderAction(type) {
    const { listStore } = this.props;
    if (!listStore) return null;
    switch (type) {
      case 1:
        return (
          <CommonButton onClick={() => listStore.fetch()}>
            <T name="buttons.refresh" />
          </CommonButton>
        );
      case 3:
        return (
          <CommonButton onClick={() => listStore.clearFilter()}>
            <T name="lskList.emptyDataResetButton" />
          </CommonButton>
        );
      case 4:
        return (
          <CommonButton onClick={() => listStore.setSkip(0)}>
            <T name="lskList.emptyDataToFirstPage" />
          </CommonButton>
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
        {type === 1 && (
          <EmptyContainer
            title={this.renderTitle()}
            icon={<Error404 height="200" width="100%" />}
            subtitle={this.renderSubtitle(type)}
            actions={this.renderAction(type)}
          />
        )}
        {type === 2 && (
          <EmptyContainer
            title={this.renderTitle()}
            icon={<Error404 height="200" width="100%" />}
            subtitle={this.renderSubtitle(type)}
            actions={this.renderAction(type)}
          />
        )}
        {/* пусто после фетча, фильры выключены

          Сорян нет данных
          Возможно ошибка и нужно перезагрузить, а возможно и нет */}
        {type === 3 && (
          <EmptyContainer
            title={this.renderTitle()}
            icon={<Error404 height="200" width="100%" />}
            subtitle={this.renderSubtitle(type)}
            actions={this.renderAction(type)}
          />
        )}
        {/* пусто после фетча, фильтры включены */}
        {type === 4 && (
          <EmptyContainer
            title={<T name="lskList.emptyDataTitle" />}
            icon={<Error404 height="200" width="100%" />}
            subtitle={this.renderSubtitle(type)}
            actions={this.renderAction(type)}
          />
        )}
        {/* пусто после фетча, фильтры включены, скип стоит
        Страница почему-то пуста, переключиться на первую */}
      </div>
    );
  }
}

export default inject('listStore')(observer(ListEmptyPure));
