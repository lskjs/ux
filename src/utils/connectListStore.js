import { autorun, toJS } from 'mobx';
import omit from 'lodash/omit';
import getParamsFromQuery from './getParamsFromQuery';
import getQueryFromParams from './getQueryFromParams';

const DEBUG = false; // __DEV__;

const omitKeys = ['filter', 'sort', 'sortBy', 'search', 'skip', 'limit'];

export const defaultGetParams = store => ({
  filter: toJS(store.filter),
  sort: toJS(store.sort),
  limit: toJS(store.limit),
  skip: toJS(store.skip),
  search: toJS(store.search),
});

const connectListStore = ({
  page, listStore, query, getParams = defaultGetParams, params: propsDefaultParams,
}) => {
  const defaultParams = propsDefaultParams || getParams(listStore);
  DEBUG && console.log('connectListStore', query, defaultParams);
  if (query) {
    const queryParams = getParamsFromQuery(query, defaultParams);
    DEBUG && console.log('queryParams setState', queryParams);
    listStore.setState(queryParams);
  }

  return autorun(() => {
    const params = {
      ...omit(query, omitKeys),
      ...getParams(listStore),
    };
    DEBUG && console.log('autorun', { params }, { defaultParams }, omit(query, omitKeys), {
      ...defaultParams,
      ...omit(query, omitKeys),
    });

    let string = getQueryFromParams(params, defaultParams);
    if (string) string = `?${string}`;

    page.uapp.history.replace({
      search: string,
      method: 'replaceState',
    });
  });
};


export default connectListStore;
