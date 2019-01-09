import React from 'react';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import sortBy from 'lodash/sortBy';
import isPlainObject from 'lodash/isPlainObject';
import omit from 'lodash/omit';
import find from 'lodash/find';
import ReactSelect from 'react-select';
import Up from 'react-icons2/mdi/chevron-up';
import Down from 'react-icons2/mdi/chevron-down';

const NULL_STRING = '@@NULL@@';

const getOptionValue = value => ((value == null) ? NULL_STRING : value);
const getOptionTitle = option => option.label || option.title || option.value;

const Select = ({
  field,
  form,
  ...props
}) => {
  const value = getOptionValue(field.value);
  // console.log('<select>', {props})
  // , sortBy(preOptions, 'value'));

  let preOptions = [];
  if (props.options) {
    preOptions = cloneDeep(props.options).map(option => (typeof option === 'string' ? { value: option } : option));
    if (field.sortOptions) {
      preOptions = sortBy(preOptions, getOptionTitle);
    }

    if (field.nullOption && field.options) {
      const option = isPlainObject(field.nullOption) ? field.nullOption : {};
      // if (!option.title) option.title = t && t('form.nullOption');
      if (!option.value) option.value = null;
      preOptions.unshift(option);
    }
    // console.log({ preOptions });
    // console.log('field.options', field.options, field);
  }

  const options = preOptions.map(option => ({
    ...omit(option, ['value', 'title', 'label']),
    label: getOptionTitle(option),
    value: getOptionValue(option.value),
  }));

  const customStyles = {
    control: styles => ({ ...styles, height: 48 }),
    valueContainer: styles => ({ ...styles, height: 48 }),
  };

  return (
    <ReactSelect
      // className="list-selector"
      clearable={false}
      arrowRenderer={e => (e.isOpen ? <Up /> : <Down />)}
      error={!!form.errors[field.name]}
      {...field}
      {...props}
      styles={customStyles}
      value={find(options, { value })}
      onChange={(val) => {
        form.setFieldValue(field.name, val.value);
      }}
      options={options}
    />
  );
};

export default Select;

