import createForm from '@lskjs/form/createForm';
import FormSubmit from '@lskjs/form/FormSubmit';
import Page from '@lskjs/page';
import T from '@lskjs/t';
import { FastField, Form } from 'formik';
import React from 'react';

import { AuthFooter } from './parts/AuthFooter';
import { AuthSocials } from './parts/AuthSocials';
import getAuthControls from './parts/getAuthControls';

const AuthSignupFormView = ({ control, status, errors }) => (
  <Form className="ant-form ant-form-vertical">
    <FastField {...control('password')} />
    <FormSubmit block status={status} errors={errors}>
      <T name="authPage.signupButton" />
    </FormSubmit>
  </Form>
);

const AuthSignupForm = createForm({
  withI18: true,
  view: AuthSignupFormView,
  controls: getAuthControls('AuthSignupForm'),
});

const AuthPasswordPage = ({ onSubmit, providers }) => (
  <Page layout={Page.AuthLayout}>
    <Page.Header breadcrumbs={null} />
    <AuthSignupForm onSubmit={onSubmit} />
    <AuthFooter view="signup" />
    <AuthSocials providers={providers} />
  </Page>
);

export default AuthPasswordPage;
