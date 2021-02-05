import createForm from '@lskjs/form/createForm';
import FormSubmit from '@lskjs/form/FormSubmit';
import T from '@lskjs/t';
import { FastField, Form } from 'formik';
import React from 'react';

import { getAuthControls } from '../parts/getAuthControls';

export const AuthPermitFormView = ({ control, status, errors }) => (
  <Form className="ant-form ant-form-vertical">
    <FastField {...control('code')} />
    <FormSubmit block status={status} errors={errors}>
      <T name="lsk.dash.buttons.submit" />
    </FormSubmit>
  </Form>
);

export const authPermitControls = getAuthControls('AuthPermitForm');

export const AuthPermitForm = createForm({
  view: AuthPermitFormView,
  controls: authPermitControls,
});

export default AuthPermitForm;
