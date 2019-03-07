import React from 'react';
import Form from 'antd/lib/form';
import Button from '../Button';
import getControlHtmlId from './createForm/getControlHtmlId';
import FormError from './FormError';

export default ({
  componentClass: Component = Button, errors, onSubmit, status, ...props
}) => (
  <Form.Item
    validateStatus={errors ? 'error' : null}
  >
    {errors.onSubmit && <FormError id={getControlHtmlId('onSubmit')}>{errors.onSubmit}</FormError>}
    <Component
      paint="primary"
      type="submit"
      state={status}
      disabled={!!status}
      {...props}
    />
  </Form.Item>
);
