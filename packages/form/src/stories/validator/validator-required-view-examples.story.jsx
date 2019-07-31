import React from 'react';
import { Form, Field, withFormik } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import FormDebug from '../../FormDebug';

import Input from '../../controls/Input';

const ValidationView = (props) => {
  const { control } = props;
  return (
    <Form>
      <Field {...control('input1')} />
      <Field {...control('input2')} />
      <Field {...control('input3')} />
      <Field {...control('input4')} />
      <FormDebug {...props} />
    </Form>
  );
};


const Validation = createForm({
  withFormik,
  view: ValidationView,
  controls: {
    input1: {
      title: 'Not required',
      component: Input,
    },
    input2: {
      title: 'Required',
      component: Input,
      required: true,
      // _required: true,
    },
    input3: {
      title: 'Looks like required, but not required (with *)',
      component: Input,
      // required: false,
      _required: true,
    },
    input4: {
      title: 'Looks like not required, but required (without *)',
      component: Input,
      required: true,
      _required: false,
    },
  },
});


export default ({ storiesOf }) => (
  storiesOf('form/validator', module)
    .add('validator required with no stars', () => (
      <Story>
        <Validation
          onSubmit={(values) => {
            console.log({ values });
          }}
        />
      </Story>
    ))
);
