import React from 'react';
import Textarea from 'react-textarea-autosize';
// import Input from '~/Uapp/components/Input';
import Input from '../../Input';

const TextArea = ({
  field,
  form,
  ...props
}) => {
  return (
    <Input
      {...field}
      debounce={0}
      {...props}
      block
      // validationState={this.getError(field.name).state}
      componentClass={Textarea}
      // value={this.getFieldValue(field.name)}
      onChange={(value) => {
          form.setFieldValue(field.name, value);
        }}
    />
  );
};

export default TextArea;

