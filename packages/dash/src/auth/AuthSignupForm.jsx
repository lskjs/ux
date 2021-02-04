import createForm from '@lskjs/form/createForm';
import FormSubmit from '@lskjs/form/FormSubmit';
import Page from '@lskjs/page';
import T from '@lskjs/t';
import { FastField, Form } from 'formik';
import React from 'react';

import { AuthFooter } from './parts/AuthFooter';
import getAuthControls from './parts/getAuthControls';

export const AuthSignupFormView = ({ control, status, errors }) => (
  <Form className="ant-form ant-form-vertical">
    <FastField {...control('email')} />
    <FastField {...control('password')} />
    <FastField {...control('name')} />
    <FormSubmit block status={status} errors={errors}>
      <T name="buttons.signup" />
    </FormSubmit>
  </Form>
);

export const AuthSignupForm = createForm({
  withI18: true,
  view: SignupFormView,
  controls: getAuthControls(),
});

export default AuthSignupForm;
