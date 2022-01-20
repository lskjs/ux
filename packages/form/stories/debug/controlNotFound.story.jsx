import { Field, Form } from 'formik';
import React from 'react';

import Input from '../../src/controls/Input';
import createForm from '../../src/createForm';
import FormDebug from '../../src/FormDebug';
import Story from '../Story';

const InputFormView = (props) => (
  <Form>
    <Field {...props.control('notFound')} />
    <FormDebug {...props} />
  </Form>
);

const DemoForm = createForm({
  view: InputFormView,
  control: {
    login: {
      title: 'Login',
      component: Input,
    },
    password: {
      title: 'Password',
      component: Input,
      type: 'password',
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/debug', module).add('controlNotFound', () => (
    <Story>
      <DemoForm
        onSubmit={(values) => {
          console.log({ values });
        }}
      />
    </Story>
  ));
