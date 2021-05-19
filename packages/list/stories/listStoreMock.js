import ListStore from '@lskjs/mobx/stores/ListStore';
import axios from 'axios';
import Promise from 'bluebird';
import clone from 'lodash/clone';
import lodashFilter from 'lodash/filter';
import find from 'lodash/find';
import random from 'lodash/random';
import range from 'lodash/range';
import sample from 'lodash/sample';
import sortBy from 'lodash/sortBy';

const endpoint = 'https://analytics.buzzguru.com/api/channels/find';
const count = 1000;
const initItems = range(0, 1000).map((id) => ({
  _id: id + 1,
  id: id + 1,
  title: `User ${id + 1}`,
  role: sample(['Director', 'Manager', 'Stuff', 'Salesman', 'Driver', 'Tester', 'Designer']),
  rating: +random(id, count, true).toFixed(2),
}));

Promise.config({ cancellation: true });
const api = {
  async find({ skip, limit, filter = {}, sort, cancelToken } = {}) {
    console.log('filter', { skip, limit, filter, sort });

    const promise = Promise.delay(200); // это типа гет запрос
    // __cancelToken.token.promise.then(() => promise.cancel());
    await promise;
    let items = clone(initItems);
    items = lodashFilter(items, filter);
    if (sort && Object.keys(sort).length) {
      const sortKey = Object.keys(sort)[0];
      items = sortBy(initItems, (item) => item[sortKey]);
      if (!sort[sortKey]) {
        items = items.reverse();
      }
    }
    return {
      count: items.length,
      items: items.slice(skip, skip + limit),
    };
  },
  // async find3({ skip, limit, cancelToken } = {}) {
  //   await axios.get('/user/12345', { cancelToken: cancelToken.token });
  //   await axios.get('/user/12345', { cancelToken: cancelToken.token });
  //   await axios.get('/user/12345', { cancelToken: cancelToken.token });
  //   return {
  //     count: 1000,
  //     items: range(skip, skip + limit).map(id => ({ id, title: `User ${id + 1}` })),
  //   };
  //   // });
  // },

  // find4({ skip, limit } = {}) {
  //   return Promise(async (resolve, reject, onCancel) => {
  //     const promise = Promise.delay(2000); // это типа гет запрос
  //     onCancel(promise.cancel);
  //     await promise;

  //     const promise2 = Promise.delay(2000); // это типа гет запрос
  //     onCancel(promise2.cancel);
  //     await promise2;

  //     const promise3 = Promise.delay(2000); // это типа гет запрос
  //     onCancel(promise3.cancel);
  //     await promise3;

  //     resolve({
  //       count: 1000,
  //       items: range(skip, skip + limit).map(id => ({ id, title: `User ${id + 1}` })),
  //     });
  //   });
  // },
};

const listStore = new ListStore({ api, skip: 20 });
setTimeout(() => {
  // listStore.fetch();
}, 2000);

export default listStore;
