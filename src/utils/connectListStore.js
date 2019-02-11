import { autorun, reaction, toJS } from 'mobx';
// import {  } from 'mobx';
import getParamsFromQuery from './getParamsFromQuery';
import getQueryFromParams from './getQueryFromParams';

const defaultGetParams = store => ({
  filter: toJS(store.filter),
  sort: toJS(store.sort),
  limit: store.limit,
  skip: store.skip,
});

const connectListStore = ({
  page, listStore, query, getParams = defaultGetParams, params: propsDefaultParams,
}) => {
  const defaultParams = propsDefaultParams || getParams(listStore);
  console.log('connectListStore', query, defaultParams);
  if (query) {
    const queryParams = getParamsFromQuery(query, defaultParams);
    console.log('queryParams setState', queryParams);
    listStore.setState(queryParams);
  }
  setTimeout(() => {
    autorun(() => {
      const params = getParams(listStore);
      console.log('autorun', params);

      let string = getQueryFromParams(params, defaultParams);
      if (string) string = `?${string}`;

      page.uapp.history.replace({
        search: string,
        method: 'replaceState',
      });
    });
  }, 1);
  // return reaction(() => {
  //   // const params = getParams(listStore);
  //   // console.log({params});

  //   console.log('reaction !!!');


  //   return {
  //     filter: listStore.filter,
  //     sort: listStore.sort,
  //     limit: listStore.limit,
  //     skip: listStore.skip,
  //     asdads: Math.random(),
  //   };

  // }, params => () => {
  //   console.log('reaction run@@@!!', params);

  //   page.uapp.history.replace({
  //     search: `?${getQueryFromParams(params, defaultParams)}`,
  //     method: 'replaceState',
  //   });
  // });
};


export default connectListStore;


// const ws = uapp.api.ws('/api/offer/deal/subscribe', { query: { dealId: query?._id } });
// const dispose = ListStore.connect({ page, listStore, query });
// page.onExit([dispose, ws.disconnect]);
