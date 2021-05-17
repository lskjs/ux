import scrollTo from '@lskjs/scroll'; // TODO: подумать что делать
import some from 'lodash/some';

import getControlHtmlId from './getControlHtmlId';

export default ({ errors, controls, scroll = true }) => {
  some(Object.keys(errors), (key) => {
    const id = `#${getControlHtmlId(controls[key])}`;
    if (scroll) scrollTo(id);
  });
  console.error('Form.onError', errors);
  throw errors;
};
