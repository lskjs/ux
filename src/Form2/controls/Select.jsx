import React from 'react';
import get from 'lodash/get';
import cloneDeep from 'lodash/cloneDeep';
import sortBy from 'lodash/sortBy';
import isPlainObject from 'lodash/isPlainObject';
import SelectBase from '../../Select';

const NULL_STRING = '@@NULL@@';
const Select = ({
  field,
  form,
  ...props
}) => {
  const valueBefore = get(form.values, field.name);
  const value = (valueBefore == null) ? NULL_STRING : valueBefore;

  let preOptions = [];
  if (props.options) {
    preOptions = cloneDeep(props.options);
    if (field.sortOptions) {
      preOptions = sortBy(preOptions, 'title');
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
    ...option,
    label: option.label || option.title,
    value: option.value == null ? NULL_STRING : option.value,
  }));
  return (
  // <FormGroup
  //   field={field}
  //   form={form}
  //   {...props}
  // >
    <SelectBase
      {...field}
      {...props}
      error={!!form.errors[field.name]}
      value={value}
      onChange={(val) => {
          field.onChange({
            target: {
              name: field.name,
              value: val,
            },
          });
        }}
      options={options}
    />
  // </FormGroup>
  );
};

export default Select;

