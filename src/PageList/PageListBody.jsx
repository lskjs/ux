import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Spin from 'antd/lib/spin';

import { ListTableItems } from './PageList.styles';

@inject('pageListStore')
@observer
class ListBody extends Component {
  render() {
    const {
      pageStore,
      ListItem,
      ...props
    } = this.props;
    return (
      <ListTableItems {...props}>
        <Spin
          size="large"
          spinning={pageStore.listStore.loading}
        //   wrapperClassName={cx({
        //   [wrapperContentClass]: wrapperContentClass,
        // })}
        >
          {pageStore.getList().map(item => (<ListItem item={item} />))}
        </Spin>
      </ListTableItems>
    );
  }
}

export default ListBody;
