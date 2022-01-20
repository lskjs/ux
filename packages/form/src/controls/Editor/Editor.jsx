import React from 'react';

import EditorBase from '../../../Editor';

const Editor = ({ field, form, ...props }) => (
  <EditorBase
    {...field}
    {...props}
    onChange={(value) => {
      form.setFieldValue(field.name, value);
    }}
    value={field.value}
  />
);

export default Editor;
