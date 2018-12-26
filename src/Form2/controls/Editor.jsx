import React from 'react';
import get from 'lodash/get';
import EditorBase from '~/lsk/Form/Editor';
import FormGroup from '../FormGroup';

const Editor = ({
  field,
  form,
  ...props
}) => {
  return (
    <FormGroup
      field={field}
      form={form}
      {...props}
    >
      <EditorBase
        {...field}
        {...props}
        onChange={(val) => {
          field.onChange({
            target: {
              name: field.name,
              value: val,
            },
          });
        }}
        value={get(form.values, field.name)}
      />
    </FormGroup>
  );
};

export default Editor;

