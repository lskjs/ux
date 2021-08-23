import BaseListStore from '@lskjs/mobx/mobxStores/ListStore';
// import autobind from '@lskjs/utils/autobind';
// import debounce from '@lskjs/utils/decorator-debounce';
// import isEmpty from '@lskjs/utils/isEmpty';
// import each from 'lodash/each';
// import every from 'lodash/every';
// import filter from 'lodash/filter';
import { action, computed, observable } from 'mobx';

// TODO: переписать на не MOBX
export class ListStore extends BaseListStore {
  // @observable filter = {};
  // @observable fallbackFilter = {};
  // @observable excludeFilterFields = [];
  // @observable showFilter = false;
  // @observable tab = null;
  // @observable sort = {};
  // @observable fallbackSort = {};
  // @observable pureSearch = false;
  // @observable searchFromLength = 0;
  // @observable search = '';

  @observable preFilter;
  @observable preSearch;
  // NOTE: увы, мы вынуждены повторять этот конструктор, из-за цепочки наследования Babel
  constructor(state = {}) {
    super();
    if (state) this.setState(state);
  }

  // setFilter = (values) => {
  //   this.setStateAndUpdate({
  //     filter: values,
  //     skip: 0,
  //   });
  // };

  // setSearch = (search) => {
  //   if (!search || (search && search.length >= this.searchFromLength)) {
  //     const pureState = this.pureSearchHandler(search);
  //     this.setStateAndUpdate({
  //       search,
  //       skip: 0,
  //       ...pureState,
  //     });
  //   }
  // };

  setPreFilter = (values) => {
    this.preFilter = {
      filter: values,
      skip: 0,
    };
  };

  setPreSearch = (search) => {
    if (!search || (search && search.length >= this.searchFromLength)) {
      const pureState = this.pureSearchHandler(search);
      this.preSearch = {
        search,
        skip: 0,
        ...pureState,
      };
    }
  };

  search = () => {
    this.setFilter(this.preFilter);
    this.setSearch(this.preSearch);
  };
}

export default ListStore;
