import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import FilesComponent from '../../controls/Files';
import LightFormGroup from '../../LightFormGroup';


const FilesView = (props) => {
  const {
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.files} />
    </Form>
  );
};

const Files = createForm({
  view: FilesView,
  FormGroup: LightFormGroup,
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
