import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import Tags from './Tags';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';

import '../../../UI/molecules/Modal/Modal.g.css';

const TagsFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.tags} />
      <FormDebug {...props} />
      <Button onClick={props.handleSubmit}>Submit</Button>
    </Form>
  );
};

const TagsForm = createForm({
  view: TagsFormView,
  FormGroup,
  controls: {
    tags: {
      title: 'Tags',
      component: Tags,
      triggerTitle: 'Выбрать теги',
      flat: true,
      options: [
        {
          value: 'one',
          title: 'Один',
        },
        {
          value: 'two',
          title: 'Два',
        },
        {
          value: 'three',
          title: 'Три',
        },
        {
          value: 'four',
          title: 'Четыре',
        },
      ],
    },
  },
});


module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Tags ', () => {
      return (
        <Story>
          <TagsForm />
        </Story>
      );
    });
