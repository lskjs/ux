import React from 'react';
import get from 'lodash/get';
import PriceInputBase from '../../UI/molecules/PriceInput';
import FormGroup from '../FormGroup';

const PriceInput = ({
  field,
  form,
  ...props
}) => {
  const onChange2 = (val) => {
    field.onChange({
      target: {
        name: field.name,
        value: val,
      },
    });
  };
  const onChange = (pp) => {
    // console.log('onChange', {pp});
    onChange2 && onChange2(pp.value);
  };
  return (
    <FormGroup
      field={field}
      form={form}
      {...props}
    >
      <PriceInputBase
        {...field}
        {...props}
        onChange={onChange}
        // onSubmit={this.handleChangeField(field.name)}
        validationState={form.errors[field.name] ? 'error' : null}
        value={get(form.values, field.name)}
        fields={field.fields}
        required={field.required}
      />
    </FormGroup>
  );
};

export default PriceInput;

