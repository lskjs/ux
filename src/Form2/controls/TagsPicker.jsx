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
      onSubmit={(val) => {
        field.onChange({
          target: {
            name: field.name,
            value: val,
          },
        });
      }}
      value={get(form.values, field.name)}
    />
  );
};

export default TagsPicker;
