// import Story from '@lskjs/dev/Story';
import { Field, Form } from 'formik';
import React from 'react';

import Select from '../../form-control-select/src/Select';
import createForm from '../src/createForm';
// import FormDebug from '../FormDebug';

const InputFormView = (props) => (
  <Form>
    <Field {...props.control('input')} />
  </Form>
);

const LskSelectControl = () => <Select />;

const LskSelectForm = createForm({
  view: InputFormView,
  controls: {
    input: {
      title: 'Lsk Input',
      initialValue: '',
      component: LskSelectControl,
    },
  },
});

export default {
  title: 'form2/selectForm',
  component: LskSelectForm,
};

export const LskSelect = () => <LskSelectForm />;
