import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import FilesComponent from '../../controls/Files';
import FormGroup from '../../FormGroup';
import DEV from '../../../DEV';

const FilesView = (props) => {
  const {
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.files} />
      <DEV json={values} />
    </Form>
  );
};

const Files = createForm({
  view: FilesView,
  FormGroup,
  controls: {
    files: {
      title: 'Files',
      component: FilesComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Files ', () => {
      return (
        <Story>
          <Files />
        </Story>
      );
    });
