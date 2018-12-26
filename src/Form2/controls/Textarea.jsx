import React from 'react';
import Input from '~/Uapp/components/Input';
import Textarea from 'react-textarea-autosize';
import FormGroup from '../FormGroup';

const TextArea = ({
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
    </FormGroup>
  );
};

export default TextArea;

