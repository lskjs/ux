import React from 'react';
import get from 'lodash/get';
import TagsPickerBase from '../../UI/molecules/TagsPicker';

const TagsPicker = ({
  field,
  form,
  ...props
}) => {
  return (
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
  );
};

export default TagsPicker;

