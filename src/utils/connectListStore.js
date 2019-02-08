import { reaction } from 'mobx';
import getParamsFromQuery from './getParamsFromQuery';
import getQueryFromParams from './getQueryFromParams';

const defaultGetParams = (store) => ({
  filter: store.filter, 
  sort: store.sort, 
  limit: store.limit, 
  skip: store.skip,
});

const connectListStore = ({
  page, listStore, query, getParams = defaultGetParams, params: propsDefaultParams,
}) => {
  console.log('connectListStore');
  
  const defaultParams = propsDefaultParams || getParams(listStore);
  if (query) {
    const queryParams = getParamsFromQuery(query, defaultParams);
    listStore.setState(queryParams);
  }
  return reaction(() => {
    // const params = getParams(listStore);
    // console.log({params});

    console.log('reaction !!!');
    

    return {
      filter: listStore.filter, 
      sort: listStore.sort, 
      limit: listStore.limit, 
      skip: listStore.skip,
      asdads: Math.random(),
    };
    
  }, params => () => {
    console.log('reaction run@@@!!');
    
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
