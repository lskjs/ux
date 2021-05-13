import Story from '@lskjs/dev/Story';
import { FastField, Field, Form } from 'formik';
import React from 'react';
import UsdIcon from 'react-icons2/mdi/currency-usd'; // TODO: ??

import createForm from '../../createForm';
import FormDebug from '../../FormDebug';
import currency from '../src/formats/currency';
import { Input } from '../src/Input';
import Textarea from '../Textarea';

const InputFormView = ({ control, ...props }) => (
  <Form>
    <Field {...control('input')} />
    <Field {...control('input2')} />
    <Field {...control('input3')} />
    <Field {...control('input4')} />
    <Field {...control('input5')} />
    <Field {...control('email')} />
    <Field {...control('password')} />
    <Field {...control('textarea')} />
    <FastField {...control('input2')} title="FastField for Input" />
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
      title: 'Sample input',
      component: Input,
      placeholder: 'input placeholder',
      required: true,
    },
    input2: {
      title: 'Input with initialValue',
      component: Input,
      placeholder: 'input2 placeholder',
      initialValue: 'Some value in input2',
    },
    input3: {
      title: 'Input with regex only digits and 10 maxLegnth ',
      component: Input,
      help: 'Only digits',
      regex: /\d*\.?\d*/,
      maxLength: 10,
    },
    input4: {
      title: 'Input with regex',
      component: Input,
      help: 'Only english',
      regex: /[a-zA-Z ]*/,
    },
    input5: {
      title: 'input with $ icon and currency format',
      component: Input,
      format: currency,
      leftIcon: <UsdIcon size={28} />,
      placeholder: 'input placeholder',
    },
    email: {
      title: 'Email',
      component: Input,
      type: 'email',
    },
    password: {
      title: 'Password',
      component: Input,
      type: 'password',
      props: {
        autocomplete: 'password',
      },
    },
    textarea: {
      title: 'Input as textarea',
      component: Textarea,
      placeholder: 'input placeholder',
      maxLength: 10,
      required: true,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('Input', () => (
    <Story>
      <InputForm />
    </Story>
  ));
