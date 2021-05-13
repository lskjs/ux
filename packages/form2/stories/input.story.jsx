// import Story from '@lskjs/dev/Story';
import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../src/createForm';
// import FormDebug from '../FormDebug';

const InputFormView = (props) => (
  <Form>
    <Field {...props.control('input')} />
    {/* <FormDebug {...props} /> */}
  </Form>
);

const InputControl = () => '<InputControl />';

const InputForm = createForm({
  view: InputFormView,
  controls: {
    input: {
      title: 'Input',
      initialValue: 'createForm.controls.initialValue',
      component: InputControl,
    },
  },
});

export default {
  title: 'form2/input',
  component: InputForm,
};

export const Default = () => <InputForm />;
