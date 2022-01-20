import { Field, Form } from 'formik';
import React from 'react';

import Input from '../src/controls/Input';
import createForm from '../src/createForm';
import FormDebug from '../src/FormDebug';
import Story from './Story';

const OnChangeView = (props) => (
  <Form>
    <Field {...props.control('input')} />
    <FormDebug {...props} />
  </Form>
);

const OnChangeForm = createForm({
  view: OnChangeView,
  controls: {
    input: {
      title: 'Input',
      component: Input,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/Form', module).add('onChange ', () => (
    <Story>
      <OnChangeForm
        onChange={(values) => {
          console.log('onChange', values);
        }}
      />
    </Story>
  ));
