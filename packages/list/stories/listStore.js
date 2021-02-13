import Promise from 'bluebird';
import sample from 'lodash/sample';
import random from 'lodash/random';
import ListStore from '@lskjs/mobx/stores/ListStore';
import CrudApi from '@lskjs/mobx/stores/CrudApi';
import Apiquery from '@lskjs/apiquery';

const apiquery = new Apiquery();
const select = [
  'providerId',
  'type',
  'status',
  'channelInfo.title',
  'channelInfo.country',
  'channelInfo.totalVideos',
  'channelInfo.subscribers',
  'channelInfo.avatar',
  'channelInfo.username',
  'average.lastVideoPublishedAt',
  'average.analytics.views',
  'average.videoViews',
  'average.language',
  '_parser.successFetchedAt',
  'createdAt',
];

export class Api extends CrudApi {
  base = 'https://analytics.buzzguru.com/api/channels';
  async find(body) {
    const res = await this.fetch(`${this.base}/find`, {
      method: 'POST',
      data: {
        ...body,
        select,
        filter: {
          ...(body.filter || {}),
          ignoreMinSubscribers: true,
          _search: body.search,
        },
        tab: 'adminChannels',
      },
    });

    return {
      ...res,
      data: res.data.map((item) => ({
        ...item,
        title: item.channelInfo.title,
        role: sample(['Director', 'Manager', 'Stuff', 'Salesman', 'Driver', 'Tester', 'Designer']),
        rating: +random(1, 1000, true).toFixed(2),
      })),
    };
  }
}

Promise.config({ cancellation: true });
const listStore = new ListStore({
  api: new Api({
    uapp: {
      api: apiquery,
    },
  }),
  skip: 20,
});
// setTimeout(() => {
//   listStore.fetch();
// }, 2000);

export default listStore;
