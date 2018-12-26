import React from 'react';
import get from 'lodash/get';
import FilesUploaderBase from '~/Uapp/components/FilesUploader';
import FormGroup from '../FormGroup';

const FilesUploader = ({
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
      <FilesUploaderBase
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
        files={get(form.values, field.name)}
      />
    </FormGroup>
  );
};

export default FilesUploader;

