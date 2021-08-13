import { FastField, Form } from 'formik';
import React from 'react';

import createForm from '../../form2/src/createForm';
// import FormDebug from '../../FormDebug';
import { Password } from '../src/Password';

const PasswordFormView = (props) => {
  const { control } = props;
  return (
    <Form>
      <FastField {...control('password')} />
      {/* <FormDebug {...props} /> */}
    </Form>
  );
};

const PasswordComponent = () => <Password />;

const PasswordForm = createForm({
  view: PasswordFormView,
  controls: {
    password: {
      title: 'Password',
      component: PasswordComponent,
      placeholder: 'Your password',
    },
  },
});

export default {
  title: 'form-control-password/PasswordForm',
  component: PasswordForm,
};

export const Default = () => <PasswordForm />;
