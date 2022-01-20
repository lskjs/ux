import Story from '@lskjs/dev/Story';
import { Field, Form } from 'formik';
import range from 'lodash/range';
import React from 'react';

import createForm from '../../../createForm';
import FormDebug from '../../../FormDebug';
import Tags from './Tags';

const TagsFormView = (props) => (
  <Form>
    <Field {...props.control('tags')} />
    <FormDebug {...props} />
  </Form>
);

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
  storiesOf('form/controls', module).add('Custom Tags ', () => (
    <Story>
      <TagsForm />
    </Story>
  ));
