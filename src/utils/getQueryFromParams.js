import isPlainObject from 'lodash/isPlainObject';
import isEmpty from 'lodash/isEmpty';

export default function getQueryFromParams(params = {}) {
  return Object.keys(params)
    .sort((a, b) => a.localeCompare(b))
    .map((key) => {
      const val = params[key];
      if (isPlainObject(val) && isEmpty(val)) return null;
      const val2 = typeof val === 'string' ? val : JSON.stringify(val);
      return [key, val2].join('=');
    })
    .filter(a => a)
    .join('&');
}
