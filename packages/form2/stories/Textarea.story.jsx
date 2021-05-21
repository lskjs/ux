import { Field, Form } from 'formik';
import React from 'react';

import { TextArea } from '../../form-control-textarea/src/Textarea';
import createForm from '../src/createForm';
// import FormDebug from '../../FormDebug';

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
  title: 'form2/TextareaForm',
  component: TextareaForm,
};

export const Default = () => <TextareaForm />;
