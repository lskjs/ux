import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import FormGroup from '../../FormGroup';
import FormDebug from '../../FormDebug';
import Select from '../../controls/Select';

const SelectFormView = (props) => {
  return (
    <Form>
      <Field {...props.controls.select} />
      <Field {...props.controls.select2} />
      <Field {...props.controls.select3} />
      <Field {...props.controls.select4} />
      <FormDebug {...props} />
    </Form>
  );
};

const SelectForm = createForm({
  view: SelectFormView,
  FormGroup,
  controls: {
    select: {
      title: 'The Select',
      component: Select,
      options: [
        {
          value: 'one',
          title: 'The One',
        },
        {
          value: 'two',
          title: 'The Two',
        },
      ],
      placeholder: 'placeholder 1',
    },
    select2: {
      title: 'The Select2',
      component: Select,
      options: [
        {
          value: 'one',
        },
        {
          value: 'two',
        },
      ],
      placeholder: 'placeholder 2',
    },
    select3: {
      title: 'The Select3',
      component: Select,
      options: ['one', 'two'],
    },
    select4: {
      title: 'The Select4',
      component: Select,
      options: ['one', 'two'],
      placeholder: 'placeholder',
    },
  },
});

module.exports = ({ storiesOf }) =>
  storiesOf('Form2/controls', module)
    .add('Select ', () => {
      return (
        <Story>
          <SelectForm
            initialValues={{
              select4: 'two',
            }}
          />
        </Story>
      );
    });
