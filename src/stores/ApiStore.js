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
}
