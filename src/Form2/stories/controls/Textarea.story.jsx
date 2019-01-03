import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import TextareaComponent from '../../controls/Textarea';
import LightFormGroup from '../../LightFormGroup';


const TextareaView = (props) => {
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
