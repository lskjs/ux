import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import Apiquery from '@lskjs/apiquery';
import createForm from '../../createForm';
import InputComponent from '../../controls/Input';
import FormDebug from '../../FormDebug';

const ValidationView = (props) => {
  const { controls } = props;
  return (
    <Form>
      <Field {...control('email')} />
      <FormDebug {...props} />
    </Form>
  );
};


const api = new Apiquery({
  url: 'https://analytics.buzz.guru/api',
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

export default ({ storiesOf }) => (
  storiesOf('validator', module)
    .add('async general errors', () => (
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
    ))
);
