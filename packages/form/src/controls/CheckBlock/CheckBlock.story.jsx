import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import createForm from '../../createForm';
import CheckBlock from './CheckBlock';
import FormDebug from '../../FormDebug';


const CheckBlockViewForm = props => (
  <Form>
    <Field {...props.control('radio')} />
    <Field {...props.control('checkbox')} />
    <FormDebug {...props} />
  </Form>
);

const CheckBlockForm = createForm({
  view: CheckBlockViewForm,
  controls: {
    radio: {
      // title: 'checkBlock',
      component: CheckBlock,
      view: 'radio',
      label: 'test',
      info: 'this is info',
      // children: 'asd',
      block: true,
    },
    checkbox: {
      // title: 'checkBlock',
      component: CheckBlock,
      view: 'checkbox',
      label: 'test',
      info: 'this is info',
      // children: 'asd',
      block: true,
    },
  },
});

export default ({ storiesOf }) =>
  storiesOf('form/controls', module)
    .add('CheckBlock ', () => {
      return (
        <Story>
          <CheckBlockForm />
        </Story>
      );
    });
