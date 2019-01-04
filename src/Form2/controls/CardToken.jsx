import React from 'react';
import get from 'lodash/get';
import CardTokenBase from '../../UI/molecules/CardToken';

const CardToken = ({
  field,
  form,
  ...props
}) => {
  return (
    <CardTokenBase
      {...field}
      {...props}
      onSubmit={(val) => {
        field.onChange({
          target: {
            name: field.name,
            value: val,
          },
        });
      }}
      value={get(form.values, field.name)}
      fields={field.fields}
      title={field.title}
    />
  );
};

export default CardToken;

