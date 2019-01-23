import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TuneIcon from 'react-icons2/mdi/tune';

import Button from '../Button';
// import Search from '../Search';

@inject('pageStore')
@observer
class ListSearch extends Component {
  render() {
    const {
      pageStore,
      ...props
    } = this.props;
    return (
      <input // Search
        current={10}
        max={120}
        debounceTimeout={1000}
        onChange={(e) => {
          pageStore.handleChangeSearch(e.target.value);
        }}
        value={pageStore.search}
        canClear={!!pageStore.search}
        onClear={() => {
          pageStore.handleChangeSearch('');
        }}
        actions={(
          <React.Fragment>
            <Button
              icon={<TuneIcon />}
              paint="primary"
              view="text"
              size="large"
              onClick={() => pageStore.toggleRightSidebar()}
            >
              Фильтр
            </Button>
            <Button
              icon={<TuneIcon />}
              paint="primary"
              view="text"
              size="large"
              bordered={pageStore.isOpenFilterBar}
              onClick={() => pageStore.toggleFilterBar(pageStore.isOpenFilterBar)}
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

