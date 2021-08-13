import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../../form2/src/createForm';
// import FormDebug from '../../FormDebug';
import CheckboxComponent from '../src/Checkbox';

const Checkbox = () => <CheckboxComponent />;

const CheckboxFormView = (props) => (
  <Form>
    <Checkbox label="test" />
    <Checkbox checked />
    <Checkbox checked={false} />
    <Checkbox value />
    <Checkbox value={false} />
    <Checkbox onChange={(value) => console.log({ value })} />
    <hr />
    <Field {...props.control('blue')} />
    <Field {...props.control('black')} />
    <Field {...props.control('black')} />
    <hr />
    {/* <FormDebug {...props} /> */}
  </Form>
);

const CheckboxForm = createForm({
  view: CheckboxFormView,
  controls: {
    blue: {
      component: Checkbox,
      title: 'first value',
      label: '1',
      help: 'help 1',
      tooltip: 'tooltip 1',
    },
    black: {
      component: Checkbox,
      title: 'second value',
      label: '2',
      help: 'help 2',
      tooltip: 'tooltip 2',
    },
  },
});

export default {
  title: 'form-control-checkbox/CheckboxForm',
  component: CheckboxForm,
};

export const Default = () => <CheckboxForm />;
