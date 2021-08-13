import cloneDeep from 'lodash/cloneDeep';
import get from 'lodash/get';
import pick from 'lodash/pick';
import set from 'lodash/set';

import DEBUG from './_debug';

export default ({ controls, pick: pickList = true }) => (props) => {
  if (DEBUG) console.log('Form2 mapPropsToValues', props, controls ); // eslint-disable-line

  const { initialValues } = props;

  let defaultValues;
  if (pickList) {
    if (pickList === true) {
      defaultValues = cloneDeep(initialValues) || {};
    } else {
      defaultValues = pick(initialValues, pickList);
    }
  } else {
    defaultValues = pick(initialValues, Object.keys(controls));
  }

  Object.keys(controls).forEach((key) => {
    if (typeof get(defaultValues, key) !== 'undefined') return;
    if (controls[key].key) return;

    let initialValue = get(controls, `${key}.initialValue`);
    if (initialValue === 'undefined') {
      initialValue = get(controls, `${key}.defaultValue`);
      if (initialValue === 'undefined') return;
    }
    set(defaultValues, key, initialValue);
  });

  if (DEBUG) console.log('Form2 mapPropsToValues', initialValues, ' => ', defaultValues); // eslint-disable-line
  return defaultValues;
};
