import React from 'react';
import Form from 'antd/lib/form';
import FormError from './FormError';
import { globalStylesFormItem } from './Form.styles';

globalStylesFormItem();


export default ({ field, form, children, htmlId, required, _required, title, help, errorMessage }) => {
  const errorMsg = errorMessage || form && form.errors && form.errors[field.name];
  const looksLikeRequired = required || _required;
  const titleComponent = <span style={errorMsg ? { color: '#ee1e31' } : {}}>{title}</span>;
  return (
    <Form.Item
      key={htmlId}
      required={looksLikeRequired}
      label={titleComponent}
      help={help}
      validateStatus={errorMsg ? 'error' : null}
    >
      <div id={htmlId} />
      {children}
      {errorMsg && <FormError style={{ color: '#ee1e31' }}>{errorMsg}</FormError>}
    </Form.Item>
  );
};
