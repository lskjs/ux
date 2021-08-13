import createForm from '@lskjs/form/createForm';
import FormSubmit from '@lskjs/form/FormSubmit';
import T from '@lskjs/t';
import { FastField, Form } from 'formik';
import React from 'react';

import { getAuthControls } from '../parts/getAuthControls';

export const AuthSignupFormView = ({ control, status, errors }) => (
  <Form className="ant-form ant-form-vertical">
    <FastField {...control('email')} />
    <FastField {...control('password')} />
    <FastField {...control('name')} />
    <FormSubmit block status={status} errors={errors}>
      <T name="lsk.dash.buttons.signup" />
    </FormSubmit>
  </Form>
);

export const authSignupFormControls = getAuthControls('AuthSignupForm');

export const AuthSignupForm = createForm({
  view: AuthSignupFormView,
  controls: authSignupFormControls,
});

export default AuthSignupForm;
