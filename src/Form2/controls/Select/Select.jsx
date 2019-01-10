import React from 'react';
import find from 'lodash/find';
import ReactSelect from 'react-select';
import Up from 'react-icons2/mdi/chevron-up';
import Down from 'react-icons2/mdi/chevron-down';

import { getOptionValue, getNormalizedOptions } from './utils';

const Select = ({
  field,
  form,
  ...props
}) => {
  const options = getNormalizedOptions(props.options, props);
  const value = getOptionValue(field.value);
  const valueOption = find(options, { value });

  const customStyles = {
    control: styles => ({ ...styles, height: 48 }),
    valueContainer: styles => ({ ...styles, height: 48 }),
  };

  return (
    <ReactSelect
      // className="list-selector"
      isClearable={!props.required}
      arrowRenderer={e => (e.isOpen ? <Up /> : <Down />)}
      error={!!form.errors[field.name]}
      styles={customStyles}
      {...field}
      {...props}
      value={valueOption}
      onChange={(val) => {
        form.setFieldValue(field.name, val.value);
      }}
      options={options}
    />
  );
};

export default Select;
