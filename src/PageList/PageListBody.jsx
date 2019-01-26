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
        <Spin
          size="large"
          spinning={listStore.loading}
        >
          {listStore.map(item => (<ListItem item={item} />))}
        </Spin>
      </ListTableItems>

    );
  }
}

export default PageListBody;
