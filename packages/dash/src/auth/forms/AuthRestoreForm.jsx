import createForm from '@lskjs/form/createForm';
import FormSubmit from '@lskjs/form/FormSubmit';
import T from '@lskjs/t';
import { FastField, Form } from 'formik';
import React from 'react';

import { getAuthControls } from '../parts/getAuthControls';

export const AuthRestoreFormView = ({ control, status, errors }) => (
  <Form className="ant-form ant-form-vertical">
    <FastField {...control('email')} />
    <FormSubmit block status={status} errors={errors}>
      <T name="lsk.dash.buttons.restorePassword" />
    </FormSubmit>
  </Form>
);

export const authRestoreControls = getAuthControls('AuthRestoreForm');

export const AuthRestoreForm = createForm({
  withI18: true,
  view: AuthRestoreFormView,
  controls: authRestoreControls,
});

export default AuthRestoreForm;
