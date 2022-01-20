import forEach from 'lodash/forEach';
import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import map from 'lodash/map';
import pickBy from 'lodash/pickBy';

export default (controls) => {
  const validators = {};
  let customValidators = [];
  forEach(controls, (value, key) => {
    validators[key] = pickBy(value.validator, (validator) => !isFunction(validator));

    const custom = pickBy(value.validator, isFunction);
    if (!isEmpty(custom)) {
      customValidators = [
        ...customValidators,
        ...map(custom, (validator) => ({
          name: key,
          validator,
        })),
      ];
    }
  });
  return {
    validators,
    customValidators,
  };
};
