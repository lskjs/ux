import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import TagsPicker from './TagsPicker';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

import '../../../UI/molecules/Modal/Modal.g.css';

const TagsPickerFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.tagsPicker} />
      <FormDebug {...props} />
      <Button onClick={props.handleSubmit}>Submit</Button>
    </Form>
  );
};

const TagsPickerForm = createForm({
  view: TagsPickerFormView,
  FormGroup,
  controls: {
    tagsPicker: {
      title: 'tagsPicker',
      component: TagsPicker,
      triggerTitle: 'Выбрать теги',
      flat: true,
      fields: [
        {
          _id: '1',
          value: 'one',
          title: 'Один',
        },
        {
          _id: '2',
          value: 'two',
          title: 'Два',
        },
        {
          _id: '3',
          value: 'three',
          title: 'Три',
        },
        {
          _id: '4',
          value: 'four',
          title: 'Четыре',
        },
      ],
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('TagsPicker ', () => {
      return (
        <Story>
          <TagsPickerForm />
        </Story>
      );
    });
