import React from 'react';
import get from 'lodash/get';
import EditorBase from '../../Editor';

const Editor = ({
  field,
  form,
  ...props
}) => {
  return (
    <EditorBase
      {...field}
      {...props}
      onChange={(value) => {
        form.setFieldValue(field.name, value);
      }}
      value={get(form.values, field.name)}
    />
  );
};

export default Editor;

