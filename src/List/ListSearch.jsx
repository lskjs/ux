import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import TuneIcon from 'react-icons2/mdi/tune';
import T from '../T';
import { contextToProps } from './List.context';
import Button from '../Button';
import ListFilterModal from './ListFilterModal';

@contextToProps('List', 'show', 'FilterForm')
@inject('listStore', 'i18')
@observer
class ListSearch extends Component {
  render() {
    const {
      i18, List, listStore, show, FilterForm, ...props
    } = this.props;
    return (
      <List.SearchWrapper
        current={listStore.items.length}
        max={listStore.count}
        debounceTimeout={100}
        onChange={e => listStore.setSearch(e.target.value)}
        value={listStore.search || ''}
        canClear={!!listStore.search}
        onClear={() => listStore.setSearch(null)}
        // actions={show.filterButton && <List.FilterButton />}
        actions={show.filterButton &&
          <React.Fragment>
            <ListFilterModal>
              <Button
                className="d-lg-none"
                iconLeft={<TuneIcon />}
                paint="primary"
                view="text"
                bordered
              >
                <T name="lskList.filterButton" />
              </Button>
            </ListFilterModal>
            <List.FilterButton />
          </React.Fragment>
        }
        placeholder={i18.t('lskList.searchPlaceholder')}
        {...props}
      />
    );
  }
}


export default ListSearch;

