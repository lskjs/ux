import injectObserver from '@lskjs/utils/injectObserver';
import createForm from './createForm';
import DEBUG from './createForm/_debug';

console.log('createFormWithI18 DEPRECATED -- DANGER DON\'T USE IT -- createFormWithI18 DEPRECATED -- DANGER DON\'T USE IT -- createFormWithI18 DEPRECATED -- DANGER DON\'T USE IT -- createFormWithI18 DEPRECATED -- DANGER DON\'T USE IT -- ');

export default config => (configParams) => {
  console.log('createFormWithI18 DEPRECATED -- DANGER DON\'T USE IT -- createFormWithI18 DEPRECATED -- DANGER DON\'T USE IT -- createFormWithI18 DEPRECATED -- DANGER DON\'T USE IT -- createFormWithI18 DEPRECATED -- DANGER DON\'T USE IT -- ');
  return createForm(config(configParams));
};
// export default config => injectObserver(['i18', 'config', 'user'], (configParams) => {
//   if (DEBUG) console.log('createFormWithI18 DEPRECATED createFormWithI18 DEPRECATED createFormWithI18 DEPRECATED createFormWithI18 DEPRECATED createFormWithI18 DEPRECATED createFormWithI18 DEPRECATED ');
//   return createForm(config(configParams));
// });
