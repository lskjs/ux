import React from 'react';
import { Form, Field } from 'formik';
import Story from '@lskjs/dev/Story';
import RadioButtonGroup from './RadioButtonGroup';
import createForm from '../../createForm';
import FormDebug from '../../FormDebug';

const RadioButtonGroupFormView = props => (
  <Form>
    <Field {...props.controls.get('RadioButtonGroup')} />
    <FormDebug {...props} />
  </Form>
);

const RadioButtonGroupForm = createForm({
  view: RadioButtonGroupFormView,
  controls: {
    RadioButtonGroup: {
      component: RadioButtonGroup,
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

export default ({ storiesOf }) => {
  storiesOf('controls', module)
    .add('RadioButtonGroup', () => (
      <Story>
        <RadioButtonGroupForm />
      </Story>
    ));
};
