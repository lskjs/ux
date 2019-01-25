import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Spin from 'antd/lib/spin';

import { ListTableItems } from './PageList.styles';

@inject('listStore')
@observer
class ListBody extends Component {
  render() {
    const {
      listStore,
      ListItem,
      ...props
    } = this.props;
    return (
      <ListTableItems {...props}>
        <Spin
          size="large"
          spinning={listStore.loading}
        //   wrapperClassName={cx({
        //   [wrapperContentClass]: wrapperContentClass,
        // })}
        >
          {listStore.getVisibleList().map(item => (<ListItem item={item} />))}
        </Spin>
      </ListTableItems>
    );
  }
}

export default ListBody;
