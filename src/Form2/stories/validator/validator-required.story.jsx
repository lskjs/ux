import React from 'react';
import { Form, Field } from 'formik';
import Story from '../../../Story';
import createForm from '../../createForm';
import Input from '../../controls/Input';
import Select from '../../controls/Select';
import FormDebug from '../../FormDebug';


const ValidationView = (props) => {
  const {
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.email} />
      <Field {...controls.select} />
      <FormDebug {...props} />
    </Form>
  );
};

const Validation = createForm({
  view: ValidationView,
  controls: {
    email: {
      title: 'input',
      component: Input,
      required: true,
    },
    select: {
      title: 'select',
      component: Select,
      options: [1, 2, 3, 4],
      required: true,
    },
  },
});


export default ({ storiesOf }) =>
  storiesOf('Form2/validation', module)
    .add('validation with required', () => {
      return (
        <Story>
          <Validation
            onSubmit={(values) => {
              console.log({ values });
            }}
          />
        </Story>
      );
    });
