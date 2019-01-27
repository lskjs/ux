import Store from './Store';

export default class ApiStore extends Store {
  async wrapOne(item) {
    return new this.constructor(item);
  }
  async wrap(promise, params = {}) {
    const res = await promise;
    const { data, ...pack } = res;
    const wrap = !(params.wrap === false || params.lean);
    const wrapOne = wrap ? this.wrapOne.bind(this) : a => a;
    if (data === null) return data;
    if (Array.isArray(data)) {
      const mappedData = data.map(wrapOne);
      const { count } = pack;
      if (count) mappedData.count = count;
      return mappedData;
    }
    return wrapOne(data);
  }

  static find(body, params) {
    if (!(this.api && this.api.find)) throw '!api.find';
    return this.wrap(this.api.find(body), { ...params, list: true });
  }
  static findOne(_id, params) {
    if (!(this.api && this.api.findOne)) throw '!api.findOne';
    return this.wrap(this.api.findOne(_id), params);
  }
  static create(_id, params) {
    if (!(this.api && this.api.create)) throw '!api.create';
    return this.wrap(this.api.create(_id), params);
  }
  static update({ _id, ...body } = {}, params) {
    if (!(this.api && this.api.update)) throw '!api.update';
    return this.wrap(this.api.update(_id, body), params);
  }
  static remove(_id) {
    if (!(this.api && this.api.remove)) throw '!api.remove';
    return this.api.remove(_id);
  }
}
