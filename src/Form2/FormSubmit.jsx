import React from 'react';
import If from 'react-if';
import Form from 'antd/lib/form';
import Button from '../Button';
import Notice from '../UI/molecules/Notice';
import T from '../T';
import getControlHtmlId from './createForm/getControlHtmlId';
import FormError from './FormError';

// <T name={isSubmitting ? 'buttons.waiting' : 'auth3.signupAction'} />

export default ({
  componentClass: Component = Button, errors, isSubmitting, status, children, ...props
}) => {
  if (!errors) console.error('FormSubmit !errors');
  return (
    <Form.Item
      validateStatus={errors ? 'error' : null}
    >
      <If condition={errors.onSubmit}>
        {/* <FormError id={getControlHtmlId('onSubmit')}>{errors.onSubmit}</FormError> */}
        <Notice style={{ marginBottom: 8 }}>
          <FormError id={getControlHtmlId('onSubmit')}>
            {errors.onSubmit}
          </FormError>
          {/* {errors.general} */}
        </Notice>
      </If>
      {/* {errors.onSubmit && <FormError id={getControlHtmlId('onSubmit')}>{errors.onSubmit}</FormError>} */}
      <Component
        paint="primary"
        type="submit"
        state={status}
        disabled={!!status}
        {...props}
      >
        <If condition={isSubmitting}>
          <T name="buttons.waiting" />
        </If>
        <If condition={!isSubmitting}>
          {children}
        </If>

      </Component>
    </Form.Item>
  );
};

