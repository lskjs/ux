import { Field, Form } from 'formik';
import React from 'react';

import { CheckBlock } from '../../form-control-checkblock/src/CheckBlock';
import createForm from '../src/createForm';

const CheckBlockViewForm = (props) => (
  <Form>
    <Field {...props.control('radio')} />
    <Field {...props.control('checkbox')} />
    {/* <FormDebug {...props} /> */}
  </Form>
);

const CheckBlockComponent = () => <CheckBlock />;

const CheckBlockForm = createForm({
  view: CheckBlockViewForm,
  controls: {
    radio: {
      // title: 'checkBlock',
      component: CheckBlockComponent,
      view: 'radio',
      label: 'test',
      info: 'this is info',
      // children: 'asd',
      block: true,
    },
    checkbox: {
      // title: 'checkBlock',
      component: CheckBlockComponent,
      view: 'checkbox',
      label: 'test',
      info: 'this is info',
      // children: 'asd',
      block: true,
    },
  },
});

export default {
  title: 'form2/CheckBlockForm',
  component: CheckBlockForm,
};

export const Default = () => <CheckBlockForm />;
