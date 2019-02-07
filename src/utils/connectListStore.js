import { reaction } from 'mobx';
import getParamsFromQuery from './getParamsFromQuery';
import getQueryFromParams from './getQueryFromParams';

const defaultGetParams = ({
  filter, sort, limit, skip,
}) => ({
  filter, sort, limit, skip,
});

const connectListStore = ({
  page, listStore, query, getParams = defaultGetParams, params: propsDefaultParams,
}) => {
  const defaultParams = propsDefaultParams || getParams(listStore);
  if (query) {
    const queryParams = getParamsFromQuery(query, defaultParams);
    listStore.setState(queryParams);
  }
  return reaction(() => getParams(listStore), params => () => {
    page.uapp.history.replace({
      search: `?${getQueryFromParams(params, defaultParams)}`,
      method: 'replaceState',
    });
  });
};


export default connectListStore;


// const ws = uapp.api.ws('/api/offer/deal/subscribe', { query: { dealId: query?._id } });
// const dispose = ListStore.connect({ page, listStore, query });
// page.onExit([dispose, ws.disconnect]);
