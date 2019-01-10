import cloneDeep from 'lodash/cloneDeep';
import sortBy from 'lodash/sortBy';
import isPlainObject from 'lodash/isPlainObject';
import omit from 'lodash/omit';

const NULL_STRING = '@@NULL@@';

export const getOptionValue = value => ((value == null) ? NULL_STRING : value);
export const getOptionTitle = option => option.label || option.title || option.value;
export const getNormalizedOptions = (options = [], props = {}) => {
  let preOptions = [];
  if (options) {
    preOptions = cloneDeep(options).map(option => (typeof option === 'string' ? { value: option } : option));
    if (props.sortOptions) {
      preOptions = sortBy(preOptions, getOptionTitle);
    }

    if (props.nullOption) {
      const option = isPlainObject(props.nullOption) ? props.nullOption : {};
      // if (!option.title) option.title = t && t('form.nullOption');
      if (!option.value) option.value = null;
      preOptions.unshift(option);
    }
    // console.log({ preOptions });
    // console.log('field.options', field.options, field);
  }

  return preOptions.map(option => ({
    ...omit(option, ['value', 'title', 'label']),
    label: getOptionTitle(option),
    value: getOptionValue(option.value),
  }));
};
