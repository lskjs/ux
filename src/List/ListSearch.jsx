import React, { Component } from 'react';
import { Badge } from 'antd';
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
      <Search
        current={10}
        max={listStore.count}
        debounceTimeout={100}
        onChange={e => listStore.setSearch(e.target.value)}
        value={listStore.search}
        canClear={!!listStore.search}
        onClear={() => listStore.setSearch('')}
        actions={(
          <React.Fragment>
            <Badge count={Object.keys(listStore.filter).length}>
              <Button
                icon={<TuneIcon />}
                paint="primary"
                view="text"
                size="large"
                bordered={listStore.showFilter}
                onClick={listStore.toggleFilter}
              >
                Фильтр {listStore.hasFilter() && '(*)'}
              </Button>
            </Badge>
          </React.Fragment>
        )}
        {...props}
      />
    );
  }
}

export default ListSearch;

