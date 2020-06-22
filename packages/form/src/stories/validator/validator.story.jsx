import React from 'react';
import { Form, Field } from 'formik';
import Story from '../Story';
import createForm from '../../createForm';
import InputComponent from '../../controls/Input';
import FormDebug from '../../FormDebug';

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
  storiesOf('form/validator', module).add('Validation with validate.js', () => {
    return (
      <Story>
        <Validation
          onSubmit={(values) => {
            console.log({ values });
          }}
        />
      </Story>
    );
  });
