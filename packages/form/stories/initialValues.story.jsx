import { Field, Form } from 'formik';
import React from 'react';

import Input from '../src/controls/Input';
import createForm from '../src/createForm';
import FormDebug from '../src/FormDebug';
import Story from './Story';

const InputFormView = (props) => (
  <Form>
    <Field {...props.control('input')} />
    <FormDebug {...props} />
  </Form>
);

const InputForm = createForm({
  view: InputFormView,
  controls: {
    input: {
      title: 'Input',
      initialValue: 'createForm.controls.initialValue',
      component: Input,
    },
  },
});

const InputForm2 = createForm({
  view: InputFormView,
  controls: {
    input: {
      title: 'Input',
      defaultValue: 'createForm.controls.defaultValue',
      component: Input,
    },
  },
});

const InputForm3 = createForm({
  view: InputFormView,
  controls: {
    input: {
      title: 'Input',
      component: Input,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/initialValues', module)
    .add('createForm control initialValue', () => (
      <Story>
        <InputForm />
      </Story>
    ))
    .add('createForm control defaultValue', () => (
      <Story>
        <InputForm2 />
      </Story>
    ))
    .add('Control.initialValues', () => (
      <Story>
        <InputForm3
          initialValues={{
            input: 'Control.initialValues',
          }}
        />
      </Story>
    ))
    .add('createForm control initialValue + Control.initialValues ', () => (
      <Story>
        <InputForm
          initialValues={{
            input: 'Control.initialValues',
          }}
        />
      </Story>
    ));
