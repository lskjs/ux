import React from 'react';
import { Form, Field } from 'formik';
import { Button } from 'react-bootstrap';
import validate from 'validate.js';
import Story from '../../Story';
import createForm from '../createForm';
import Input from '../controls/Input';
import LightFormGroup from '../LightFormGroup';

const ValidationExampleView = (props) => {
  const {
    handleSubmit,
    controls,
  } = props;
  return (
    <Form>
      <Field {...controls.email} />
      <Field {...controls.password} />
      <Button onClick={handleSubmit}>SUBMIT</Button>
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

const ValidationExampleAsync = createForm({
  view: ValidationExampleView,
  FormGroup: LightFormGroup,
  controls: {
    email: {
      title: 'email',
      component: Input,
      placeholder: 'email async placeholder',
      type: 'text',
      validator: {
        asyncValidator: true,
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
  storiesOf('Form2', module)
    .add('ValidationExample', () => {
      return (
        <Story>
          <ValidationExample
            onSubmit={(values) => {
              console.log({ values });
            }}
          />
        </Story>
      );
    })
    .add('ValidationExample Async', () => {
      validate.validators.asyncValidator = (value) => {
        return new validate.Promise(((resolve) => {
          setTimeout(() => {
            if (value === 'foo') resolve();
            else resolve('is not foo');
          }, 1000);
        }));
      };
      return (
        <Story>
          <ValidationExampleAsync
            onSubmit={(values) => {
              console.log({ values });
            }}
          />
        </Story>
      );
    });
