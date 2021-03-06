import React from 'react';
import { Form, Field } from 'formik';
// import { Button } from 'react-bootstrap';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import Textarea from './Textarea';
import FormDebug from '../../FormDebug';

const TextareaFormView = props => (
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
  storiesOf('form/controls', module)
    .add('Textarea ', () => {
      return (
        <Story>
          <TextareaForm />
        </Story>
      );
    });
