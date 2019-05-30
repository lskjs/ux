import React from 'react';
import { Form, Field, FastField } from 'formik';
import UsdIcon from 'react-icons2/mdi/currency-usd';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import Input from './Input';
import currency from './formats/currency';
import FormDebug from '../../FormDebug';

const InputFormView = props => (
  <Form>
    <Field {...props.control('input')} />
    <Field {...props.control('input2')} />
    <Field {...props.control('input3')} />
    <Field {...props.control('input4')} />
    <Field {...props.control('input5')} />
    <Field {...props.control('input6')} />
    <FastField {...props.controls.input2} title="FastField/input2" />
    <FormDebug {...props} />
  </Form>
);

const InputForm = createForm({
  view: InputFormView,
  initialValues: {
    input: 'createForm.initialValues',
  },
  controls: {
    input: {
      title: 'input',
      component: Input,
      placeholder: 'input placeholder',
      required: true,
    },
    input2: {
      title: 'input2',
      component: Input,
      placeholder: 'input2 placeholder',
      initialValue: 'Some value in input2',
    },
    input3: {
      title: 'input with regex',
      component: Input,
      help: 'Only digits',
      regex: /\d*\.?\d*/,
    },
    input4: {
      title: 'input with regex',
      component: Input,
      help: 'Only english',
      regex: /[a-zA-Z ]*/,
    },
    input5: {
      title: 'input with $ icon',
      component: Input,
      leftIcon: <UsdIcon size={28} />,
      placeholder: 'input placeholder',
    },
    input6: {
      title: 'Only currency',
      component: Input,
      format: currency,
      placeholder: 'input placeholder',
      leftIcon: <UsdIcon size={28} />,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('controls', module)
    .add('Input', () => {
      return (
        <Story>
          <InputForm />
        </Story>
      );
    });

