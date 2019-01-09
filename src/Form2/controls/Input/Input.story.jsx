import React from 'react';
import { Form, Field, FastField } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import Input from './Input';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

const InputFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.input} />
      <Field {...props.controls.input2} />
      <FastField {...props.controls.input2} title="FastField/input2" />
      <FormDebug {...props} />
    </Form>
  );
};

const InputForm = createForm({
  view: InputFormView,
  FormGroup,
  initialValues: {
    input: 'createForm.initialValues',
  },
  controls: {
    input: {
      title: 'input',
      component: Input,
      placeholder: 'input placeholder',
    },
    input2: {
      title: 'input2',
      component: Input,
      placeholder: 'input2 placeholder',
      initialValue: 'Some value in input2',
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Input', () => {
      return (
        <Story>
          <InputForm />
        </Story>
      );
    });

