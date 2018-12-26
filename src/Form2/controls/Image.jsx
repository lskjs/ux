import React from 'react';
import get from 'lodash/get';
import ImageUploaderBase from '~/Uapp/components/ImageUploader';
import FormGroup from '../FormGroup';

const ImageUploader = ({
  field,
  form,
  onError,
  ...props
}) => {
  return (
    <FormGroup
      field={field}
      form={form}
      {...props}
    >
      <ImageUploaderBase
        {...field}
        {...props}
        validationState={form.errors[field.name] ? 'error' : null}
        onSubmit={(val) => {
          field.onSubmit({
            target: {
              name: field.name,
              value: val,
            },
          });
        }}
        onError={() => onError?.(form.errors[field.name])} // this.globalError
        value={get(form.values, field.name)}
      />
    </FormGroup>
  );
};

export default ImageUploader;

