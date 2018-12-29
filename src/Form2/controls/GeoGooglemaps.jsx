import React from 'react';
import GeoBase from '../../GeoGooglemaps';

const Geo = ({
  field,
  form,
  ...props
}) => {
  return (
    <GeoBase
      {...field}
      {...props}
      // validationState={this.getError(field.name).state}
      onChange={(value) => {
          form.setFieldValue(field.name, value);
        }}
    />
  );
};

export default Geo;

