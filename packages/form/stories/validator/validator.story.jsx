/* eslint-disable react/destructuring-assignment */
import { Field, Form } from 'formik';
import React from 'react';

import InputComponent from '../../src/controls/Input';
import createForm from '../../src/createForm';
import FormDebug from '../../src/FormDebug';
import Story from '../Story';

const ValidationView = (props) => (
  <Form>
    <Field {...props.control('email')} disabled={!!props.isSubmitting} />
    <Field {...props.control('password')} disabled={!!props.isSubmitting} />
    <FormDebug {...props} />
  </Form>
);

const Validation = createForm({
  view: ValidationView,
  controls: {
    email: {
      title: 'email',
      component: InputComponent,
      placeholder: 'email placeholder',
      type: 'text',
      validator: {
        presence: {
          allowEmpty: false,
        },
      },
    },
    password: {
      title: 'password',
      component: InputComponent,
      placeholder: 'password placeholder',
      type: 'password',
      validator: {
        presence: {
          allowEmpty: false,
        },
      },
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/validator', module).add('Validation with validate.js', () => (
    <Story>
      <Validation
        onSubmit={(values) => {
          console.log({ values });
        }}
      />
    </Story>
  ));
