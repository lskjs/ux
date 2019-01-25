import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import Textarea from './Textarea';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

const TextareaFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.textarea} />
      <FormDebug {...props} />
      <Button onClick={props.handleSubmit}>Submit</Button>
    </Form>
  );
};

const TextareaForm = createForm({
  view: TextareaFormView,
  FormGroup,
  controls: {
    textarea: {
      title: 'textarea',
      component: Textarea,
      type: 'textarea',
      minRows: 5,
      placeholder: 'TextArea  ',
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Textarea ', () => {
      return (
        <Story>
          <TextareaForm />
        </Story>
      );
    });
