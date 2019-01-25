import set from 'lodash/set';
import {
  observable,
  action,
} from 'mobx';
import Store from './Store';


const DEBUG = false; // __DEV__ && __CLIENT__
export default class ProtoListStore extends Store {
  @observable items = [];
  @observable count = null;
  @observable skip = 0;
  @observable loading = false;
  @observable canFetchNext = false;
  @observable select = {};

  timeout = null;

  setStateField(item, value) {
    if (['skip', 'limit'].includes(item)) {
      set(this, item, +value || 0);
    }
  }

  @action
  fetchNext(limit = this.limit, skip = (this.skip + this.list.length) || 0) {
    // __DEV__ && console.log('fetchNext', limit, skip, this);
    return this.fetch(limit, skip, true);
  }

  getFindParams() {
    // let sort;
    // if (!isEmpty(this.sort)) {
    //   const { direction, field } = this.sort;
    //   sort = {
    //     [field]: direction === 'asc' ? 1 : -1,
    //   };
    // }
    return {
      sort: this.sort,
      sortBy: this.sortBy,
      filter: this.filter,
      subfilter: this.subfilter,
      select: this.select,
    };
  }

  // fetchNextChunk() {
  //   this.
  // }

  async find({ skip, limit } = {}) {
    if (!this.api) throw '!api';
    if (!this.api.find) throw '!api.find';
    
    const raw = await this.api.find({
      ...this.getFindParams(),
      limit,
      skip,
    });

    let items;
    let count;
    if (Array.isArray(raw)) {
      console.warn('pack lost, raw != {data}');
      items = raw;
      count = null;
    } else {
      items = raw.data || raw.items || [];
      count = raw.count >= 0 ? raw.count : null;
    }

    return {
      items,
      count,
    };
  }

  setItems(items, { skip } = {}) {
    if (this.cacheable) {
      // if (nextPage)
      // pos
      this.items = this.items.concat(items);
    }
    this.items = items;
  }
  // this.setList(list, { skip, limit, append })

  @action
  async fetch(params = {}) {
    this.loading = true;
    try {
      const { items, count } = await this.find(params);
      this.setItems(items, params);
      this.count = count;
      this.loading = false;
    } catch (err) {
      this.loading = false;
      throw err;
    }
  }

  // @debounce(500)
  // delayFetch(...args) {
  //   // __DEV__ && console.log('delayFetch', ...args);
  //   return this.fetch(...args);
  // }
}
