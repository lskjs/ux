import React from 'react';
import get from 'lodash/get';
import ImageUploaderBase from '../../UI/molecules/ImageUploader';

const ImageUploader = ({
  field,
  form,
  onError,
  ...props
}) => {
  return (
    <ImageUploaderBase
      {...field}
      {...props}
      validationState={form.errors[field.name] ? 'error' : null}
      onSubmit={(val) => {
        field.onChange({
          target: {
            name: field.name,
            value: val,
          },
        });
      }}
      onError={() => onError?.(form.errors[field.name])} // this.globalError
      value={get(form.values, field.name)}
    />
  );
};

export default ImageUploader;

