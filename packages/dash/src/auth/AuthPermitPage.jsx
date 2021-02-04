import createForm from '@lskjs/form/createForm';
import FormSubmit from '@lskjs/form/FormSubmit';
import Page from '@lskjs/page';
import T from '@lskjs/t';
import { FastField, Form } from 'formik';
import React from 'react';

import { AuthFooter } from './parts/AuthFooter';
import getAuthControls from './parts/getAuthControls';

const AuthPermitFormView = ({ control, status, errors }) => (
  <Form className="ant-form ant-form-vertical">
    <FastField {...control('code')} />
    <FormSubmit block status={status} errors={errors}>
      <T name="buttons.submit" />
    </FormSubmit>
  </Form>
);

const AuthPermitForm = createForm({
  withI18: true,
  view: AuthPermitFormView,
  controls: getAuthControls('AuthPermitForm'),
});

const AuthPermitPage = ({ onSubmit, providers }) => (
  <Page layout={Page.AuthLayout}>
    <Page.Header breadcrumbs={null} />
    <AuthPermitForm onSubmit={onSubmit} />
    <AuthFooter view="permit" providers={providers} />
  </Page>
);

export default AuthPermitPage;
