import some from 'lodash/some';
import scrollTo from '@lskjs/scroll';
import getControlHtmlId from './getControlHtmlId';

export default ({ errors, controls }) => {
  some(Object.keys(errors), (key) => {
    const id = `#${getControlHtmlId(controls[key])}`;
    console.log({ id });
    scrollTo(id, { debug: 1 });
  });
  console.error('Form2.onError', errors);
  throw errors;
};
