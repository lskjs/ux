import { FastField, Form } from 'formik';
import React from 'react';

// import FormDebug from '../../FormDebug';
import { Password } from '../../form-control-password/src/Password';
import createForm from '../src/createForm';

const PasswordFormView = (props) => {
  const { control } = props;
  return (
    <Form>
      <FastField {...control('password')} />
      {/* <FormDebug {...props} /> */}
    </Form>
  );
};

const PasswordForm = createForm({
  view: PasswordFormView,
  controls: {
    password: {
      title: 'Password',
      component: Password,
      validationInfo: true,
      placeholder: 'Your password',
    },
  },
});

export default {
  title: 'form2/PasswordForm',
  component: PasswordForm,
};

export const Default = () => <PasswordForm />;
