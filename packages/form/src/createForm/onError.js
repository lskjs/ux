import some from 'lodash/some';
import scrollTo from '@lskjs/scroll';
import getControlHtmlId from './getControlHtmlId';

export default ({ errors, controls, scroll = true }) => {
  some(Object.keys(errors), (key) => {
    const id = `#${getControlHtmlId(controls[key])}`;
    if (scroll) scrollTo(id);
  });
  console.error('Form.onError', errors);
  throw errors;
};
