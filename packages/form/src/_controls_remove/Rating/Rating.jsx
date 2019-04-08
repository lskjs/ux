import React from 'react';
import get from 'lodash/get';
import Feedback from '../../../Feedback';

const Rating = ({
  field,
  form,
  ...props
}) => {
  return (
    <Feedback
      {...field}
      {...props}
      noTitle
      disabled={false}
      value={field.value}
      onChange={(value) => {
        form.setFieldValue(field.name, value);
      }}
      starCount={5}
    />
  );
};

export default Rating;

