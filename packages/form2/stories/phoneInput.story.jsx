// import Story from '@lskjs/dev/Story';
import { Field, Form } from 'formik';
import React from 'react';

import { PhoneInput } from '../../form-control-phoneinput/src/PhoneInput';
import createForm from '../src/createForm';
// import FormDebug from '../FormDebug';

const InputFormView = (props) => (
  <Form>
    <Field {...props.control('phone')} />
  </Form>
);

const LskPhoneInput = () => <PhoneInput />;

const LskInputPhoneForm = createForm({
  view: InputFormView,
  controls: {
    phone: {
      title: 'default country',
      component: LskPhoneInput,
    },
  },
});

export default {
  title: 'form2/InputPhoneForm',
  component: LskInputPhoneForm,
};

export const LskPhone = () => <LskInputPhoneForm />;
