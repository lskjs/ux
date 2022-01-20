/* eslint-disable react/destructuring-assignment */
import Apiquery from '@lskjs/apiquery';
import { Field, Form } from 'formik';
import React from 'react';

import InputComponent from '../../src/controls/Input';
import createForm from '../../src/createForm';
import FormDebug from '../../src/FormDebug';
import Story from '../Story';

const ValidationView = (props) => (
  <Form>
    <Field {...props.control('email')} />
    <FormDebug {...props} />
  </Form>
);

const api = new Apiquery({
  url: 'https://staging.buzz.guru/api',
});

const ValidationAsync = createForm({
  view: ValidationView,
  controls: {
    email: {
      title: 'email',
      component: InputComponent,
      placeholder: 'email async placeholder',
      validator: {
        check: async () => {
          try {
            const res = await api.fetch(Math.random() < 0.5 ? '/error' : '/healthcheck', {
              method: 'post',
              data: {
                qwe: 123,
              },
            });
            console.log({ res });
          } catch (err) {
            console.log({ err });
            throw err;
          }
          // throw 'Message 123';
          // try {
          //   return t(value);
          // } catch (err) {
          //   return err.message;
          // }
        },
      },
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/validator', module).add('async general errors', () => (
    <Story>
      <ValidationAsync
        onError={(errors) => {
          console.log({ errors });
        }}
        onSubmit={(values) => {
          console.log({ values });
        }}
      />
    </Story>
  ));
