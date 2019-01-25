import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import Files from './Files';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

const FilesFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.files} />
      <FormDebug {...props} />
    </Form>
  );
};

const FilesForm = createForm({
  view: FilesFormView,
  FormGroup,
  controls: {
    files: {
      title: 'Files',
      component: Files,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Files ', () => {
      return (
        <Story>
          <FilesForm />
        </Story>
      );
    });
