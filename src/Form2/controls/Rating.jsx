import React from 'react';
import get from 'lodash/get';
import Feedback from '../../Feedback';

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
  );
};

export default Rating;

