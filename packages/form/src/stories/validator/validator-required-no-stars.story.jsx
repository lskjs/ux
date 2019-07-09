import React from 'react';
import { Form, Field, withFormik } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormDebug from '../../FormDebug';

import Input from '../../controls/Input';

const ValidationView = (props) => {
  const {
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.input} />
      <FormDebug {...props} />
    </Form>
  );
};

const Validation = createForm({
  withFormik,
  view: ValidationView,
  controls: {
    input: {
      title: 'input',
      component: Input,
      // required: true,
      // _required: false,
      validator: {
        presence: {
          allowEmpty: false,
        },
      },
      type: 'email',
    },
  },
});


export default ({ storiesOf }) =>
  storiesOf('validator', module)
    .add('validator requred with no stars', () => {
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
