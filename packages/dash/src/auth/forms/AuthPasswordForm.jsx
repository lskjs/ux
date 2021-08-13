import createForm from '@lskjs/form/createForm';
import FormSubmit from '@lskjs/form/FormSubmit';
import T from '@lskjs/t';
import { FastField, Form } from 'formik';
import React from 'react';

import { getAuthControls } from '../parts/getAuthControls';

export const AuthPasswordFormView = ({ control, status, errors }) => (
  <Form className="ant-form ant-form-vertical">
    <FastField {...control('password')} />
    <FormSubmit block status={status} errors={errors}>
      <T name="lsk.dash.buttons.submit" />
    </FormSubmit>
  </Form>
);

export const authPasswordFormControls = getAuthControls('AuthPasswordForm');

export const AuthPasswordForm = createForm({
  view: AuthPasswordFormView,
  controls: authPasswordFormControls,
});

export default AuthPasswordForm;
