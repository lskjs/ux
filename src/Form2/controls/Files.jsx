import React from 'react';
import get from 'lodash/get';
import FilesUploaderBase from '../../UI/molecules/FilesUploader';

const FilesUploader = ({
  field,
  form,
  onError,
  ...props
}) => {
  return (
    <FilesUploaderBase
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
      files={get(form.values, field.name)}
    />
  );
};

export default FilesUploader;

