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
  );
};

export default Editor;

