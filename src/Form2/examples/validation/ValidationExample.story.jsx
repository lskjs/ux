import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import Input from '../../controls/Input';
import LightFormGroup from '../../LightFormGroup';
import DEV from '../../../DEV';


const ValidationExampleView = (props) => {
  const {
    handleSubmit,
    isSubmitting,
    controls,
    errors,
  } = props;
  console.log({ props });
  return (
    <Form>
      <Field {...controls.email} disabled={isSubmitting} />
      <Field {...controls.password} disabled={isSubmitting} />
      <Button onClick={handleSubmit} disabled={isSubmitting}>SUBMIT</Button>
      <br />
      <br />
      <br />
      props.errors:
      <DEV json={errors} />
    </Form>
  );
};

const ValidationExample = createForm({
  view: ValidationExampleView,
  FormGroup: LightFormGroup,
  controls: {
    email: {
      title: 'email',
      component: Input,
      placeholder: 'email placeholder',
      type: 'text',
      validator: {
        presence: {
          allowEmpty: false,
        },
      },
    },
    password: {
      title: 'password',
      component: Input,
      placeholder: 'password placeholder',
      type: 'password',
      validator: {
        presence: {
          allowEmpty: false,
        },
      },
    },
  },
});


module.exports = ({ storiesOf }) =>
  storiesOf('Form2/validation', module)
    .add('Validation with validate.js', () => {
      return (
        <Story>
          <ValidationExample
            onSubmit={(values) => {
              console.log({ values });
            }}
          />
        </Story>
      );
    });
