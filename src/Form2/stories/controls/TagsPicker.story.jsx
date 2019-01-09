import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import TagsPickerComponent from '../../controls/TagsPicker';
import FormGroup from '../../FormGroup';
import DEV from '../../../DEV';

import '../../../UI/molecules/Modal/Modal.g.css';

const TagsPickerView = (props) => {
  const {
    handleSubmit,
    controls,
    values,
  } = props;
  return (
    <Form>
      <Field {...controls.tagsPicker} />
      <DEV json={values} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

const TagsPicker = createForm({
  view: TagsPickerView,
  FormGroup,
  controls: {
    tagsPicker: {
      title: 'tagsPicker',
      component: TagsPickerComponent,
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
          <TagsPicker />
        </Story>
      );
    });
