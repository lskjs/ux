import Story from '@lskjs/dev/Story';
import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../../createForm';
import FormDebug from '../../FormDebug';
import Checkbox from '../Checkbox';
import Radio from './Radio';

const RadioFormView = (props) => (
  <Form>
    <Field {...props.control('blue')} />
    <Field {...props.control('blue')} />
    <Field {...props.control('blueCheckbox')} />
    <FormDebug {...props} />
  </Form>
);

const RadioForm = createForm({
  view: RadioFormView,
  controls: {
    blue: {
      component: Radio,
      title: 'first value',
    },
    blueCheckbox: {
      key: 'blue',
      component: Checkbox,
      title: 'first value',
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('Radio ', () => (
    <Story>
      <RadioForm />
    </Story>
  ));
