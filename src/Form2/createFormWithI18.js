import createForm from './createForm';
import injectObserver from '../utils/injectObserver';

export default config => injectObserver(['i18', 'config', 'user'], (configParams) => {
  console.log('createFormWithI18 DEPRECATED createFormWithI18 DEPRECATED createFormWithI18 DEPRECATED createFormWithI18 DEPRECATED createFormWithI18 DEPRECATED createFormWithI18 DEPRECATED ');
  return createForm(config(configParams));
});

