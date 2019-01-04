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
      onSubmit={(value) => {
        form.setFieldValue(field.name, value);
      }}
      value={get(form.values, field.name)}
      fields={field.fields}
      title={field.title}
    />
  );
};

export default TagsPicker;

