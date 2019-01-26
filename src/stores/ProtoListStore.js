import set from 'lodash/set';
import {
  observable,
  action,
} from 'mobx';
import axios from 'axios';
import Progress from '../utils/Progress';

import Store from './Store';
import insertArray from '../utils/insertArray';


export default class ProtoListStore extends Store {
  @observable items = [];
  @observable count = null;
  @observable skip = 0;
  @observable limit = 10;
  @observable loading = false;
  @observable canFetchNext = false;
  @observable select = {};

  cancelToken = null;

  setStateField(item, value) {
    if (['skip', 'limit'].includes(item)) {
      set(this, item, +value || 0);
    } else {
      super.setStateField(item, value);
    }
  }

  getFindParams() {
    return {
      filter: this.filter,
      sort: this.sort,
    };
  }

  async find({ skip, limit, cancelToken } = {}) {
    if (!this.api) throw '!api';
    if (!this.api.find) throw '!api.find';

    const raw = await this.api.find({
      ...this.getFindParams(),
      limit,
      skip,
      cancelToken,
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

  @action
  setItems(items, { skip } = {}) {
    if (this.cacheable) {
      this.items = insertArray(this.items, items, skip);
    }
    this.items = items;
  }

  @action
  async fetch(params = {}) {
    Progress.start();
    if (this.loading && this.cancelToken) {
      this.cancelToken.cancel();
    }
    this.cancelToken = axios.CancelToken.source();
    this.loading = true;
    try {
      this.findPromise = this.find({
        skip: this.skip,
        limit: this.limit,
        cancelToken: this.cancelToken,
      });
      const { items, count } = await this.findPromise;
      this.setItems(items, params);
      this.count = count;
      this.loading = false;
      Progress.done();
      this.findPromise = null;
    } catch (err) {
      this.loading = false;
      this.findPromise = null;
      Progress.done();
      throw err;
    }
  }
}
