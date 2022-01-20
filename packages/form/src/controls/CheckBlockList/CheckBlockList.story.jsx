import Story from '@lskjs/dev/Story';
import { FastField, Form } from 'formik';
import React from 'react';

import createForm from '../../createForm';
import FormDebug from '../../FormDebug';
import CheckBlockList from './CheckBlockList';

const CheckBlockListViewForm = (props) => (
  <Form>
    <FastField {...props.control('test')} />
    <FormDebug {...props} />
  </Form>
);

const CheckBlockListForm = createForm({
  view: CheckBlockListViewForm,
  controls: {
    test: {
      component: CheckBlockList,
      options: [
        {
          value: 'first',
          title: 'Value-1',
        },
        {
          value: 'second',
          title: 'Value-2',
        },
        {
          value: 'third',
          title: 'Value-3',
        },
        {
          value: 'four',
          title: 'Value-4',
        },
      ],
      cols: {
        xs: 6,
      },
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module).add('CheckBlockList', () => (
    <Story>
      <CheckBlockListForm />
    </Story>
  ));
