import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../../form2/src/createForm';
// import FormDebug from '../../FormDebug';
import { TextArea } from '../src/Textarea';

const TextAreaComponent = () => <TextArea />;

const TextareaFormView = (props) => (
  <Form>
    <Field {...props.control('textarea')} />
    {/* <FormDebug {...props} /> */}
  </Form>
);

const TextareaForm = createForm({
  view: TextareaFormView,
  controls: {
    textarea: {
      title: 'textarea',
      component: TextAreaComponent,
      type: 'textarea',
      minRows: 5,
      placeholder: 'TextArea',
      required: true,
    },
  },
});

export default {
  title: 'form-control-textarea/TextareaForm',
  component: TextareaForm,
};

export const Default = () => <TextareaForm />;
