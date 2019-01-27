import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Spin from 'antd/lib/spin';
import { ListTableItems } from './PageList.styles';
import { contextToProps } from './PageListContext';
import Progress from '../utils/Progress';

@contextToProps('ListItem')
@inject('listStore')
@observer
class PageListBody extends Component {
  render() {
    const {
      listStore,
      ListItem,
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
          {/* 1) совсем пусто, первый раз заходим
          2) пусто после фетча, фильры выключены
          3) пусто после фетча, фильтры включены, скип не стоит
          4) пусто после фетча, фильтры включены, скип стоит */}
          {listStore.map(item => (<ListItem item={item} />))}
        </Spin>
      </ListTableItems>

    );
  }
}

export default PageListBody;
