import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import Files from './Files';
import FormDebug from '../../FormDebug';
import Body from '../Image/DefaultBody';

const FilesFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.files} />
      <Field {...props.controls.files2} />
      <FormDebug {...props} />
    </Form>
  );
};

const FilesForm = createForm({
  view: FilesFormView,
  controls: {
    files: {
      title: 'Files',
      component: Files,
      multiple: true,
    },
    files2: {
      title: 'Files custom',
      component: Files,
      multiple: true,
      type: 'image',
      components: {
        Body,
      },
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
