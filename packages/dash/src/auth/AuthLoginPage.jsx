import createForm from '@lskjs/form/createForm';
import FormSubmit from '@lskjs/form/FormSubmit';
import Page from '@lskjs/page';
import T from '@lskjs/t';
import { FastField, Form } from 'formik';
import React from 'react';

import { AuthFooter } from './parts/AuthFooter';
import getAuthControls from './parts/getAuthControls';

const AuthLoginFormView = ({ control, status, errors }) => (
  <Form className="ant-form ant-form-vertical">
    <FastField {...control('email')} _required={false} />
    <FastField {...control('password')} _required={false} />
    <FormSubmit block status={status} errors={errors}>
      <T name="buttons.login" />
    </FormSubmit>
  </Form>
);

const AuthLoginForm = createForm({
  withI18: true,
  view: AuthLoginFormView,
  controls: getAuthControls('AuthLoginForm'),
});

const AuthLoginPage = ({ onSubmit, providers }) => (
  <Page layout={Page.AuthLayout}>
    <Page.Header breadcrumbs={null} />
    <AuthLoginForm onSubmit={onSubmit} />
    <AuthFooter view="login" providers={providers} />
  </Page>
);

export default AuthLoginPage;
