// import Story from '@lskjs/dev/Story';
import { Field, Form } from 'formik';
import React from 'react';

import { Input } from '../../form-control-input/src/Input';
import createForm from '../src/createForm';
// import FormDebug from '../FormDebug';

const InputFormView = (props) => (
  <Form>
    <Field {...props.control('input')} />
  </Form>
);

const InputControl = () => <input />;
const LskInputControl = () => <Input />;

const InputForm = createForm({
  view: InputFormView,
  controls: {
    input: {
      title: 'Input',
      initialValue: '',
      component: InputControl,
    },
  },
});
const LskInputForm = createForm({
  view: InputFormView,
  controls: {
    input: {
      title: 'Lsk Input',
      initialValue: '',
      component: LskInputControl,
    },
  },
});

export default {
  title: 'form2/inputForm',
  component: InputForm,
};

export const htmlInput = () => <InputForm />;
export const LskInput = () => <LskInputForm />;
