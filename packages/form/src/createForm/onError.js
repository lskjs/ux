import some from 'lodash/some';
import getControlHtmlId from './getControlHtmlId';
import scrollTo from '@lskjs/scroll';

export default ({ errors, controls }) => {
  some(Object.keys(errors), key => scrollTo(`#${getControlHtmlId(controls[key])}`));
  console.error('Form2.onError', errors);
  throw errors;
};
