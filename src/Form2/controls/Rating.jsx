import React from 'react';
import get from 'lodash/get';
import Feedback from '~/modules/offer/uapp/components/conversations2/Feedback';
import FormGroup from '../FormGroup';

const Rating = ({
  field,
  form,
  ...props
}) => {
  return (
    <FormGroup
      field={field}
      form={form}
      {...props}
    >
      <Feedback
        {...field}
        {...props}
        noTitle
        disabled={false}
        // allowHalf={field.control?.allowHalf}
        value={get(form.values, field.name)}
        onChange={(val) => {
          field.onChange({
            target: {
              name: field.name,
              value: val,
            },
          });
        }}
        starCount={5}
      />
    </FormGroup>
  );
};

export default Rating;

