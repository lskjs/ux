import React from 'react';
import { Form, Field } from 'formik';
import range from 'lodash/range';
import Story from '@lskjs/dev/Story';
import createForm from '../../../createForm';
import Tags from './Tags';
import FormDebug from '../../../FormDebug';

const TagsFormView = (props) => {
  return (
    <Form>
      <Field {...props.control('tags')} />
      <FormDebug {...props} />
    </Form>
  );
};

const TagsForm = createForm({
  view: TagsFormView,
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


export default ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Custom Tags ', () => {
      return (
        <Story>
          <TagsForm />
        </Story>
      );
    });
