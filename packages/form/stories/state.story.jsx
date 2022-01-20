/* eslint-disable react/destructuring-assignment */
import Promise from 'bluebird';
import { Field, Form } from 'formik';
import React from 'react';

import Input from '../src/controls/Input';
import createForm from '../src/createForm';
import FormDebug from '../src/FormDebug';
import Story from './Story';

const InputFormView = (props) => (
  <Form>
    <Field {...props.control('login')} />
    <Field {...props.control('password')} />
    <FormDebug {...props} />
  </Form>
);

const DemoForm = createForm({
  view: InputFormView,
  controls: {
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

const createSubmit =
  (probability = 0.5, delay = 2000) =>
  async (values) => {
    console.log('onSubmit', values); // eslint-disable-line no-console
    await Promise.delay(delay);
    if (Math.random() < probability) {
      console.log('ok'); // eslint-disable-line no-console
      return 'ok';
    }
    console.log('error'); // eslint-disable-line no-console
    throw 'ERROR';  //eslint-disable-line
  };

export default ({ storiesOf }) =>
  storiesOf('form/state', module)
    .add('success', () => (
      <Story>
        <DemoForm onSubmit={createSubmit(1)} />
      </Story>
    ))
    .add('error', () => (
      <Story>
        <DemoForm onSubmit={createSubmit(0)} />
      </Story>
    ))
    .add('random 0.5', () => (
      <Story>
        <DemoForm onSubmit={createSubmit(0.5)} />
      </Story>
    ));
