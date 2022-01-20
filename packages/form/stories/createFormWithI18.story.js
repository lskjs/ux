import { Field, Form } from 'formik';
import React from 'react';

import Input from '../src/controls/Input';
import createFormWithI18 from '../src/createFormWithI18';
import Story from './Story';

const InputFormView = (props) => (
  <Form>
    <Field {...props.control('input')} />
    <InputFormNested />
  </Form>
);
const InputFormViewNested = (props) => (
  <Form>
    <Field {...props.control('input')} />
  </Form>
);

const InputForm = createFormWithI18({
  view: InputFormView,
  initialValues: {
    input: 'createForm.initialValues',
  },
  controls: {
    input: {
      title: 'input',
      component: Input,
      placeholder: 'input placeholder',
      required: true,
    },
  },
});
const InputFormNested = createFormWithI18({
  view: InputFormViewNested,
  initialValues: {
    input: 'createForm.initialValues',
  },
  controls: {
    input: {
      title: 'input',
      component: Input,
      placeholder: 'input placeholder',
      required: true,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/nested form', module).add('createFormWithI18', () => (
    <Story>
      <InputForm initialValues={{}} />
    </Story>
  ));
