import { autorun, toJS } from 'mobx';
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
  // console.log('connectListStore', query, defaultParams);
  if (query) {
    const queryParams = getParamsFromQuery(query, defaultParams);
    // console.log('queryParams setState', queryParams);
    listStore.setState(queryParams);
  }

  return autorun(() => {
    const params = getParams(listStore);
    // console.log('autorun', params);

    let string = getQueryFromParams(params, defaultParams);
    if (string) string = `?${string}`;

    page.uapp.history.replace({
      search: string,
      method: 'replaceState',
    });
  });
};


export default connectListStore;
