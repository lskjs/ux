import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../../form2/src/createForm';
// import FormDebug from '../../FormDebug';
import { CheckBlock } from '../src/CheckBlock';

const CheckBlockViewForm = (props) => (
  <Form>
    <Field {...props.control('radio')} />
    <Field {...props.control('radio1')} />
    <Field {...props.control('checkbox')} />
    <Field {...props.control('checkbox1')} />
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
    radio1: {
      // title: 'checkBlock',
      component: CheckBlockComponent,
      checked: true,
      view: 'radio',
      label: 'test',
      info: 'this is info',
      // children: 'asd',
      block: true,
    },
    checkbox1: {
      // title: 'checkBlock',
      component: CheckBlockComponent,
      checked: true,
      view: 'checkbox',
      label: 'test',
      info: 'this is info',
      // children: 'asd',
      block: true,
    },
  },
});

export default {
  title: 'form-control-checkblock/CheckBlockForm',
  component: CheckBlockForm,
};

export const Default = () => <CheckBlockForm />;
