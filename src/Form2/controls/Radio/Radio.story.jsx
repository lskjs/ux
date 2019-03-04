import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import Radio from './Radio';
import FormDebug from '../../FormDebug';

const RadioFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.get('blue')} />
      <Field {...props.controls.get('black')} />
      <Field {...props.controls.get('green')} />
      
      <Field {...props.controls.get('colors', 'blue')} />
      <Field {...props.controls.get('colors', 'black')} />
      <Field {...props.controls.get('colors', 'green')} />
      <FormDebug {...props} />
    </Form>
  );
};

const RadioForm = createForm({
  view: RadioFormView,
  controls: {
    blue: {
      component: Radio,
      key: 'color',
      value: 'blue',
      title: 'first value',
    },
    black: {
      component: Radio,
      key: 'color',
      value: 'black',
      title: 'second value',
    },
    green: {
      component: Radio,
      key: 'color',
      value: 'green',
      title: 'third value',
    },
    color2: {
      component: Radio,
      title: 'Цвета',
      options: [
        {
          value: 'blue',
          title: 'first value',
        },
        {
          value: 'black',
          title: 'second value',
        },
        {
          value: 'green',
          title: 'third value',
        },
      ],
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Radio ', () => {
      return (
        <Story>
          <RadioForm />
        </Story>
      );
    });
