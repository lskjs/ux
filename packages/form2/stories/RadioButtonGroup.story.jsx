import { Field, Form } from 'formik';
import React from 'react';

import { RadioButtonGroup } from '../../form-control-radiobuttongroup/src/RadioButtonGroup';
import createForm from '../src/createForm';

const RadioButtonGroupFormView = (props) => (
  <Form>
    <Field {...props.control('RadioButtonGroup')} block />
    {/* <FormDebug {...props} /> */}
  </Form>
);

const RadioButtonGroupComponent = () => <RadioButtonGroup />;

const RadioButtonGroupForm = createForm({
  view: RadioButtonGroupFormView,
  controls: {
    RadioButtonGroup: {
      component: RadioButtonGroupComponent,
      active: 'byDate',
      options: [
        {
          value: 'byDate',
          title: 'По дате',
        },
        {
          value: 'month3',
          title: '3 месяца',
        },
        {
          value: 'month6',
          title: '6 месяцев',
        },
      ],
    },
  },
});

export default {
  title: 'form2/RadioButtonGroupForm',
  component: RadioButtonGroupForm,
};

export const Default = () => <RadioButtonGroupForm />;
