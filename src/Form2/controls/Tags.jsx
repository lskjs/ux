import React from 'react';
import get from 'lodash/get';
import TagsPickerBase from '~/lsk/Form/TagsPicker';
import FormGroup from '../FormGroup';

const TagsPicker = ({
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
      <TagsPickerBase
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
    </FormGroup>
  );
};

export default TagsPicker;

