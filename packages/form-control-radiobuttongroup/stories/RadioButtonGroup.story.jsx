import { Field, Form } from 'formik';
import React from 'react';

import createForm from '../../form2/src/createForm';
import { RadioButtonGroup } from '../src/RadioButtonGroup';

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
  title: 'form-control-radiobuttongroup/RadioButtonGroupForm',
  component: RadioButtonGroupForm,
};

export const Default = () => <RadioButtonGroupForm />;
