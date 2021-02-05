import createForm from '@lskjs/form/createForm';
import FormSubmit from '@lskjs/form/FormSubmit';
import T from '@lskjs/t';
import { FastField, Form } from 'formik';
import React from 'react';

import { getAuthControls } from '../parts/getAuthControls';

export const AuthLoginFormView = ({ control, status, errors }) => (
  <Form className="ant-form ant-form-vertical">
    <FastField {...control('email')} _required={false} />
    <FastField {...control('password')} _required={false} />
    <FormSubmit block status={status} errors={errors}>
      <T name="lsk.dash.buttons.login" />
    </FormSubmit>
  </Form>
);

export const authLoginFormControls = getAuthControls('AuthLoginForm');

export const AuthLoginForm = createForm({
  view: AuthLoginFormView,
  controls: authLoginFormControls,
});

export default AuthLoginForm;
