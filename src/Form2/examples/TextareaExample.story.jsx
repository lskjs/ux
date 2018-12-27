import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../Story';
import createForm from '../createForm';
import Textarea from '../controls/Textarea';
import LightFormGroup from '../LightFormGroup';


const TextareaExampleView = (props) => {
  const {
    handleSubmit,
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.textarea} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

const TextareaExample = createForm({
  view: TextareaExampleView,
  FormGroup: LightFormGroup,
  controls: {
    textarea: {
      title: 'textarea',
      component: Textarea,
      type: 'textarea',
      minRows: 5,
      placeholder: 'TextArea Example',
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2', module)
    .add('TextareaExample', () => {
      return (
        <Story>
          <TextareaExample />
        </Story>
      );
    });
