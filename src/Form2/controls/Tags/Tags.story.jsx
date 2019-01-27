import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import range from 'lodash/range';
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
      <Field {...props.controls.tags2} />
      <Field {...props.controls.tags3} />
      <Field {...props.controls.tags4} />
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
    tags2: {
      title: 'Tags2',
      component: Tags,
      flat: true,
      options: range(1, 100).map(value => ({
        value,
        title: `Title ${value}`,
      })),
    },
    tags3: {
      title: 'Tags',
      component: Tags,
      flat: true,
      options: range(1, 100),
    },
    tags4: {
      title: 'Tags',
      component: Tags,
      options: range(1, 100),
    },
  },
});


export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Tags ', () => {
      return (
        <Story>
          <TagsForm />
        </Story>
      );
    });
