// import { Button } from 'react-bootstrap';
import Story from '@lskjs/dev/Story';
import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../../createForm';
import FormDebug from '../../FormDebug';
import Textarea from './Textarea';

const TextareaFormView = (props) => (
  <Form>
    <Field {...props.control('textarea')} />
    <FormDebug {...props} />
  </Form>
);

const TextareaForm = createForm({
  view: TextareaFormView,
  controls: {
    textarea: {
      title: 'textarea',
      component: Textarea,
      type: 'textarea',
      minRows: 5,
      placeholder: 'TextArea',
      required: true,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('Textarea ', () => (
    <Story>
      <TextareaForm />
    </Story>
  ));
