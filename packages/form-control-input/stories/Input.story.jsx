import { FastField, Field, Form } from 'formik';
import React from 'react';

// import UsdIcon from 'react-icons2/mdi/currency-usd'; // TODO: ??
import createForm from '../../form2/src/createForm';
// import FormDebug from '../../form2/src/FormDebug';
import currencyFormat from '../src/formats/currency';
import { Input } from '../src/Input';
// import Textarea from '../Textarea';

const InputFormView = ({ control, ...props }) => (
  <Form>
    <Field {...control('input')} />
    <Field {...control('input2')} />
    <Field {...control('input3')} />
    <Field {...control('input4')} />
    <Field {...control('input5')} />
    <Field {...control('email')} />
    <Field {...control('password')} />
    {/* <Field {...control('textarea')} /> */}
    <FastField {...control('input2')} title="FastField for Input" />
    <br />
    <div>{JSON.stringify(props, null, 2)}</div>
  </Form>
);

const InputControl = () => <Input />;

const InputForm = createForm({
  view: InputFormView,
  initialValues: {
    input: 'createForm.initialValues',
  },
  controls: {
    input: {
      title: 'Sample input',
      component: InputControl,
      placeholder: 'input placeholder',
      required: true,
    },
    input2: {
      title: 'Input with initialValue',
      component: InputControl,
      placeholder: 'input2 placeholder',
      initialValue: 'Some value in input2',
    },
    input3: {
      title: 'Input with regex only digits and 10 maxLegnth ',
      component: InputControl,
      help: 'Only digits',
      regex: /\d*\.?\d*/,
      maxLength: 10,
    },
    input4: {
      title: 'Input with regex',
      component: InputControl,
      help: 'Only english',
      regex: /[a-zA-Z ]*/,
    },
    input5: {
      title: 'input with $ icon and currency format',
      component: InputControl,
      format: currencyFormat,
      leftIcon: () => <div style={{ fontSize: 28 }}>$</div>,
      placeholder: 'input placeholder',
    },
    email: {
      title: 'Email',
      component: InputControl,
      type: 'email',
    },
    password: {
      title: 'Password',
      component: InputControl,
      type: 'password',
      props: {
        autocomplete: 'password',
      },
    },
    // textarea: {
    //   title: 'Input as textarea',
    //   component: Textarea,
    //   placeholder: 'input placeholder',
    //   maxLength: 10,
    //   required: true,
    // },
  },
});

export default {
  title: 'form-control-input/InputForm',
  component: InputForm,
};

export const Default = () => <InputForm />;
