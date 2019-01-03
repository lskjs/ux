import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import TagsPickerComponent from '../../controls/TagsPicker';
import LightFormGroup from '../../LightFormGroup';

import '../../../UI/molecules/Modal/Modal.g.css';

const TagsPickerView = (props) => {
  const {
    handleSubmit,
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.tagsPicker} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

const TagsPicker = createForm({
  view: TagsPickerView,
  FormGroup: LightFormGroup,
  controls: {
    tagsPicker: {
      title: 'TagsPicker',
      component: TagsPickerComponent,
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('TagsPicker ', () => {
      return (
        <Story>
          <TagsPicker />
        </Story>
      );
    });
