import { Field, Form } from 'formik';
import React from 'react';

import Input from '../src/controls/Input';
import Select from '../src/controls/Select';
import createForm from '../src/createForm';
import FormDebug from '../src/FormDebug';
import Story from './Story';

const InputFormView = (props) => (
  <Form>
    <Field {...props.control('input')} />
    <Field {...props.control('dependent')} />
    <Field {...props.controls['test.input']} />
    <Field {...props.control('input3')} />
    <FormDebug {...props} />
  </Form>
);

const InputForm = createForm({
  view: InputFormView,
  controls: {
    input: {
      title: 'Input',
      initialValue: 'one',
      component: Input,
    },
    dependent: {
      key: 'input',
      title: 'Dependent control',
      component: Select,
      options: [
        {
          value: 'one',
        },
        {
          value: 'two',
        },
      ],
    },
    'test.input': {
      key: 'test@input',
      title: 'Not nested field',
      initialValue: 'createForm.controls.initialValue',
      component: Input,
    },
    input3: {
      key: 'test@input',
      title: 'Not nested field',
      initialValue: 'createForm.controls.initialValue',
      component: Input,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/Form', module).add('nestedKeys', () => (
    <Story>
      <InputForm
        onChange={(values) => {
          console.log('onChange', values);
        }}
        onSubmit={(values) => {
          console.log('onSubmit', values);
        }}
      />
    </Story>
  ));
