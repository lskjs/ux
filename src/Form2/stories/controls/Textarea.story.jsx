import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import TextareaComponent from '../../controls/Textarea';
import LightFormGroup from '../../LightFormGroup';
import DEV from '../../../DEV';

const TextareaView = (props) => {
  const {
    handleSubmit,
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.textarea} />
      <DEV json={values} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

const Textarea = createForm({
  view: TextareaView,
  FormGroup: LightFormGroup,
  controls: {
    textarea: {
      title: 'textarea',
      component: TextareaComponent,
      type: 'textarea',
      minRows: 5,
      placeholder: 'TextArea  ',
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Textarea ', () => {
      return (
        <Story>
          <Textarea />
        </Story>
      );
    });
