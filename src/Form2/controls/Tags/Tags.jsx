import React from 'react';
import TagsPickerBase from '../../../UI/molecules/TagsPicker';

const TagsPicker = ({
  field,
  form,
  options,
  fields,
  ...props
}) => {
  return (
    <TagsPickerBase
      {...field}
      {...props}
      onSubmit={(value) => {
        form.setFieldValue(field.name, value);
      }}
      // value={field.value}
      fields={options || fields || []}
      // title={field.title}
    />
  );
};

export default TagsPicker;

