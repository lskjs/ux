import React from 'react';
import get from 'lodash/get';
import TagsPickerBase from '../../UI/organisms/TagsPicker';

const TagsPicker = ({
  field,
  form,
  ...props
}) => {
  return (
    <TagsPickerBase
      {...field}
      {...props}
      onChange={null}
      onSubmit={(value) => {
        form.setFieldValue(field.name, value);
      }}
      value={get(form.values, field.name)}
    />
  );
};

export default TagsPicker;
