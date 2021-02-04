import createForm from '@lskjs/form/createForm';
import FormSubmit from '@lskjs/form/FormSubmit';
import Page from '@lskjs/page';
import T from '@lskjs/t';
import { FastField, Form } from 'formik';
import React from 'react';

import { AuthFooter } from './parts/AuthFooter';
import getAuthControls from './parts/getAuthControls';

const AuthRestoreFormView = ({ control, status, errors }) => (
  <Form className="ant-form ant-form-vertical">
    <FastField {...control('email')} />
    <FormSubmit block status={status} errors={errors}>
      <T name="buttons.restorePassword" />
    </FormSubmit>
  </Form>
);

const AuthRestoreForm = createForm({
  withI18: true,
  view: AuthRestoreFormView,
  controls: getAuthControls('AuthRestoreForm'),
});

const AuthRestorePage = ({ onSubmit, providers }) => (
  <Page layout={Page.AuthLayout}>
    <Page.Header breadcrumbs={null} />
    <AuthRestoreForm onSubmit={onSubmit} />
    <AuthFooter view="restore" providers={providers} />
  </Page>
);

export default AuthRestorePage;
