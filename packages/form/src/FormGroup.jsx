import React from 'react';
import Form from 'antd/lib/form';
import FormError from './FormError';
import { globalStylesFormItem } from './Form.styles';

globalStylesFormItem();


export default ({ field, form, children, htmlId, required, _required, title, help }) => {
  const errorMessage = form && form.errors && form.errors[field.name];
  const looksLikeRequired = required || _required;
  return (
    <Form.Item
      key={htmlId}
      required={looksLikeRequired}
      label={title}
      help={help}
      validateStatus={errorMessage ? 'error' : null}
      style={{ textAlign: 'left' }}
    >
      <div id={htmlId} />
      {children}
      {errorMessage && <FormError>{errorMessage}</FormError>}
    </Form.Item>
  );
};
