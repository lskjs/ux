import createForm from '@lskjs/form/createForm';
import FormSubmit from '@lskjs/form/FormSubmit';
import Page from '@lskjs/page';
import T from '@lskjs/t';
import { FastField, Form } from 'formik';
import React from 'react';

import { AuthFooter } from './parts/AuthFooter';
import getAuthControls from './parts/getAuthControls';

const SignupFormView = ({ control, status, errors }) => (
  <Form className="ant-form ant-form-vertical">
    <FastField {...control('email')} />
    <FastField {...control('password')} />
    <FastField {...control('name')} />
    <FormSubmit block status={status} errors={errors}>
      <T name="buttons.signup" />
    </FormSubmit>
  </Form>
);

const SignupForm = createForm({
  withI18: true,
  view: SignupFormView,
  controls: getAuthControls(),
});

const AuthSignupPage = ({ onSubmit, providers }) => (
  <Page layout={Page.AuthLayout}>
    <Page.Header breadcrumbs={null} />
    <SignupForm onSubmit={onSubmit} />
    <AuthFooter view="signup" providers={providers} />
  </Page>
);

export default AuthSignupPage;
