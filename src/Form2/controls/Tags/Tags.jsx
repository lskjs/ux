import React from 'react';
import TagsPickerBase from '../../../UI/molecules/TagsPicker';

const TagsPicker = ({
  field,
  form,
  options,
  fields,
  ...props
}) => {
  const formattedOptions = (options || fields || []).map((option) => {
    if (option._id) return option;
    return {
      _id: option.value,
      ...option,
    };
  });
  console.log({formattedOptions});
  
  return (
    <TagsPickerBase
      // {...field}
      {...props}
      onChange={(val) => {
        console.log('onChange', val);
      }}
      onSubmit={(value) => {
        console.log({value});
        form.setFieldValue(field.name, value);
      }}
      value={field.value}
      fields={formattedOptions}
      // title={field.title}
    />
  );
};

export default TagsPicker;

