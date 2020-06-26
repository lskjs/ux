/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Form, Field } from 'formik';
import Story from '../Story';
import createForm from '../../createForm';
import Input from '../../controls/Input';
import FormDebug from '../../FormDebug';

const ValidationView = (props) => (
  <Form>
    <Field {...props.control('email')} disabled={!!props.status} />
    <Field {...props.control('password')} disabled={!!props.status} />
    <FormDebug {...props} />
  </Form>
);

const ValidationAsync = createForm({
  view: ValidationView,
  controls: {
    email: {
      title: 'email',
      component: Input,
      help: 'email help',
      placeholder: 'email async placeholder',
    },
    password: {
      title: 'password',
      component: Input,
      placeholder: 'password placeholder',
      type: 'password',
      help: 'password help',
      required: true,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/validator', module).add('validator and submit', () => {
    return (
      <Story>
        <ValidationAsync
          onSubmit={async (values) => {
            throw new Error('Емейл уже есть в базе');
            await Promise.delay(3000);
            if (Math.random() < 0.5) {
              throw 'Емейл уже есть в базе';
            }
          }}
        />
      </Story>
    );
  });
