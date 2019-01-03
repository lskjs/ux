import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import Story from '../../../Story';
import createForm from '../../createForm';
import InputComponent from '../../controls/Input';
import LightFormGroup from '../../LightFormGroup';
import DEV from '../../../DEV';


const ValidationView = (props) => {
  const {
    handleSubmit,
    isSubmitting,
    controls,
    errors,
  } = props;
  console.log({ props });
  return (
    <Form>
      Existing emails: some@email.com, someasync@email.com
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

const checkEmail = async (data) => {
  return new Promise(((resolve, reject) => {
    setTimeout(() => {
      if (data === 'someasync@email.com') {
        reject(new Error('email already exists'));
      } else {
        resolve();
      }
    }, 1000);
  }));
};

const ValidationAsync = createForm({
  view: ValidationView,
  FormGroup: LightFormGroup,
  controls: {
    email: {
      title: 'email',
      component: InputComponent,
      placeholder: 'email async placeholder',
      type: 'text',
      validator: {
        // asyncValidator: true,
        presence: {
          allowEmpty: false,
        },
        checkEmail: (value) => {
          if (value === 'some@email.com') {
            return 'email already exists';
          }
          return '';
        },
        checkEmailAsync: async (value) => {
          try {
            await checkEmail(value);
            return '';
          } catch (err) {
            return err.message;
          }
        },
      },
    },
    password: {
      title: 'password',
      component: InputComponent,
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
    .add('Custom async validation', () => {
      return (
        <Story>
          <ValidationAsync
            onSubmit={(values) => {
              console.log({ values });
            }}
          />
        </Story>
      );
    });
