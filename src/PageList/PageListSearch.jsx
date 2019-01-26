import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TuneIcon from 'react-icons2/mdi/tune';

import Button from '../Button';
 import Search from '../UI/molecules/Search';

@inject('listStore')
@observer
class ListSearch extends Component {
  render() {
    const {
      listStore,
      ...props
    } = this.props;
    return (
      <Search // Search
        current={10}
        max={listStore.count}
        debounceTimeout={1000}
        onChange={e => listStore.setSearch(e.target.value)}
        value={listStore.search}
        canClear={!!listStore.search}
        onClear={() => listStore.setSearch('')}
        actions={(
          <React.Fragment>
            <Button
              icon={<TuneIcon />}
              paint="primary"
              view="text"
              size="large"
              onClick={() => listStore.toggleRightSidebar()}
            >
              Фильтр
            </Button>
            <Button
              icon={<TuneIcon />}
              paint="primary"
              view="text"
              size="large"
              bordered={listStore.isOpenFilterBar}
              onClick={() => listStore.toggleFilter()}
            >
              Фильтр
            </Button>
          </React.Fragment>
        )}
        {...props}
      />
    );
  }
}

export default ListSearch;

