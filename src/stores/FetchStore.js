import set from 'lodash/set';
import {
  observable,
  action,
} from 'mobx';
import axios from 'axios';
import Progress from '../utils/Progress';

import Store from './Store';
import insertArray from '../utils/insertArray';

const { CancelToken } = axios;

export default class FetchStore extends Store {
  @observable items = [];
  @observable count = null;
  @observable skip = 0;
  @observable limit = 10;
  @observable loading = false;
  @observable fetchedAt = null;
  @observable select = {};
  cancelToken = null;

  setStateField(item, value) {
    if (['skip', 'limit'].includes(item)) {
      set(this, item, +value || 0);
    } else {
      super.setStateField(item, value);
    }
  }

  getFindParams(store) { // eslint-disable-line class-methods-use-this
    return {
      filter: store.filter,
      sort: store.sort,
    };
  }

  async find({ skip, limit, cancelToken } = {}) {
    if (!this.api) throw '!api';
    if (!this.api.find) throw '!api.find';
    const raw = await this.api.find({
      ...this.getFindParams(this),
      limit,
      skip,
      cancelToken,
    });

    let items;
    let count;
    if (Array.isArray(raw)) {
      // console.warn('pack lost, raw != {data}');
      items = raw;
      count = raw.count >= 0 ? raw.count : null;
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
  setItems(items, { skip, cache } = {}) {
    if (cache) {
      this.items = insertArray(this.items, items, skip - this.skip);
    } else {
      this.items = items;
    }
  }

  @action
  async fetch({ skip = this.skip, limit = this.limit, cache } = {}) {
    if (this.loading) this.cancelFetch();
    this.loading = true;
    this.cancelToken = CancelToken.source();
    Progress.start();
    try {
      const { items, count } = await this.find({
        count: 1,
        skip,
        limit,
        cancelToken: this.cancelToken,
      });
      this.setItems(items, { skip, cache });
      this.count = count;
      this.fetchedAt = new Date();
      if (skip < this.skip) this.skip = skip;
    } finally {
      this.loading = false;
      this.cancelToken = null;
      Progress.done();
    }
  }

  async cancelFetch() {
    if (!(this.cancelToken && this.cancelToken.cancel)) return;
    this.loading = false;
    this.cancelToken.cancel();
    Progress.done();
  }

  canFetchMore(dir = 1) {
    if (dir < 0) return this.skip !== 0;
    return this.count === null || this.count > this.skip + this.items.length;
  }

  async fetchMore(dir, limit = this.limit) {
    let skip = dir < 0 ? this.skip - limit : this.skip + this.items.length;
    if (skip < 0) skip = 0;
    if (this.count !== null && skip > this.count) return;
    await this.fetch({ cache: true, skip, limit });
  }
}
