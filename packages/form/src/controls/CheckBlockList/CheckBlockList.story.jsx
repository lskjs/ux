import React from 'react';
import { Form, FastField } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import CheckBlockList from './CheckBlockList';
import FormDebug from '../../FormDebug';


const CheckBlockListViewForm = props => (
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
  storiesOf('form/controls', module)
    .add('CheckBlockList', () => (
      <Story>
        <CheckBlockListForm />
      </Story>
    ));
