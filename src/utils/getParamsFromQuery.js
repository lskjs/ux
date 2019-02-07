import get from 'lodash/get';

function parse(json) {
  try {
    return JSON.parse(json);
  } catch (err) {
    return null;
  }
}

export default function getParamsFromQuery(query, ctx) {
  const params = {
    ...get(ctx, 'config.lists', {}),
    subfilter: parse(get(query, 'subfilter')) || {},
    filter: parse(get(query, 'filter')) || {},
    sort: parse(get(query, 'sort')) || {},
    sortBy: get(query, 'sortBy'),
  };
  if (+get(query, 'skip')) {
    params.skip = +get(query, 'skip');
  }
  if (+get(query, 'limit')) {
    params.limit = +get(query, 'limit');
  }
  return params;
}
