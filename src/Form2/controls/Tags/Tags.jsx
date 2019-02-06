import React from 'react';
import isPlainObject from 'lodash/isPlainObject';
import TagsPickerBase from '../../../UI/molecules/TagsPicker';
// import { getNormalizedOptions } from '../Select/utils';

function getNormalizedOptions(options) {
  return options.map((option) => {
    if (option && option._id) return option;

    let value;
    let title;
    let props;

    if (isPlainObject(option)) {
      ({ value, title, ...props } = option);
    } else {
      value = option;
      title = option;
      props = {};
    }

    return {
      _id: value,
      value,
      title,
      ...props,
    };
  });
}

const TagsPicker = ({
  field,
  form,
  options,
  fields,
  ...props
}) => {
  const norimalizedOptions = getNormalizedOptions((options || fields || []));
  // console.log('props', props);
  // console.log('options', options);
  // console.log('fields', fields);
  // console.log('form', form);

  return (
    <TagsPickerBase
      // {...field}
      {...props}
      onChange={null}
      onSubmit={(value) => {
        // console.log({ value });
        form.setFieldValue(field.name, value);
      }}
      value={field.value}
      fields={norimalizedOptions}
      validationState={form.errors[field.name] ? 'error' : null}
      // title={field.title}
    />
  );
};

export default TagsPicker;

